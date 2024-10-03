import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<button (click)="showNotif()">Show notification</button>`,
})
export class AppComponent {
  private toast = inject(HotToastService);

  showNotif() {
    this.toast.show('Hello World');
  }
}
