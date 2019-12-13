import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movie_results: any[] = [];

  constructor( public _ms: MoviesService ) { }

  ngOnInit() {
  }

  getMovie(input) {
    this._ms.getMovies(input.value).subscribe( data => {
      this.movie_results = data['results'];
    })
  }

}
