import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MailComponent } from './mail/mail.component';
import { SettingComponent } from './setting/setting.component';
import { PerformanceComponent } from './employee/performance/performance.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'home/artist', component: ArtistComponent },
    { path: 'home/employees', component: EmployeeComponent },
    { path: 'home/employees/performance', component: PerformanceComponent },
    { path: 'home/profile/playlist', component: PlaylistComponent },
    { path: 'home/mail', component: MailComponent },
    { path: 'home/setting', component: SettingComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    entryComponents:[
        ArtistComponent
    ]
})

export class AppRoutingModule{}
