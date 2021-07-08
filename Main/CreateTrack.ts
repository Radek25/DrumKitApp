import './../Styles/TrackFieldStyles.scss';

export class Track{
    allTracksField: HTMLDivElement;
    trackField: HTMLDivElement;
    controlField: HTMLDivElement;
    startRecord: HTMLButtonElement;
    playRecord: HTMLButtonElement;
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
        this.startRecord.classList.add('start-record');
        this.startRecord.innerHTML = '<i class="fas fa-record-vinyl"></i>';
        this.controlField.appendChild(this.startRecord);

        this.playRecord = document.createElement('button');
        this.playRecord.classList.add('play-record');
        this.playRecord.innerHTML = '<i class="far fa-play-circle"></i>';
        this.controlField.appendChild(this.playRecord);

        
        this.afterRecordClick();
    }
    afterRecordClick(): void{
        this.startRecord.addEventListener('click', () => {
            if(this.isRecordStart === false){
                this.recordDiode = document.createElement('div');
                this.recordDiode.classList.add('record-diode'); 
                setTimeout(() => this.startRecord.appendChild(this.recordDiode), 2950);
                this.addCounterPage();
                this.isRecordStart = !this.isRecordStart;
            }
            else{
                this.recordDiode.style.display = 'none';
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
                this.recordStartCounter.innerText = 'Recording starts!';
            }
        },1000);
        setTimeout(() => this.recordStartCounter.remove(), 3400);
    }
}