import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private openMenuPanelIdSubject = new BehaviorSubject('');

  get openMenuPanelId$(): Observable<string> {
    return this.openMenuPanelIdSubject.pipe();
  }

  updateOpenMenuPanelId(panelId: string) {
    this.openMenuPanelIdSubject.next(panelId);
  }
}
