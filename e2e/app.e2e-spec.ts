import { ShredditPage } from './app.po';

describe('shreddit App', () => {
  let page: ShredditPage;

  beforeEach(() => {
    page = new ShredditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
