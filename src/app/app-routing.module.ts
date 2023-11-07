import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login/login.component";
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDisplayComponent } from './posts/post-display/post-display.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page
    { path: 'display', component: PostDisplayComponent }, // Moved display to /display
    { path: 'add', component: PostCreateComponent },
    { path: 'login', component: LoginComponent }, // Login route
    { path: 'signup', component: LoginComponent } // Signup route (Consider having a separate signup component)
];

console.log('we are routing');

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
