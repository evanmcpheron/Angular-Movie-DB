import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";


@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() movie_results;
  @Input() movie_pagination;
  obj = {
    name: "Evan"
  }

  @Output() someEventName: EventEmitter<any>= new EventEmitter<any>()

  movie_details: any;
  movie_credits: any;


  constructor(public _ms: MoviesService) {}

  ngOnInit() {
    console.log(this.movie_results)
  }

  ngOnChanges() {
    // console.log(this.movie_credits)
  }

  generateImageUrl(path) {
    return `https://image.tmdb.org/t/p/original${path}`;
  }

  onBack() {
    this.movie_details = null;
    this.someEventName.emit(this.obj)
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      const enteredValue = event.srcElement;
      this.getMovie(enteredValue);
      enteredValue.value = '';
    }
  }

  getMovie(input) {
    this._ms.getMovies(input.value).subscribe(data => {
      this.movie_results = data["results"];
    });
    // console.log(this._ms.test_obj)
  }

  this_movie_id = document.getElementsByClassName('movie-id')

  getDetails(x){
    // console.log(x)
    this._ms.getDetails(x).subscribe(data => {
      this.movie_details = data;
    })
  }

  getCredits(id){
    // console.log(id)
    this._ms.getCredits(id).subscribe(data => {
      this.movie_credits = data.cast;
      console.log(data)
    })
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
