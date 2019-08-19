
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.com/');
    
  });

  it('Urban Life Savers match', async () => {
    await page.waitFor(3000);
    await expect(page).toMatch('google');
  });
});
