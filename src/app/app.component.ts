import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label for="weight">WEIGHT</label>
    <input id="weight" [(ngModel)]="weight" />
    <label for="height">HEIGHT</label>
    <input id="height" [(ngModel)]="height" />

    <div *ngIf="canCalculateBMI(); else tpl">{{ bmi() }}</div>
    <ng-template #tpl>Please enter data</ng-template>
  `,
  styles: [
    `
      input {
        display: block;
        margin-bottom: 16px;
      }
    `
  ]
})
export class AppComponent {
  weight: number = 0;
  height: number = 0;

  bmi() {
    return (this.weight * this.weight) / this.height;
  }

  canCalculateBMI() {
    return this.weight > 0 && this.height > 0;
  }
}
