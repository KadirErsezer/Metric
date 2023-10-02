// YÖNTEM 1
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-job',
//   templateUrl: './job.component.html',
//   styleUrls: ['./job.component.css']
// })
// export class JobComponent {
//   @Input() title: string = '';
//   @Input() items: string[] = [];
//   @Input() completedItems: string[] = [];
//   @Input() isVisible: boolean = true;

//   // Verileri ana bileşene iletmek için EventEmitter'ları tanımla.
//   @Output() todoData = new EventEmitter<string[]>();
//   @Output() completedData = new EventEmitter<string[]>();
// }

// job.component.ts

// YÖNTEM 2
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Input() completedItems: string[] = [];
  @Input() isVisible: boolean = true;
  @Input() isButtonVisible: boolean = true; // Yeni input değeri

   bitir() {
    // Bitir butonuna tıklandığında isVisible değerini false olarak değiştir
    this.isVisible = false;
}

}
