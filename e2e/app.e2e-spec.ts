import { TxFitnessPage } from './app.po';

describe('tx-fitness App', function() {
  let page: TxFitnessPage;

  beforeEach(() => {
    page = new TxFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
