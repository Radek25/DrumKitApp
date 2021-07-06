export class RecordField{
    recordField: HTMLDivElement;


    constructor(){
        this.recordField = document.querySelector('.record-field');
        this.recordField.innerText = 'BBB';
        console.log('Działa Record!');
    }
}