import { Component, Input } from '@angular/core';

@Component({
  selector: 'sky-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class SkyImageComponent {
  private _captionType: string = 'default';

  @Input()
  public set captionType(value: string) {
    this._captionType = value;
  }

  public get captionType(): string {
    return this._captionType;
  }

  @Input()
  public imageSource: string;

  @Input()
  public imageAlt: string = '';

  @Input()
  public caption: string;

  @Input()
  public showBorder: boolean;
}
