import { Skill } from './skill.enum';

export class Player {

    constructor(
        private skills: {}, 
        public name: string
        ) {}

    public getSkill(skill: Skill) {
        // return this.skills[skill];
        return this.skills['prayer'];
    }
    
}
