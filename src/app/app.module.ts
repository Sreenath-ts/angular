import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule } from '@angular/forms';

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
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
