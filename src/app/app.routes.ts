import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CitiesComponent } from './cities/cities.component';

export const routes: Routes = [
    {path:'', component: HelloComponent, pathMatch:'full'},
    {path: '', component: CitiesComponent}
];
