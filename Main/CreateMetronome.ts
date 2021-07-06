import './../Styles/Metronome.scss';

export class Metronome{
    recordField: HTMLDivElement;
    metronomeField: HTMLDivElement;
    setMetronomeButton: HTMLButtonElement;
    deleteMetronomeButton: HTMLButtonElement;
    displayValueBPM: HTMLDivElement;
    optionFieldContainer: HTMLDivElement;
    startMetronomeButton: HTMLButtonElement;
    stopMetronomeButton: HTMLButtonElement;
    resetMetronomeButton: HTMLButtonElement;
    BPMValue: number | null;

    constructor(){
        this.recordField = document.querySelector('.record-field');
        this.metronomeField = document.createElement('div');
        this.metronomeField.classList.add('metronome-field');
        this.recordField.appendChild(this.metronomeField);

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
            this.deleteMetronomeButton.innerHTML = '<i class="fas fa-minus"></i>';
            this.metronomeField.appendChild(this.deleteMetronomeButton);

            this.displayValueBPM = document.createElement('div');
            this.displayValueBPM.classList.add('display-value-BPM');
            this.displayValueBPM.innerText = '60';
            this.metronomeField.appendChild(this.displayValueBPM);

            this.optionFieldContainer = document.createElement('div');
            this.optionFieldContainer.classList.add('option-field-container');
            this.metronomeField.appendChild(this.optionFieldContainer);

            this.resetMetronomeButton = document.createElement('button');
            this.resetMetronomeButton.classList.add('reset-metronome-button');
            this.resetMetronomeButton.innerHTML = '<i class="far fa-stop-circle"></i>';
            this.optionFieldContainer.appendChild(this.resetMetronomeButton);

            this.startMetronomeButton = document.createElement('button');
            this.startMetronomeButton.classList.add('start-metronome-button');
            this.startMetronomeButton.innerHTML = '<i class="far fa-play-circle"></i>';
            this.optionFieldContainer.appendChild(this.startMetronomeButton);

            this.stopMetronomeButton = document.createElement('button');
            this.stopMetronomeButton.classList.add('stop-metronome-button');
            this.stopMetronomeButton.innerHTML = '<i class="far fa-pause-circle"></i>';
            this.optionFieldContainer.appendChild(this.stopMetronomeButton);

            this.optionFieldContainer.style.display = 'flex';
            this.displayValueBPM.style.display = 'flex';
            this.deleteMetronome();
        });
    }
    deleteMetronome(): void{
        this.deleteMetronomeButton.addEventListener('click', () => {
            this.deleteMetronomeButton.style.display = 'none';
            this.displayValueBPM.style.display = 'none';
            this.optionFieldContainer.style.display = 'none';
            this.setMetronomeButton.style.display = 'flex';
        });
    }
}