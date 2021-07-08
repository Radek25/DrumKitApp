import './../Styles/RecordingFieldStyles.scss'
import { Track } from './CreateTrack';
export class RecordField{
    recordField: HTMLDivElement;
    allTracksField: HTMLDivElement;
    // optionButton: HTMLButtonElement;
    // optionalMenu: HTMLDivElement;
    isOptionalMenuOpen: boolean = false;
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
        // this.optionButton.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
        // this.recordField.appendChild(this.optionButton);

        // this.optionalMenu = document.createElement('div');
        // this.optionalMenu.classList.add('optional-menu');
        // this.recordField.appendChild(this.optionalMenu);

        this.trackOne = new Track('Track 1');
        this.trackTwo = new Track('Track 2');
        this.trackThree = new Track('Track 3');
        this.trackFour = new Track('Track 4');
        // this.openOptionalMenu();
    }
    a(): void{
        setInterval(() => console.log('IsTrackFull: ', this.trackOne.isTrackFull), 1000)
        setInterval(() => console.log('IsRecordStart: ', this.trackOne.isRecordStart), 1000)
    }
    // openOptionalMenu(): void{
    //     this.optionButton.addEventListener('click', () => {
    //         if(this.isOptionalMenuOpen === true){
    //             this.optionalMenu.style.display = 'flex';
    //             this.isOptionalMenuOpen = !this.isOptionalMenuOpen;
    //         }
    //         else{
    //             this.optionalMenu.style.display = 'none';
    //             this.isOptionalMenuOpen = !this.isOptionalMenuOpen;
    //         }
    //     })
    // }
}