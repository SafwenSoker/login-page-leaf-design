import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'mac-book-air1',
  templateUrl: 'mac-book-air1.component.html',
  styleUrls: ['mac-book-air1.component.css'],
})
export class MacBookAir1 {
  rawbwvv: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
