import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Tweet } from './tweet';

export class MockDatabaseService implements InMemoryDbService {
	createDb(){

		let friends = [
			"Mary", "Joe", "Karen", "Phil", "Toni"
		];

		let tweets = [
			new Tweet(1, 'So Always code as if the guy who ends up maintaining your code will be a violent psycopath who knows where you live.', 'Glen', new Date(), ['Joe'], []),
			new Tweet(2, 'Lorem Ipsum has been the industrys standard.', 'Joe', new Date(), [], ['Mary']),
			new Tweet(3, 'It has survived not only five.', 'Mary', new Date(), ['Glen'], ['Mary', 'Glen'])
		];

		return { 'tweets' : tweets, 'friends' : friends };
 
	}
}