import { Component, Output, EventEmitter } from '@angular/core'; // 17. SATIRI DİKKATE ALMADAN EVVEL IMPORTA OUTPUT VE EVENTEMIITER EKLEMEYİ UNUTMA !!!

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  @Output() newItemAdded = new EventEmitter<string>(); // BURADA EVENT EMMITTERI TANIMLIYORUZ (VERİ İLETİMİ İÇİN ELZEM)
  
  inputValue = ''; // TEXTBOX VALUE DEĞERİ
  items: string[] = []; // YAPILACAKLAR LİSTESİ DEĞERİ

  addItem() {
    if (this.inputValue !== '') {
      this.items.push(this.inputValue); // TEXTBOXDAN GELEN DEĞERİ YAPILACAKLAR LİSTESİNE EKLER.
      this.newItemAdded.emit(this.inputValue); // BUNU YAZMAZSAN TEXTBOX ÇALIŞMAZ !!!!!!!!!!!!!!!!!!!!!!!!!!
      this.inputValue = '';
    }
  }
      
}