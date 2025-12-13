import { Routes } from '@angular/router';
import {MemberList} from '../features/members/member-list/member-list';
import {MemberDetailed} from '../features/members/member-detailed/member-detailed';
import {Home} from '../features/home/home';
import {Messages} from '../features/messages/messages';
import {Lists} from '../features/lists/lists';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'members', component: MemberList},
  {path: 'members/:id', component: MemberDetailed},
  {path: 'lists', component: Lists},
  {path: 'messages', component: Messages},
  {path: '**', component: Home}
];
