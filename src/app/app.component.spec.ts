import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('validate title', () => {
    expect(fixture.title.toLocaleLowerCase()).toContain('hello world');
  });
});
