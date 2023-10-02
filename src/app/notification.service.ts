import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new Subject<string>();

  // Bildirimleri dinlemek için bir Observable sağlayın
  notifications$ = this.notificationsSubject.asObservable();

  showNotification(message: string) {
    // Yeni bir bildirim eklemek için bu fonksiyonu kullanın
    this.notificationsSubject.next(message);
  }
}

