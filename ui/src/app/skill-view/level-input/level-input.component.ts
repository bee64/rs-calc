import { PlayerService } from './../../services/player.service';
import { XpTableService } from './../../services/xp-table.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player';
import { Skill } from './../../models/skill.enum';

@Component({
  selector: 'app-level-input',
  templateUrl: './level-input.component.html',
  styleUrls: ['./level-input.component.scss']
})
export class LevelInputComponent implements OnInit {

  @Input() skill: Skill;

  // Emits the difference between current & target xp
  @Output() experienceChangeEvent: EventEmitter<number> = new EventEmitter();

  currentLevel: number = 1;
  currentExperience: number;
  targetLevel: number = 10;
  targetExperience: number;

  playerName: string;
  player: Player;

  constructor(
    private xpTableService: XpTableService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    if (!this.skill) {
      console.log("level-input.component.ts: the skill is required for this!");
    }
    this.currentExperience = this.xpTableService.getExperienceForLevel(this.currentLevel);
    this.setPlayerAsCurrent();
    this.initTarget();
  }

  initTarget() {
    this.targetLevel = Math.min(this.currentLevel + 9, 99);
    this.targetExperience = this.xpTableService.getExperienceForLevel(this.targetLevel);

    console.log('init target xp');
    console.log(this.targetLevel);
    console.log(this.targetExperience);
  }

  setPlayerAsCurrent() {
    if (this.player) {
      console.log(this.skill);
      let skillValues = this.player.getSkill(this.skill);
      console.log(skillValues);
      this.currentLevel = skillValues.level;
      this.currentExperience = skillValues.exp;
    }
  }

  onPlayerNameKeyup(event: any) {
    // Enter
    if (event.keyCode === 13) {
      this.onPlayerChange();
    }
  }

  onPlayerChange() {
    if (this.playerName !== "") {
      this.player = this.playerService.getPlayer(this.playerName);
      this.setPlayerAsCurrent();  
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
