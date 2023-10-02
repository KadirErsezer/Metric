// YENİ YÖNTEM 2
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  todo: string[] = [];
  completed: string[] = [];
  isVisible: boolean = true;

  constructor() {
    // Todo ve completed dizilerini başlangıçta boş olarak tanımla.
    // Örnek başlangıç değerleri:
     this.todo = [''];
     this.completed = [''];
  }

  // Todo bileşeninden gelen veriyi alır.
  onTodoData(todoData: string[]) {
    this.todo = todoData;
  }

  // Completed bileşeninden gelen veriyi alır
  onCompletedData(completedData: string[]) {
    this.completed = completedData;
  }
//   bitir() {
//     // Bitir butonuna tıklandığında isVisible değerini false olarak değiştir    ÇALIŞAN SİSTEMİ BOZDUĞU İÇİN KALDIRDILDI !
//     this.isVisible = false;
// }

}





// YENİ YÖNTEM 1
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent {
//   // Örnek olarak todo ve completed dizilerini burada tanımlayabilirsin.
//   todo: string[] = [];
//   completed: string[] = [];

//   constructor() {
//     // İstersen constructor içinde bu dizilere başlangıç değerleri atayabilirsin ama farketmez.
//     this.todo = ['Görev 1', 'Görev 2'];
//     this.completed = ['Tamamlanan Görev 1', 'Tamamlanan Görev 2'];
//   }
// }





// ÇALIŞAN YÖNTEM
// import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent {
// //   inputValue = '';
// //   items: string[] = [];
// //   completedItems: string[] = [];
// //   showItemsAlert = true;
// //   showCompletedAlert = true;

// //   addItem() {
// //     if (this.inputValue.trim() !== '') {
// //       this.items.push(this.inputValue);
// //       this.inputValue = '';
      
// //       if (this.items.length !== 0) {
// //         this.showItemsAlert = false; // Yapılacaklar listesi boşsa alert'i göster
// //         setTimeout(() => {
// //           this.showItemsAlert = false; // Belirli bir süre sonra alert'i gizle
// //         }, 2000);
// //       }
// //       else {
// //         this.showItemsAlert = true;
// //       }
// //     }
// //   }
  
// //   completeItem(index: number) {
// //     const completedItem = this.items.splice(index, 1)[0];
// //     this.completedItems.push(completedItem);
    
// //     if (this.completedItems.length === 0) {
// //       this.showCompletedAlert = true; // Bitenler listesi boşsa alert'i göster
// //       setTimeout(() => {
// //         this.showCompletedAlert = true; // Belirli bir süre sonra alert'i gizle
// //       }, 2000);
// //     }
// //     // else {
// //     //   this.showCompletedAlert = false;
// //     // }
// //   }
  
// //   removeItem(index: number) {
// //     this.items.splice(index, 1);
// //   }

// //   removecompletedItems(index:number) {
// //     this.completedItems.splice(index,1)
// //   }

// //   confirmRemoveItem(index: number) {
// //     const confirmation = confirm("Bu öğeyi silmek istediğinizden emin misiniz?");
    
// //     if (confirmation) {
// //       // Kullanıcı Eveti seçtiyse öğeyi sil
// //       this.removeItem(index);
// //       // Kullanıcı Hayırı seçmediyse ve removeItems işlemi başarılıysa, öğeyi sil
// //     } else {
// //       // Kullanıcı Hayırı seçtiyse hiçbir şey yapma
// //     }
// // }
// // confirmRemovecompletedItems(index: number) {
// //   const confirmation = confirm("Bu öğeyi silmek istediğinizden emin misiniz?");
  
// //   if (confirmation) {
// //     // Kullanıcı Eveti seçtiyse öğeyi sil
// //     this.removecompletedItems(index);
// //     // Kullanıcı Hayırı seçmediyse ve removeCompletedItems işlemi başarılıysa, öğeyi sil
// //   } else {
// //     // Kullanıcı Hayırı seçtiyse hiçbir şey yapma
// //   }
// //   // if (this.items.length === 0) {
// //   //   alert('Yapılacaklar listesi boş!');
// //   // }
  
// //   // if (this.completedItems.length === 0) {
// //   //   alert('Bitenler listesi boş!');
// //   // }
// // }

// }
