import { Dojo4angular.ClientPage } from './app.po';

describe('dojo4angular.client App', () => {
  let page: Dojo4angular.ClientPage;

  beforeEach(() => {
    page = new Dojo4angular.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
