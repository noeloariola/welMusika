import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ComposeMessageComponent } from './message/compose-message.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'home/artist', component: ArtistComponent },
    { path: 'home/profile', component: ProfileComponent },
    { path: 'home/profile/playlist', component: PlaylistComponent },
    { path: 'home/profile/compose-message', component: ComposeMessageComponent },
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
