import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Player } from '../../models/player';
import { Skill } from './../../models/skill.enum';

@Component({
  selector: 'app-level-input',
  templateUrl: './level-input.component.html',
  styleUrls: ['./level-input.component.scss']
})
export class LevelInputComponent implements OnChanges, OnInit {

  @Input() player: Player;

  @Input() skill: Skill;

  // Emits the difference between current & target xp
  @Output() experienceChangeEvent: EventEmitter<number> = new EventEmitter();

  currentLevel: number = 1;
  currentExperience: number;
  targetLevel: number = 10;
  targetExperience: number;

  constructor() { }

  ngOnInit() {
    // TODO: ??? = level -> xp
    // this.currentExperience = ??? // Only calc if player object did not assign it a value
    // this.targetExperience = ???
  }

  ngOnChanges() {
    if (this.player) {
      let skillValues = this.player.getSkill(this.skill);
      this.currentLevel = skillValues.level;
      this.currentExperience = skillValues.exp;

      this.targetLevel = Math.min(this.currentLevel + 10, 99);
      // this.targetExperience = ???
    }
  }

  getPlayerName() {
    return this.player ? this.player.name : "";
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
