import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CompOneComponent } from './competition/comp-one/comp-one.component';
import { CompetitionComponent } from './competition/competition.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotogalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SubTeamFiveComponent } from './sub-teams/sub-team-five/sub-team-five.component';
import { SubTeamFourComponent } from './sub-teams/sub-team-four/sub-team-four.component';
import { SubTeamOneComponent } from './sub-teams/sub-team-one/sub-team-one.component';
import { SubTeamThreeComponent } from './sub-teams/sub-team-three/sub-team-three.component';
import { SubTeamTwoComponent } from './sub-teams/sub-team-two/sub-team-two.component';
import { SubTeamSixComponent } from './sub-teams/sub-team-six/sub-team-six.component';
import { EvCompOverviewComponent } from './competition/ev-comp-overview/ev-comp-overview.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { IcHistoryComponent } from './ic-history/ic-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
  { path: 'sponsors', component: SponsorsComponent, data: { animationState: 'Two' } },
  { path: 'history', component: HistoryComponent, data: { animationState: 'One' } },
  { path: 'competition', component: CompetitionComponent, data: { animationState: 'Two' } },
  { path: 'ev-comp-overview', component: EvCompOverviewComponent, data: { animationState: 'Two' } },
  { path: 'june-2023', component: CompOneComponent, data: { animationState: 'One' } },
  { path: 'photo-gallery', component: PhotogalleryComponent, data: { animationState: 'Two' }},
  { path: 'aerodynamics', component: SubTeamOneComponent, data: { animationState: 'One' },},
  { path: 'brakes-controls', component: SubTeamTwoComponent, data: { animationState: 'Two' },},
  { path: 'electronics', component: SubTeamThreeComponent, data: { animationState: 'One' },},
  { path: 'powertrain', component: SubTeamFourComponent, data: { animationState: 'Two' },},
  { path: 'vehicle-dynamics', component: SubTeamFiveComponent, data: { animationState: 'One' },},
  { path: 'high-voltage', component: SubTeamSixComponent, data: { animationState: 'Two' },},
  { path: 'meet-the-team', component: MeetTheTeamComponent, data: { animationState: 'Two' },},
  { path: 'ic-history', component: IcHistoryComponent, data: { animationState: 'Two' },},
  {path:'photo-gallery/:car/:id',component:PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
