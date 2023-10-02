import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  items: string[] = [];
  completedItems: string[] = [];
  showItemsAlert = true;
  showCompletedAlert = true;

  @Output() onItemCompleted = new EventEmitter<string>();

  completedItem(index: number) {
    const completedItem = this.items.splice(index, 1)[0];
    this.onItemCompleted.emit(completedItem);
    
    // Diğer işlemler...
  }

  removecompletedItems(index: number) {
    this.completedItems.splice(index, 1);
  }

  alertRemovecompletedItems(index: number) {
    if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
      this.removecompletedItems(index);
    }
  }
}
