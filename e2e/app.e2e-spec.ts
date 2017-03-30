import { Videogular2NgconfPage } from './app.po';

describe('videogular2-ngconf App', () => {
  let page: Videogular2NgconfPage;

  beforeEach(() => {
    page = new Videogular2NgconfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
