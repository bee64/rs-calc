import { PrayerItem } from './prayer-item';

describe('PrayerItem', () => {
  it('should create an instance', () => {
    expect(new PrayerItem('name', 123, 'imageUrl', 213, 123)).toBeTruthy();
  });
});
