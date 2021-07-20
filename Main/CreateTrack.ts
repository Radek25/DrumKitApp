import './../Styles/TrackFieldStyles.scss';

export class Track{
    allTracksField: HTMLDivElement;
    trackField: HTMLDivElement;
    controlField: HTMLDivElement;
    startRecord: HTMLButtonElement;
    playRecord: HTMLButtonElement;
    deleteRecord: HTMLButtonElement;
    recordDiode: HTMLDivElement;
    drumBoard: HTMLDivElement;
    recordStartCounter: HTMLDivElement;
    isRecordStart: boolean = false;
    isTrackFull: boolean = false;

    constructor(titleOfTrack: string){
        this.allTracksField = document.querySelector('.all-tracks-field');
        this.trackField = document.createElement('div');
        this.trackField.classList.add('soundtracks');
        this.trackField.innerText = `${titleOfTrack}`
        this.allTracksField.appendChild(this.trackField);

        this.controlField = document.createElement('div');
        this.controlField.classList.add('control-field');
        this.trackField.appendChild(this.controlField);

        this.startRecord = document.createElement('button');
        this.startRecord.classList.add('controls-icon');
        this.startRecord.classList.add('start-record');
        this.startRecord.innerHTML = '<i class="fas fa-record-vinyl"></i>';
        this.controlField.appendChild(this.startRecord);

        this.playRecord = document.createElement('button');
        this.playRecord.classList.add('controls-icon');
        this.playRecord.innerHTML = '<i class="far fa-play-circle"></i>';
        this.controlField.appendChild(this.playRecord);

        this.deleteRecord = document.createElement('button');
        this.deleteRecord.classList.add('controls-icon');
        this.deleteRecord.innerHTML = '<i class="far fa-times-circle"></i>';
        this.controlField.appendChild(this.deleteRecord);
        
        this.afterRecordClick();
    }
    afterRecordClick(): void{
        this.startRecord.addEventListener('click', () => {
            if(this.isRecordStart === false && this.isTrackFull !== true){
                setTimeout(() => this.startRecord.style.color = '#ff0000', 2950);
                this.addCounterPage();
                this.isRecordStart = !this.isRecordStart;
            }
            else{
                this.startRecord.style.color = '#ffffff8c';
                this.isRecordStart = false;
                this.isTrackFull = true;
            }
        })
    }
    addCounterPage(): void{
        let counter: number = 2;
        this.drumBoard = document.querySelector('.drum-board');
        this.recordStartCounter = document.createElement('div');
        this.recordStartCounter.classList.add('counter-page');
        this.drumBoard.appendChild(this.recordStartCounter);
        this.recordStartCounter.innerText = '3';

        let counterInterval = setInterval(() => {
            if(counter > 0){
                this.recordStartCounter.innerText = `${counter}`;
                counter--;
            }
            else{
                clearInterval(counterInterval);
            }
        },1000);
        setTimeout(() => this.recordStartCounter.remove(), 3000);
    }
}