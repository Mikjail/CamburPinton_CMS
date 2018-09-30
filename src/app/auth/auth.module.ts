import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
    ],
    imports: [
     ReactiveFormsModule,
     SharedModule
    ]
})
export class AuthModule {}
