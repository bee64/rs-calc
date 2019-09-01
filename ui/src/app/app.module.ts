import { XpTableService } from './services/xp-table.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillViewComponent } from './skill-view/skill-view.component';
import { LevelInputComponent } from './skill-view/level-input/level-input.component';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillViewComponent,
    LevelInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    XpTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
