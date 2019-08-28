import { XpItem } from './xp-item';

describe('XpItem', () => {
  it('should create an instance', () => {
    expect(new XpItem('name', 123, 'imageUrl')).toBeTruthy();
  });
});
