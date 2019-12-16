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

  anotherFunction(arg){
    console.log('This is coming from the results component');
    console.log(arg)
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      const enteredValue = event.srcElement;
      console.log(enteredValue.value)
      this.getMovie(enteredValue);
    }
  }

  getMovie(input) {
    this._ms.getMovies(input.value, '1').subscribe( data => {
      this.movie_results = data['results'];
      console.log(data)
    })
    this._ms.test_obj= {test: 'Value'}
  }

}
