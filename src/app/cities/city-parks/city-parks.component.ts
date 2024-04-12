import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { MatTableModule } from "@angular/material/table";
import { CityParks } from '../city-parks';

@Component({
  selector: 'app-city-parks',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './city-parks.component.html',
  styleUrl: './city-parks.component.css'
})
export class CityParksComponent {
  public parks: CityParks[] = [];
  public displayedColumns : string[] = ["parkId", "parkName", "type", "acres", "address"]
  id: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.id = -1;
  }

  ngOnInit() {
    this.getCityParks();
  }

  getCityParks() {
    let idparameter = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparameter ? +idparameter: 0;
    this.http.get<CityParks[]>(`${environment.baseUrl}api/Cities/CityParks/${this.id}`).subscribe(
      {
        next: result => this.parks = result,
        error: error => console.error(error)
      } 
    );
  }
}
