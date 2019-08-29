import { Skill } from './skill.enum';

export class Player {

    constructor(private skills: {}) {}

    public getSkill(skill: Skill) {
        return this.skills[skill];
    }
    
}
