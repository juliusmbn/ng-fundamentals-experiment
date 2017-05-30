import { AngularwebpackPage } from './app.po';

describe('angularwebpack App', () => {
  let page: AngularwebpackPage;

  beforeEach(() => {
    page = new AngularwebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
