import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'

const app_routes: Routes = [
    { path: 'login', component: LoginComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);