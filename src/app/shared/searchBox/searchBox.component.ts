import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: ``,
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  emitValue( value: string ): void {

    if ( value.length === 0 ) return;

    this.onValue.emit(value);
    this
  }

}
