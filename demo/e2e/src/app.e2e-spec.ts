import { NgxValidateDemoPage } from './app.po';

describe('ngx-validate-demo App', () => {
  let page: NgxValidateDemoPage;

  beforeEach(() => {
    page = new NgxValidateDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
