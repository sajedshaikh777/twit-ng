import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FeedService } from '../feed.service';
import { Tweet } from '../tweet';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

	tweets = [];
	tweetText = '';

	constructor( private userService: UserService, private feedService: FeedService ) { }

	ngOnInit() {
		this.tweets = this.feedService.getCurrentFeed();
	}

	OnNewTweet() {
		console.log(this.tweetText);
		this.feedService.postNewTweet(this.tweetText);
		this.tweetText = '';
	}	

	OnFavorites(tweet) {
		this.feedService.favoriteTweet(tweet);
	}

	OnRetweet(tweet) {
		this.feedService.reTweet(tweet);
	}

}
