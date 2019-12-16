import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";


@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() movie_results;
  obj = {
    name: "Evan"
  }

  @Output() someEventName: EventEmitter<any>= new EventEmitter<any>()

  movie_details: any;


  constructor(public _ms: MoviesService) {}

  ngOnInit() {

  }

  ngOnChanges() {

  }

  generateImageUrl(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  onBack() {
    this.movie_details = null;
    this.someEventName.emit(this.obj)
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      const enteredValue = event.srcElement;
      console.log(enteredValue.value)
      this.getMovie(enteredValue);
      enteredValue.value = '';
    }
  }

  getMovie(input) {
    this._ms.getMovies(input.value, '1').subscribe(data => {
      this.movie_results = data["results"];
    });
    console.log(this._ms.test_obj)
  }

  this_movie_id = document.getElementsByClassName('movie-id')

  getDetails(x){
    console.log(x)
    this._ms.getDetails(x).subscribe(data => {
      this.movie_details = data;
      console.log(data)
    })

  }
}
