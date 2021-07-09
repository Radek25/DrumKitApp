import './../Styles/RecordingFieldStyles.scss'
import { Track } from './CreateTrack';
import { FirstRecordArray, SecondRecordArray, ThirdRecordArray, FourthRecordArray } from './DataArrays';
export class RecordField{
    recordField: HTMLDivElement;
    allTracksField: HTMLDivElement;
    isOptionalMenuOpen: boolean = false;
    trackOne: Track;
    trackTwo: Track;
    trackThree: Track;
    trackFour: Track;

    timeStart: number;
    timeStop: number;
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
    }
  

    getTimeAndKeyCode(): void{

        let data = {
            currentTime: this.timeStop - this.timeStart,
            key: this.keyCode
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
        console.log('Pierwsza tablica: ', FirstRecordArray);
        console.log('Druga tablica: ', SecondRecordArray);
        console.log('Trzecia tablica: ', ThirdRecordArray);
        console.log('Czwarta tablica: ', FourthRecordArray);
    }
}