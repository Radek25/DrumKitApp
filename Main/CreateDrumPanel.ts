import {DrumCell} from './CreateDrumCell';
import { SoundArray, TitleArray } from './DataArrays';
import { Metronome } from './CreateMetronome';
import { RecordField } from './CreateRecording';
export class DrumPanel{
    allPageContainer: HTMLDivElement;
    logo: HTMLImageElement;
    drumBoard: HTMLDivElement;
    playField : HTMLDivElement;
    recordField: HTMLDivElement;
    cell: DrumCell;
    titleCell: HTMLHeadingElement;
    infoCell: HTMLParagraphElement;
    audioCell: HTMLAudioElement;
    record: RecordField;

    constructor(){
        this.allPageContainer = document.createElement('div');
        this.allPageContainer.classList.add('all-page-container');
        document.body.appendChild(this.allPageContainer);

        this.logo = document.createElement('img');
        this.logo.src = './Logo/logo.png';
        this.logo.classList.add('logo');
        this.allPageContainer.appendChild(this.logo);

        this.drumBoard = document.createElement('div');
        this.drumBoard.classList.add('drum-board');
        this.allPageContainer.appendChild(this.drumBoard);

        this.playField = document.createElement('div');
        this.playField.classList.add('play-field');
        this.drumBoard.appendChild(this.playField);

        this.recordField = document.createElement('div');
        this.recordField.classList.add('record-field');
        this.drumBoard.appendChild(this.recordField);

        this.record = new RecordField;
        new Metronome;
        this.createCells();
    }

    createCells(): void{
        
        for (let index = 0; index < 9; index++) {
            this.cell = new DrumCell();
            this.cell.singleCell.id = `c${index}`;
            this.playField.appendChild(this.cell.singleCell);
            this.addTextToCells(index);
            this.addSoundToCells(index);
        }
    }
    addTextToCells(index: number): void{
        this.titleCell = document.createElement('h5');
        this.titleCell.innerHTML = TitleArray[index].Name;
        this.cell.singleCell.appendChild(this.titleCell);

        this.infoCell = document.createElement('p');
        this.infoCell.innerHTML = TitleArray[index].Info;
        this.cell.singleCell.appendChild(this.infoCell);
    }
    addSoundToCells(index: number): void{
        this.audioCell = document.createElement('audio');
        this.audioCell.setAttribute('src', SoundArray[index].Src);
        this.audioCell.classList.add('audio'+index);
        this.cell.singleCell.appendChild(this.audioCell);
    }
    playSound(): void{
        window.addEventListener('keydown', (e) => {
            if((SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode)) !== undefined){
                let cellIndex: number = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Index;
                let keyDownFinder: string = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Id;
                let playingCell: HTMLAudioElement = document.querySelector(`${keyDownFinder}`);
                let backgroundColorOfCell: HTMLElement = document.querySelector('#c'+cellIndex);
                backgroundColorOfCell.style.backgroundColor = '#8cc534';
                playingCell.play();
                this.record.keyCode  = e.keyCode;
                this.record.timeStart = new Date().getTime();
            }
        })
        
    }
    pauseSound(): void{
        window.addEventListener('keyup', (e) => {
            if((SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode)) !== undefined){
                let cellIndex: number = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Index;
                let keyDownFinder: string = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Id;
                let playingCell: HTMLAudioElement = document.querySelector(`${keyDownFinder}`);
                let backgroundColorOfCell: HTMLElement = document.querySelector('#c'+cellIndex);
                backgroundColorOfCell.style.backgroundColor = '#202020';
                playingCell.pause();
                playingCell.currentTime = 0;
                this.record.timeStop = new Date().getTime();
                this.record.getTimeAndKeyCode();
            }
        })
    }
}
