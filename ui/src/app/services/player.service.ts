import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player: Player;

  constructor(
    private http: HttpClient
  ) { }

  private playerUrl = '/player/';

  getPlayer(name: string): Player {
    if (this.player && this.player.name === name) {
      return this.player;
    }
    else {
      this.fetchPlayer(name).subscribe((res) => {
        this.player = new Player((res as any).skills, name); 
        return this.player;
      });
    }
  }

  fetchPlayer(name: string): Observable<Player> {
    return this.http.get<Player>(this.playerUrl + name);
  }

}
