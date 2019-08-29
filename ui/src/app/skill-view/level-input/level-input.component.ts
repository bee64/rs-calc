import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player';
import { Skill } from './../../models/skill.enum';

@Component({
  selector: 'app-level-input',
  templateUrl: './level-input.component.html',
  styleUrls: ['./level-input.component.scss']
})
export class LevelInputComponent implements OnInit {

  @Input() player: Player;

  @Input() skill: Skill;

  // Emits the difference between current & target xp
  @Output() experienceChangeEvent: EventEmitter<number> = new EventEmitter();

  currentLevel: number;
  currentExperience: number;
  targetLevel: number;
  targetExperience: number;

  constructor() { }

  ngOnInit() {
    if (this.player) {
      let skillValues = this.player.getSkill(this.skill);
      this.currentLevel = skillValues.level;
      this.currentExperience = skillValues.exp;

      this.targetLevel = Math.min(this.currentLevel + 10, 99);
      // this.targetExperience = ???
    }
  }

  onTargetExperienceChange() {

  }

  onCurrentExperienceChange() {
    
  }

  onTargetLevelChange() {

  }

  onCurrentLevelChange() {

  }

}
