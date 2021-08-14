import './../Styles/SingleCell';
import { Record } from './CreateRecording';
import { SoundArray, TitleArray } from './DataArrays';
export class DrumCell{
    singleCell: HTMLDivElement;
    titleCell: HTMLHeadingElement;
    infoCell: HTMLParagraphElement;
    audioCell: HTMLAudioElement;
    record: Record;
    supportsTouch: any = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    constructor(){
        this.singleCell = document.createElement('div');
        this.singleCell.classList.add('single-cell');
    }
    addTextToCells(index: number): void{
        this.titleCell = document.createElement('h5');
        this.titleCell.innerHTML = TitleArray[index].Name;
        this.titleCell.id = `c${index}`;

        this.infoCell = document.createElement('p');
        this.infoCell.id = `c${index}`;

        if(('ontouchstart' in window || navigator.msMaxTouchPoints) === true && window.screen.width < 1100){
            this.infoCell.innerHTML = 'Touch'
        }
        else{
            this.infoCell.innerHTML = TitleArray[index].Info;
        }
    }
    addSoundToCells(index: number): void{
        console.log(SoundArray[index].Src);
        this.audioCell = document.createElement('audio');
        this.audioCell.setAttribute('src', SoundArray[index].Src);
        console.log(SoundArray[index].Src);
        this.audioCell.classList.add('audio'+index);
    }
    playSoundKeyBoard(): void{
        window.addEventListener('keydown', (e) => {
            if((SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode)) !== undefined){
                let cellIndex: number = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Index;
                let keyDownFinder: string = SoundArray.find(SoundArray => SoundArray.KeyCode === e.keyCode).Id;
                let playingCell: HTMLAudioElement = document.querySelector(`${keyDownFinder}`);
                let backgroundColorOfCell: HTMLElement = document.querySelector('#c'+cellIndex);
                backgroundColorOfCell.style.backgroundColor = '#8cc534';
                playingCell.play();
                this.record.keyCode = e.keyCode;
                this.record.timeStart = new Date().getTime();
            }
        }) 
    }
    pauseSoundKeyBoard(): void{
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
    playSoundTouchSystem(): void{
        this.singleCell.addEventListener('touchstart', () => {
            if((SoundArray.find(SoundArray => SoundArray.TouchId === this.singleCell.id)) !== undefined){
                let playingCell: HTMLAudioElement = document.querySelector(`.audio${this.singleCell.id.slice(1)}`);
                let backgroundColorOfCell: HTMLElement = document.querySelector(`#${this.singleCell.id}`);
                backgroundColorOfCell.style.backgroundColor = '#8cc534';
                playingCell.play();
                this.record.keyCode = SoundArray.find(SoundArray => SoundArray.TouchId === this.singleCell.id).KeyCode;
                this.record.timeStart = new Date().getTime();
            }
        }, {passive: true})
    }
    pauseSoundTouchSystem(): void{
        this.singleCell.addEventListener('touchend', () => {
            if((SoundArray.find(SoundArray => SoundArray.TouchId === this.singleCell.id)) !== undefined){
                let playingCell: HTMLAudioElement = document.querySelector(`.audio${this.singleCell.id.slice(1)}`);
                let backgroundColorOfCell: HTMLElement = document.querySelector(`#${this.singleCell.id}`);
                backgroundColorOfCell.style.backgroundColor = '#202020';
                playingCell.pause();
                playingCell.currentTime = 0;
                this.record.timeStop = new Date().getTime();
                this.record.getTimeAndKeyCode();
            }
        })
    }
}