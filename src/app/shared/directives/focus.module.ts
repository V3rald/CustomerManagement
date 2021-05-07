import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnFocusDirective } from './focus.directive';

@NgModule({
    declarations: [OnFocusDirective],
    imports: [CommonModule],
    exports: [OnFocusDirective]
})
export class FocusDirective{}