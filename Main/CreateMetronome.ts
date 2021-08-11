import './../Styles/Metronome.scss';
export class Metronome{
    recordField: HTMLDivElement;
    metronomeField: HTMLDivElement;
    soundOfMetronome: HTMLAudioElement;
    setMetronomeButton: HTMLButtonElement;
    deleteMetronomeButton: HTMLButtonElement;
    displayValueBPM: HTMLDivElement;
    optionFieldContainer: HTMLDivElement;
    startMetronomeButton: HTMLButtonElement;
    editMetronomeButton: HTMLButtonElement;
    inputBPMValue: HTMLInputElement;
    isInputOpen: boolean = false;
    isMetronomeStart: boolean = false;
    lastBPMValue: number;
    BPMValue: number = 60;

    constructor(){
        this.recordField = document.querySelector('.record-field');
        this.metronomeField = document.createElement('div');
        this.metronomeField.classList.add('metronome-field');
        this.recordField.appendChild(this.metronomeField);

        this.soundOfMetronome = document.createElement('audio');
        this.soundOfMetronome.id = 'sound-of-metronome';
        this.soundOfMetronome.setAttribute('src', '../Sounds/tink.wav');
        this.metronomeField.appendChild(this.soundOfMetronome);

        this.setMetronomeButton = document.createElement('button');
        this.setMetronomeButton.classList.add('set-BPM-button');
        this.setMetronomeButton.innerText = 'Click to use metronome!';
        this.metronomeField.appendChild(this.setMetronomeButton);
        this.useMetronome();
    }

    useMetronome(): void {
        this.setMetronomeButton.addEventListener('click', () => {
            this.setMetronomeButton.style.display = 'none';

            this.deleteMetronomeButton = document.createElement('button');
            this.deleteMetronomeButton.classList.add('delete-metronome-button');
            this.deleteMetronomeButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
            this.metronomeField.appendChild(this.deleteMetronomeButton);

            this.displayValueBPM = document.createElement('div');
            this.displayValueBPM.classList.add('display-value-BPM');
            this.displayValueBPM.innerText = '60';
            this.metronomeField.appendChild(this.displayValueBPM);

            this.optionFieldContainer = document.createElement('div');
            this.optionFieldContainer.classList.add('option-field-container');
            this.metronomeField.appendChild(this.optionFieldContainer);

            this.editMetronomeButton = document.createElement('button');
            this.editMetronomeButton.classList.add('reset-metronome-button');
            this.editMetronomeButton.innerHTML = '<i class="fas fa-pen"></i>';
            this.optionFieldContainer.appendChild(this.editMetronomeButton);

            this.startMetronomeButton = document.createElement('button');
            this.startMetronomeButton.classList.add('start-metronome-button');
            this.startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
            this.optionFieldContainer.appendChild(this.startMetronomeButton);

            this.optionFieldContainer.style.display = 'flex';
            this.displayValueBPM.style.display = 'flex';
            this.deleteMetronome();
            this.addBPMValue();
            this.controlMetronome();
        });
    }
    deleteMetronome(): void{
        this.deleteMetronomeButton.addEventListener('click', () => {
            this.isMetronomeStart = false;
            this.BPMValue = 60;
            this.deleteMetronomeButton.style.display = 'none';
            this.displayValueBPM.style.display = 'none';
            this.optionFieldContainer.style.display = 'none';
            this.setMetronomeButton.style.display = 'flex';
        });
    }
    addBPMValue(): void{
        this.editMetronomeButton.addEventListener('click', () => {
            this.lastBPMValue = this.BPMValue;
            this.isInputOpen = !this.isInputOpen;
            if(this.isInputOpen === true){
                this.isMetronomeStart = false;
                this.inputBPMValue = document.createElement('input');
                this.displayValueBPM.innerText = '';
                this.displayValueBPM.appendChild(this.inputBPMValue);
                this.startMetronomeButton.style.display = 'none';
                this.editMetronomeButton.innerHTML = '<i class="fas fa-check"></i>';
            }
            else{
                this.setBPMValue();
                this.displayValueBPM.innerText = `${this.BPMValue}`;
                this.startMetronomeButton.style.display = 'flex';
                this.startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
                this.editMetronomeButton.innerHTML = '<i class="fas fa-pen"></i>';
            }
        })
    }
    setBPMValue(): void{
        let newBPMValue: number = parseInt(this.inputBPMValue.value);
        if(isNaN(newBPMValue) || newBPMValue > 200 || newBPMValue < 1){
            alert('No BPM value was specified or the value format was incorrect (correct format is an integer from 1 to 200)!');
            this.BPMValue = this.lastBPMValue;
        }
        else{
            this.BPMValue = newBPMValue;
        }
    }
    controlMetronome(): void{
        this.startMetronomeButton.addEventListener('click', () => {
            this.isMetronomeStart = !this.isMetronomeStart;
            playOrPouse(this.isMetronomeStart, this.startMetronomeButton, this.deleteMetronomeButton, this.editMetronomeButton, this.BPMValue);
        });
        function playOrPouse(isMetronomeStart: boolean, startMetronomeButton: HTMLButtonElement, deleteMetronomeButton: HTMLButtonElement, editMetronomeButton: HTMLButtonElement, BPMValue: number){
            if(isMetronomeStart === true){
                startMetronomeButton.innerHTML = '<i class="fas fa-pause"></i>';
                let metronomeInterval = setInterval(playMetronome, (60 * 1000) / BPMValue);

                startMetronomeButton.addEventListener('click', () => stopMetronome(metronomeInterval)); 
                deleteMetronomeButton.addEventListener('click', () => stopMetronome(metronomeInterval));
                editMetronomeButton.addEventListener('click', () => stopMetronome(metronomeInterval));
            }
            else{
                startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        }
       function playMetronome(): void{
           let tic: HTMLAudioElement = document.querySelector('#sound-of-metronome');
           tic.play();
       }
       function stopMetronome(metronomeInterval: NodeJS.Timeout): void{
           clearInterval(metronomeInterval);
       }
    }
}