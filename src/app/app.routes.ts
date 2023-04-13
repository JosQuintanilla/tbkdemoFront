import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'
import { ResultadoComponent } from './pages/resultado/resultado.component';

const app_routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'resultado', component: ResultadoComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);