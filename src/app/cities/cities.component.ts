import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {
  public cities: City[] = [];

  constructor(private http: HttpClient) { }
  
   ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.http.get<City[]>(environment.baseUrl + 'api/Cities').subscribe(
      {
        next: result => this.cities = result,
        error: error => console.error(error)
      }
    );
  }
}
