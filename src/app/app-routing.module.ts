import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectComponent } from './subject/subject.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
{path :'batches',component:BatchesComponent},
{path :'aboutus',component:AboutusComponent},
{path :'subject',component:SubjectComponent},
{path :'',component:SubjectComponent},
{path :'**',component:InvalidComponent}


 

];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 {


  }
