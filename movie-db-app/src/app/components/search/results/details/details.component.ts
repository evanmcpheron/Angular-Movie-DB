import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { MoviesService } from "../../../../services/movies.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() movie_details;

  movies_results:any;

  constructor(public _ms: MoviesService) {};

  ngOnInit() {
    console.log(this.movie_details);
  }

  ngOnChanges() {
    console.log(this.movie_details)
  }


  generateImageUrl() {
    return `https://image.tmdb.org/t/p/original${this.movie_details.backdrop_path}`;
  }

}
