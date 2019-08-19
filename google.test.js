describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.urbanlifesavers.org.au/');
  });

  it('Urban Life Savers match', async () => {
    await expect(page).toMatch('Donate Now');
  });
});
