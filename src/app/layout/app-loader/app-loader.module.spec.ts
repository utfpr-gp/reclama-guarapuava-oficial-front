import { AppLoaderModule } from './app-loader.module';

describe('AppLoaderModule', () => {
  let appLoaderModule: AppLoaderModule;

  beforeEach(() => {
    appLoaderModule = new AppLoaderModule();
  });

  it('should create an instance', () => {
    expect(appLoaderModule).toBeTruthy();
  });
});
