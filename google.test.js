
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.urbanlifesavers.org.au/');
    
  });

  it('Urban Life Savers match', async () => {
    await page.waitFor(3000);
    await expect(page).toMatch('NO MORE DEATHS FROM CARDIAC ARREST');
  });
});
