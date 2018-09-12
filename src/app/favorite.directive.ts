import { Directive, HostListener, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})

export class FavoriteDirective {
 //@HostBinding('class.is-favorite') isFavorite = true;
 @HostBinding('class.is-favorite-hovering') hover = false;
 @HostListener('mouseenter') onMouseEnter(){
    this.hover = true;
 }
 @HostListener('mouseleave') onMouseLeave(){
    this.hover = false;
 }
 /* @Input() set mwfavorite(value) {
     this.isFavorite = value;
 } */
}

