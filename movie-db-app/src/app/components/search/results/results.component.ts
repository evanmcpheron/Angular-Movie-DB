import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  @Input() movie_results;

  movies_results: any[] = [];

  constructor(public _ms: MoviesService) {}

  ngOnInit() {

  }

  generateImageUrl(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  getMovie(input) {
    this._ms.getMovies(input.value).subscribe(data => {
      this.movie_results = data["results"];
    });
  }

  this_movie_id = document.getElementsByClassName('movie-id')

  getDetails(x){
    console.log(x)
    this._ms.getDetails(x).subscribe(data => {
      this.movie_results = data["details"];
      console.log(data)
    })

  }
}
