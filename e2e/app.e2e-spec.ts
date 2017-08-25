import { MusikaPage } from './app.po';

describe('musika App', () => {
  let page: MusikaPage;

  beforeEach(() => {
    page = new MusikaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
