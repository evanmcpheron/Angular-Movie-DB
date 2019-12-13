import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() movie_results;

  constructor() { }

  ngOnInit() {
    console.log(this.movie_results)
  }

  generateImageUrl(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
