import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-form-field>
      <input type="number" matInput placeholder="Weight" [(ngModel)]="weight" />
    </mat-form-field>

    <mat-form-field>
      <input type="number" matInput placeholder="Height" [(ngModel)]="height" />
    </mat-form-field>

    <div *ngIf="canCalculateBMI(); else tpl">{{ bmi() }}</div>
    <ng-template #tpl>Please enter data</ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
      mat-form-field {
        display: block;
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
