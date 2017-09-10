import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModal, NgbCarouselConfig, NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { PlaylistComponent } from './playlist/playlist.component';
import { EmployeeComponent } from './employee/employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdListModule, 
  MdTooltipModule, MdCardModule, MdTabsModule, MdMenuModule, MdToolbarModule,
  MdIconModule, MdDialogModule, MdInputModule, MdGridListModule, MdSelectModule } from '@angular/material';

import { QuillEditorModule } from 'ngx-quill-editor';
import { MailComponent } from './mail/mail.component';
import { SettingComponent } from './setting/setting.component';
import { FooterComponent } from './footer/footer.component';
import { PerformanceComponent } from './employee/performance/performance.component';
import { GlobalDialogComponent } from './global-dialog/global-dialog.component';
import { ComposeMessageComponent } from './mail/compose-message/compose-message.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    DashboardComponent,
    PlaylistComponent,
    EmployeeComponent,
    MailComponent,
    SettingComponent,
    FooterComponent,
    PerformanceComponent,
    GlobalDialogComponent,
    ComposeMessageComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    QuillEditorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdDialogModule,
    MdTooltipModule,
    MdListModule,
    MdInputModule,
    MdGridListModule,
    MdSelectModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [GlobalDialogComponent,ComposeMessageComponent,NewEmployeeComponent]
})

export class AppModule {
  
}
