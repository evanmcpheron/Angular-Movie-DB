import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { MoviesService } from "../../../../services/movies.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() movie_details;
  @Input() movie_credits;

  movies_results: any;

  constructor(public _ms: MoviesService) {}

  ngOnInit() {
    // console.log(this.movie_details);
    // console.log(this.movie_credits);
  }

  ngOnChanges() {}

  generateImageUrl() {
    return `https://image.tmdb.org/t/p/original${this.movie_details.backdrop_path}`;
  }
  generatePosterUrl() {
    return `https://image.tmdb.org/t/p/original${this.movie_details.poster_path}`;
  }

  getCastPhoto(path) {
      return `https://image.tmdb.org/t/p/original${path}`;
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  numberWithCommas(num) {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num;
    }
  }
}
