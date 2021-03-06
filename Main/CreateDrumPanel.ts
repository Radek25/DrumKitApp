import {DrumCell} from './CreateDrumCell';
import { Metronome } from './CreateMetronome';
import { Record } from './CreateRecording';
export class DrumPanel{
    allPageContainer: HTMLDivElement;
    widthControlPage: HTMLDivElement;
    gifInControlPage: HTMLImageElement;
    logo: HTMLImageElement;
    drumBoard: HTMLDivElement;
    playField : HTMLDivElement;
    recordField: HTMLDivElement;
    cell: DrumCell;
    record: Record;

    constructor(){
        this.allPageContainer = document.createElement('div');
        this.allPageContainer.classList.add('all-page-container');
        document.body.appendChild(this.allPageContainer);

        this.widthControlPage = document.createElement('div');
        this.widthControlPage.classList.add('width-control-page');
        document.body.appendChild(this.widthControlPage);
        this.gifInControlPage = document.createElement('img');
        this.gifInControlPage.src = './Gif/turnScreen.gif';
        this.widthControlPage.appendChild(this.gifInControlPage);

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

        this.record = new Record;
        this.createCells();
        this.cell.playSoundKeyBoard();
        this.cell.pauseSoundKeyBoard();
        new Metronome;
    }

    createCells(): void{
        for (let index = 0; index < 9; index++) {
            this.cell = new DrumCell();
            this.cell.singleCell.id = `c${index}`;
            this.playField.appendChild(this.cell.singleCell);
            this.cell.addTextToCells(index);
            this.cell.addSoundToCells(index);
            this.cell.singleCell.appendChild(this.cell.titleCell);
            this.cell.singleCell.appendChild(this.cell.infoCell);
            this.cell.singleCell.appendChild(this.cell.audioCell);
            this.cell.playSoundTouchSystem();
            this.cell.pauseSoundTouchSystem();
            this.cell.record = this.record;
        }
    }
}
