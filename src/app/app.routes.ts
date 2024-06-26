import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CitiesComponent } from './cities/cities.component';
import { CityParksComponent } from './cities/city-parks/city-parks.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {path:'', component: HelloComponent, pathMatch:'full'},
    {path: 'cities', component: CitiesComponent},
    {path: 'cityParks/:id', component: CityParksComponent},
    {path: 'login', component: LoginComponent}
];
