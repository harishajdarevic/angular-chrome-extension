import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chrome-extension';
  rating = 5;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getUserRating();
  }

  rateChanged(stars: number) {
    console.log('rate changed to: ', stars);
    this.rating = stars;
    chrome.storage.sync.set({rating: stars});
  }

  getUserRating() {


    chrome.storage.sync.get(['rating'], (result) => {
      if (result.rating) {
        console.log(document);
        this.rating = result.rating;
        this.cd.markForCheck();
        this.cd.detectChanges();
      }
    });
  }
}
