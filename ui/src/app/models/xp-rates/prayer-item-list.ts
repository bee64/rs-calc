import { PrayerItem } from './prayer-item';
export class PrayerItemList {

    public items: PrayerItem[] = [];

    constructor() {
        this.addItem('Bones', '5/5e/Bones.png?31df0', 4.5, 15.7, 18);
        this.addItem('Burnt bones', '0/08/Burnt_bones.png?696c1', 4.5, 15.7, 18);
        this.addItem('Wolf bones', 'c/ce/Wolf_bones.png?069e9', 4.5, 15.7, 18);
        this.addItem('Monkey bones', 'f/fb/Monkey_bones.png?4f673', 5, 17.5, 20);
        this.addItem('Bat bones', 'd/d2/Bat_bones.png?9342c', 5.3, 18.5, 21.2);
        this.addItem('Big bones', '1/11/Big_bones.png?96139', 15, 52.5, 60);
        this.addItem('Jogre bones', 'd/db/Jogre_bones.png?ca3a4', 15, 52.5, 60);
        this.addItem('Zogre bones', '6/6d/Zogre_bones.png?5fb16', 22.5, 78.7, 90);
        this.addItem('Shaikahan bones', '6/6d/Shaikahan_bones.png?0e569', 25, 87.5, 100);
        this.addItem('Babydragon bones', '2/2e/Babydragon_bones.png?f1a24', 30, 105, 120);
        this.addItem('Wyrm bones', 'c/c8/Wyrm_bones.png?2dc38', 50, 175, 200);
        this.addItem('Dragon bones', '6/63/Dragon_bones.png?59eca', 72, 252, 288);
        this.addItem('Wyvern bones', '4/4b/Wyvern_bones.png?81b8e', 72, 252, 288);
        this.addItem('Drake bones', 'e/ea/Drake_bones.png?1988d', 80, 280, 320);
        this.addItem('Fayrg bones', 'f/fa/Fayrg_bones.png?18cc3', 84, 294, 336);
        this.addItem('Lava dragon bones', '1/1b/Lava_dragon_bones.png?39e0f', 85, 297.5, 340);
        this.addItem('Raurg bones', 'b/b1/Raurg_bones.png?cacf6', 96, 336, 384);
        this.addItem('Hydra bones', '0/0a/Hydra_bones.png?96267', 110, 285, 440);
        this.addItem('Dagannoth bones', '4/4f/Dagannoth_bones.png?3cff6', 125, 437.5, 500);
        this.addItem('Ourg bones', '9/98/Ourg_bones.png?e334e', 140, 490, 560);
        this.addItem('Superior dragon bones', '', 150, 525, 600);
    }

    private addItem(name: string, imageUrl: string, experience: number, experienceGilded: number, experienceEctofuntus: number) {
        this.items.push(new PrayerItem(
            0,
            name,
            experience,
            'https://oldschool.runescape.wiki/images/' + imageUrl,
            experienceGilded,
            experienceEctofuntus));
    }

}
