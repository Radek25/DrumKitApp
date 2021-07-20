import { IgnorePlugin } from 'webpack';
import './../Styles/RecordingFieldStyles.scss'
import { Track } from './CreateTrack';
import { FirstRecordArray, SecondRecordArray, ThirdRecordArray, FourthRecordArray, SoundArray } from './DataArrays';
export class RecordField{
    recordField: HTMLDivElement;
    allTracksField: HTMLDivElement;
    trackOne: Track;
    trackTwo: Track;
    trackThree: Track;
    trackFour: Track;

    timeStart: number;
    timeStop: number;
    timeBreakStart: number;
    timeBreakStop: number;
    keyCode: number;
    constructor(){
        this.recordField = document.querySelector('.record-field');
        this.allTracksField = document.createElement('div');
        this.allTracksField.classList.add('all-tracks-field');
        this.recordField.appendChild(this.allTracksField);

        this.trackOne = new Track('Track 1');
        this.trackTwo = new Track('Track 2');
        this.trackThree = new Track('Track 3');
        this.trackFour = new Track('Track 4');
        this.addBreakTimeAndPlayRecord();
        this.deleteRecord();
    }
  

    getTimeAndKeyCode(): void{

        let data = {
            currentTime: this.timeStop - this.timeStart,
            key: this.keyCode,
            timeStart: this.timeStart,
            timeStop: this.timeStop,
            breakTime: 0
        }
        switch (true) {
            case this.trackOne.isRecordStart:
                FirstRecordArray.push(data);
            break;
            case this.trackTwo.isRecordStart:
                SecondRecordArray.push(data);
            break;
            case this.trackThree.isRecordStart:
                ThirdRecordArray.push(data);
            break;
            case this.trackFour.isRecordStart:
                FourthRecordArray.push(data);
            break;
            default:
                null;
            break;
        }
    }
    addBreakTimeAndPlayRecord(): void{
        this.trackOne.playRecord.addEventListener('click', () => playRecordTrack(FirstRecordArray, this.trackOne.isTrackFull));
        this.trackTwo.playRecord.addEventListener('click', () => playRecordTrack(SecondRecordArray, this.trackTwo.isTrackFull));
        this.trackThree.playRecord.addEventListener('click', () => playRecordTrack(ThirdRecordArray, this.trackThree.isTrackFull));
        this.trackFour.playRecord.addEventListener('click', () => playRecordTrack(FourthRecordArray, this.trackFour.isTrackFull));

        function playRecordTrack(arrayOfTrack: any[], isTrackFull: boolean): void{
            if(isTrackFull === true){
                getBreakTime(arrayOfTrack);

                let offSet: number = 0;
                arrayOfTrack.forEach(e => {
                    let soundId: string = SoundArray.find(SoundArray => SoundArray.KeyCode === e.key).Id;
                    let playCell: HTMLAudioElement = document.querySelector(`${soundId}`);
                    setTimeout(() => {
                        playCell.play();
                        setTimeout(() => playCell.pause(), e.currentTime + offSet);
                    }, e.breakTime + offSet);
                    offSet += e.currentTime + e.breakTime;
                });
            }
        }
        function getBreakTime(arrayOfTrack: any[]): void{
            let breakTime: number;
            for (let index = 0; index < arrayOfTrack.length-1; index++) {
                breakTime = arrayOfTrack[index+1].timeStart - arrayOfTrack[index].timeStop;
                arrayOfTrack[index+1].breakTime = breakTime;
            }
        }
    }
    deleteRecord(): void{
        this.trackOne.deleteRecord.addEventListener('click', () => {
            if(confirm('Do you want remove record on Track 1?')){
                FirstRecordArray.length = 0; 
                this.trackOne.isTrackFull = false;
            }
            else{
                null;
            }
        });
        this.trackTwo.deleteRecord.addEventListener('click', () => {
            if(confirm('Do you want remove record on Track 2?')){
                SecondRecordArray.length = 0; 
            this.trackTwo.isTrackFull = false;
            }
            else{
                null;
            }
        });
        this.trackThree.deleteRecord.addEventListener('click', () => {
            if(confirm('Do you want remove record on Track 3?')){
                ThirdRecordArray.length = 0; 
                this.trackThree.isTrackFull = false;
            }
            else{
                null;
            }
        });
        this.trackFour.deleteRecord.addEventListener('click', () => {
            if(confirm('Do you want remove record on Track 4?')){
                FourthRecordArray.length = 0; 
                this.trackFour.isTrackFull = false;
            }
            else{
                null;
            }
        });
    }
}