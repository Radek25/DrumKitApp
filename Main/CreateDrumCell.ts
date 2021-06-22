import './../Styles/SingleCell';
export class DrumCell{
    singleCell: HTMLDivElement;

    constructor(){
        this.singleCell = document.createElement('div');
        this.singleCell.classList.add('single-cell');
    }
}