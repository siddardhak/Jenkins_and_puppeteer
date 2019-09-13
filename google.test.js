
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.urbanlifesavers.org.au/');
    
  });

  it('Urban Life Savers testing', async () => {
    await page.waitFor(5000);
    await expect(page).toMatch('NO MORE DEATHS FROM CARDIAC ARREST');
  });
});
