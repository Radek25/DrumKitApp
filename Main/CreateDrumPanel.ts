import {DrumCell} from './CreateDrumCell';
export class DrumPanel{
    allPageContainer: HTMLDivElement;
    logo: HTMLImageElement;
    drumBoard: HTMLDivElement;
    playField : HTMLDivElement;
    recordField: HTMLDivElement;
    cells: DrumCell;

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

        this.createCells();
    }

    createCells(): void{
        for (let index = 0; index < 9; index++) {
            this.playField.appendChild(new DrumCell().singleCell);
        }
    }
}