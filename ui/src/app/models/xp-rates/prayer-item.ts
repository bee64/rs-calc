import { XpItem } from './xp-item';
export class PrayerItem extends XpItem {

    constructor(
        level: number,
        name: string,
        experience: number,
        imageUrl: string,
        public experienceGilded: number,
        public experienceEctofuntus: number
    ) {
        super(level, name, experience, imageUrl);
    }
}
