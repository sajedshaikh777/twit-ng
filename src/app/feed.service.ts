import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { UserService } from './user.service';
import { Tweet } from './tweet';


@Injectable()
export class FeedService {

	tweets = [
		new Tweet('Lorem Ipsum is simply dummy text.', 'Glen', new Date(), ['Joe'], []),
		new Tweet('Lorem Ipsum has been the industrys standard.', 'Joe', new Date(), [], ['Mary']),
		new Tweet('It has survived not only five.', 'Mary', new Date(), ['Glen'], ['Mary', 'Glen'])
	]

	constructor( private userService: UserService, private http: Http ) { }

	getCurrentFeed(): Array<Tweet> {
		return this.tweets;
	}

	private isUserInCollection(collection: string[], userId: string): boolean {
		return collection.indexOf(userId) != -1;
	}

	postNewTweet(tweetText: string) {
		this.tweets.unshift(
			new Tweet(tweetText, this.userService.getCurrentUser(), new Date(), [], [])
		);		
	}

	favoriteTweet(tweet: Tweet) {
		if(!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
			tweet.favorites.push(this.userService.getCurrentUser());
		}
	}	

	reTweet(tweet: Tweet) {
		if(!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
			tweet.retweets.push(this.userService.getCurrentUser());
		}
	}


	getFriends(): Observable<string[]> {

		return this.http.get('../assets/friends.json').map((resp: Response) => resp.json() as string[])

		// return ['Mary', 'Joe', 'Karen', 'Phil', 'Toni' ];
	}



}
