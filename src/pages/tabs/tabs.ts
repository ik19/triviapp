import { Component } from '@angular/core';

import { PlayPage } from '../play/play';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = PlayPage;
  tab3Root = LeaderboardPage;

  constructor() {

  }
}
