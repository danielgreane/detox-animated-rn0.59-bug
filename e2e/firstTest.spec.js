describe('Example animation bug', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show welcome and animate text', async () => {
    await expect(element(by.text('Welcome to React Native!'))).toBeVisible();
    await expect(element(by.text('This should animate in!'))).toBeVisible();
  });

  it('should do nothing', async () => {
    console.log("Kill the detox cli command now, and re-launch the app in the simulator");
    await (() => new Promise((resolve) => setTimeout(resolve, 10000)))();
  })

});