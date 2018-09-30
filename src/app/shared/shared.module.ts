import { MaterialModule } from './../material.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
    ]
})

export class SharedModule {}
