import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

  @Component({
    selector: 'app-yapilacaklar',
    templateUrl: './yapilacaklar.component.html',
    styleUrls: ['./yapilacaklar.component.css']
  })
  export class YapilacaklarComponent {
    items: string[] = [];
    newItem: string[] = [];
    completedItems: string[] = [];
    showItemsAlert = true;
    showCompletedAlert = true;
    isVisible = true;
  
    constructor(public notificationService: NotificationService) {} // Notification servisini enjekte ediyoruz
  
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
            {
      
            }
          }
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
        this.showItemsAlert = true; // Yapılacaklar listesi boşsa alerti göster
      }
    }
  
    
      removecompletedItems(index: number) {
        this.completedItems.splice(index, 1);
      }
    
      alertRemoveItem(index: number) {
        if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
          this.removeItem(index);
        }
      }
    
      alertRemovecompletedItems(index: number) {
        if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
          this.removecompletedItems(index);
        }
      }
    
      // bitir() {
      //   // Bitir butonuna tıklandığında isVisible değerini false olarak değiştir
      //   this.isVisible = false;
    }
      
  












// import { Component } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// @Component({
//   selector: 'app-yapilacaklar',
//   templateUrl: './yapilacaklar.component.html',
//   styleUrls: ['./yapilacaklar.component.css']
// })
// export class YapilacaklarComponent {
//   items: string[] = [];
//   newItem: string[] = [];
//   completedItems: string[] = [];
//   showItemsAlert = true;
//   showCompletedAlert = true;

//   constructor(private toastr: ToastrService) {} // Toastr servisini enjekte ediyoruz

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
  
//     completedItem(index: number) {
//     const completedItem = this.items.splice(index, 1)[0];
//     this.completedItems.push(completedItem);

//     switch (this.completedItems.length) {
//       case 0:
//         this.showCompletedAlert = true;
//         break;
//     }

//     this.showSuccessNotification(); // Bitirme işlemi başarıyla tamamlandığında bildirim göster
//     }

//   private showSuccessNotification() {
//     this.toastr.success('Eklendi'), {
//       positionClass: 'toast-top-right',
//       timeOut: 3000,
//     };
//   }    

  
//     removeItem(index: number) {
//     this.items.splice(index, 1);
//     }
  
//     removecompletedItems(index: number) {
//       this.completedItems.splice(index, 1);
//     }
  
//     alertRemoveItem(index: number) {
//       if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
//         this.removeItem(index);
//       }
//     }
  
//     alertRemovecompletedItems(index: number) {
//       if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
//         this.removecompletedItems(index);
//       }
//     }
//   }



  