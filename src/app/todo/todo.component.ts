// YÖNTEM 2
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  items: string[] = [];
  newItem: string = '';
  completedItems: string[] = [];
  showItemsAlert = true;
  showCompletedAlert = true;

  @Output() todoData = new EventEmitter<string[]>();

  addItem(newItem: string) {
    if (newItem.trim() !== '') {
      this.items.push(newItem);

      switch (this.items.length) {
        case 0:
          this.showItemsAlert = true;
          break;
        case 1:
          this.showItemsAlert = false;
          break;
      }

      this.todoData.emit(this.items);

      this.newItem = '';
    }
  }

  completedItem(index: number) {
    const completedItem = this.items.splice(index, 1)[0];
    this.completedItems.push(completedItem);


    switch (this.completedItems.length) {
      case 0:
        this.showCompletedAlert = true;
        break;
    }
}    

  removeItem(index: number) {
    this.items.splice(index, 1);
    if (this.items.length === 0) {
      this.showItemsAlert = true;
    }

    this.todoData.emit(this.items);
  }


    alertRemoveItem(index: number) {
      if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
        this.removeItem(index);
      }
    }
  
}







// YÖNTEM 1
// import { Component } from '@angular/core';
// import { NotificationService } from '../notification.service';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent {
//   items: string[] = [];
//   newItem: string[] = [];
//   showItemsAlert = true;

//   constructor(public notificationService: NotificationService) {} // Notification servisini enjekte ediyoruz

//   addItem(newItem: string) {
//     if (newItem.trim() !== '') {
//       this.items.push(newItem);

//       switch (this.items.length) {
//         case 0:
//           this.showItemsAlert = true;
//           break;
//         case 1:
//           this.showItemsAlert = false;
//           break;
//           {
    
//           }
//         }
//       }
//     }
  
//     removeItem(index: number) {
//     this.items.splice(index, 1);
//     if (this.items.length === 0) {
//       this.showItemsAlert = true; // Yapılacaklar listesi boşsa alerti göster
//     }
//   }

//     alertRemoveItem(index: number) {
//       if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
//         this.removeItem(index);
//       }
//     }
  
//   }  

