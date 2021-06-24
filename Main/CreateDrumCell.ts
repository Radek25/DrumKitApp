import './../Styles/SingleCell';
export class DrumCell{
    singleCell: HTMLDivElement;
    titleCell: HTMLDivElement;

    constructor(){
        this.singleCell = document.createElement('div');
        this.singleCell.classList.add('single-cell');
    }
}