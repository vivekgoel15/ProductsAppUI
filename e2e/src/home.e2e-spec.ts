import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('Home Page', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display welcome message', () => {
    homePage.navigateToHome();
    expect(homePage.getTitleText()).toEqual('ProductsAppUI');
  });

  it('should display all the tabs on the application',() => {
   /*Expectations accept parameters that will be matched with the real value
   using Jasmine's matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
   	expect(homePage.productsTab().isPresent()).toBeTruthy("Create Product tab is present");
    expect(homePage.createProductTab().isPresent()).toBeTruthy("Create Product tab is present");
  });
  
  it('create product tab is clickable',() => {
    //spec goes here
    homePage.createProductTab().click();
  });
  
  it('products tab is clickable',() => {
    //spec goes here
    homePage.productsTab().click();
  });
   
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
