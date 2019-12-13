import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../../../services/movies.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  @Input() movie_results;
  @Input() movie_id;

  movies_results:any;

  constructor(public _ms: MoviesService) {};

  ngOnInit() {
    // console.log(data);
  }


  generateImageUrl(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
