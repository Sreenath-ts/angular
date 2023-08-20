import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './pages/sample/sample.component';
import { IterateDirective } from './directives/iterate.directive';
import { TagDirective } from './directives/tag.directive';
import { DemoComponent } from './pages/demo/demo.component';
import { AttributeDirective } from './directives/attribute.directive';
import { InputRestrictDirective } from './directives/input-restrict.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { NgElseDirective } from './directives/ng-else.directive';
import { StringreturnPipe } from './pipes/stringreturn.pipe';
import { TruncPipe } from './pipes/trunc.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { SearchComponent } from './pages/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './pages/admin/admin-header/admin-header.component';
import { TokenInterceptor } from './interceptors/token-interceptor.';
import { LoggerInterceptor } from './interceptors/loggerInterceptor';
import { ModifyResponseInterceptor } from './interceptors/modify-response.interceptor';
import { CachingResponseInterceptor } from './interceptors/caching-response.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/parent/child/child.component';
import { GrandpaComponent } from './pages/grandpa/grandpa.component';
import { SonComponent } from './pages/son/son.component';
import { GrandSonComponent } from './pages/grand-son/grand-son.component';
import { AdvancedPipePipe } from './pipes/advanced-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    IterateDirective,
    TagDirective,
    DemoComponent,
    AttributeDirective,
    InputRestrictDirective,
    DropdownDirective,
    NgElseDirective,
    StringreturnPipe,
    TruncPipe,
    SortingPipe,
    SearchComponent,
    SearchPipe,
    FormsComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    ParentComponent,
    ChildComponent,
    GrandpaComponent,
    SonComponent,
    GrandSonComponent,
    AdvancedPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptor,
  //   multi:true
  // }
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:LoggerInterceptor,
  //   multi:true
  // }
  // {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:ModifyResponseInterceptor,
  //   multi:true
  // }
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:CachingResponseInterceptor,
    multi:true
  },
   {
    provide:HTTP_INTERCEPTORS,
    useClass:ModifyResponseInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
