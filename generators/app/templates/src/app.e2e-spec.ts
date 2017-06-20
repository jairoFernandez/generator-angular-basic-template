import { WebtangoPage } from './app.po';

describe('webtango App', () => {
  let page: WebtangoPage;

  beforeEach(() => {
    page = new WebtangoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
