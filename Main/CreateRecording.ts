import './../Styles/RecordingFieldStyles.scss'
import { Track } from './CreateTrack';
export class RecordField{
    recordField: HTMLDivElement;
    allTracksField: HTMLDivElement;
    optionButton: HTMLButtonElement;
    trackOne: Track;
    trackTwo: Track;
    trackThree: Track;
    trackFour: Track;


    constructor(){
        this.recordField = document.querySelector('.record-field');
        this.allTracksField = document.createElement('div');
        this.allTracksField.classList.add('all-tracks-field');
        this.recordField.appendChild(this.allTracksField);

        // this.optionButton = document.createElement('button');
        // this.optionButton.classList.add('option-button');
        // this.optionButton.innerHTML = '<i class="fas fa-bars"></i>';
        // this.optionButton.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
        // this.recordField.appendChild(this.optionButton);

        this.trackOne = new Track('Track 1');
        this.trackTwo = new Track('Track 2');
        this.trackThree = new Track('Track 3');
        this.trackFour = new Track('Track 4');
        
    }
    a(): void{
        setInterval(() => console.log('IsTrackFull: ', this.trackOne.isTrackFull), 1000)
        setInterval(() => console.log('IsRecordStart: ', this.trackOne.isRecordStart), 1000)
    }
}