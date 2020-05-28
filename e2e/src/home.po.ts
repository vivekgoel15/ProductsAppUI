import { browser, by, element, ElementFinder } from 'protractor';
import { Base } from './base.po';

export class HomePage extends Base {

	productsTab():ElementFinder {
        return element(by.linkText('Products'));
    }
	
	createProductTab():ElementFinder {
        return element(by.linkText('Create Product'));
    }
}
