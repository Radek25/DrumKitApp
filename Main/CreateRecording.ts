import './../Styles/RecordingFieldStyles.scss'
import { Track } from './CreateTrack';
export class RecordField{
    recordField: HTMLDivElement;
    allTracksField: HTMLDivElement;
    optionButton: HTMLButtonElement;
    trackOne: HTMLDivElement;
    trackTwo: HTMLDivElement;
    trackThree: HTMLDivElement;
    trackFour: HTMLDivElement;


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

        new Track;
        new Track;
        new Track;
        new Track;
    
    }
}