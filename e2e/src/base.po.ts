import { browser, by, element, promise } from 'protractor';

export class Base {
	
	getTitleText() : any {
		return browser.getTitle();
	}
	
	navigateToHome(): promise.Promise<any> {
		return browser.get(browser.baseUrl);
	}

  navigateToContacts(): promise.Promise<any> {
    return browser.get('/contacts');
  }
  
  navigateToCreateContact(): promise.Promise<any> {
    return browser.get('/contacts/create');
  }
}
