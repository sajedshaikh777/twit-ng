import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendComponent } from './friend/friend.component';

import { UserService } from './user.service';
import { FeedService } from './feed.service';

import { routing, appRoutingProviders } from './app.routing';

// imports for loading and configuring the in memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDatabaseService } from './mock.database.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    FriendsComponent,
    MessagesComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(MockDatabaseService, {
      delay: 3000, rootPath: '/api'
    })
  ],
  providers: [UserService, FeedService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
