import { PlayerService } from './../services/player.service';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.scss']
})
export class SkillViewComponent implements OnInit {

  @Input() playerName: string;

  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer() {
    if (this.playerName) {
      this.playerService
        .getPlayer(this.playerName)
        .subscribe(res => {
          this.player = new Player((res as any).skills, this.playerName);
        });
    }
  }

}
