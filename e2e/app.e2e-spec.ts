import { CoringaTurboPage } from './app.po';

describe('coringa-turbo App', () => {
  let page: CoringaTurboPage;

  beforeEach(() => {
    page = new CoringaTurboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
