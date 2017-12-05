import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
//import { MyDataService } from './my-data.service';
import { ComponentComponent } from './component/component.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { UserComponent } from './component/user/user.component';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CatalogComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'catalog',
        component: CatalogComponent
      },
      {
        path:'user',
        component: UserComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
