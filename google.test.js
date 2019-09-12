
describe('Google', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto('https://www.urbanlifesavers.org.au/');
    
  });

  it('Urban Life Savers match', async () => {
    await page.waitFor(4000);
    await expect(page).toMatch('NO MORE DEATHS FROM CARDIAC ARREST');
  });
});
