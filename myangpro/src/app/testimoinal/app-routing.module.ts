import { NgModule } from '@angular/core';
import { Routes,RouterModule }from '@angular/router';
import { HomeComponent } from '../home/home.component';



const routes:Routes=[ 
    
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'services',component:ServicesComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }