import './../Styles/TrackFieldStyles.scss';

export class Track{
    allTracksField: HTMLDivElement;
    trackField: HTMLDivElement;


    constructor(){
        this.allTracksField = document.querySelector('.all-tracks-field');
        this.trackField = document.createElement('div');
        this.trackField.classList.add('soundtracks');
        this.allTracksField.appendChild(this.trackField);
    }
}