import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './pages/admin/admin-header/admin-header.component';
import { ResolverResolver } from './service/resolver.resolver';
import { ParentComponent } from './pages/parent/parent.component';
import { GrandpaComponent } from './pages/grandpa/grandpa.component';

const routes: Routes = [{path:'',component:MainComponent,resolve:{data:ResolverResolver}},{path:'home',component:HomeComponent,outlet:'primary'},
{path:'header',component:HeaderComponent,outlet:'header'},
{path:'adminHome',component:AdminHomeComponent,outlet:'primary'},
{path:'adminHeader',component:AdminHeaderComponent,outlet:'adminHeader'},
{path:'parent',component:ParentComponent
},
{
  path:'grandPa',component:GrandpaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
