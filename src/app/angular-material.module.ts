import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
  MatTableModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  providers: [],
  exports: [
    ...materialModules
  ],
})

export class AngularMaterialModule { }
