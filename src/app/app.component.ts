import { Component } from '@angular/core';

import { BioComponent } from './components/bio/bio.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';

//Decorator
@Component({
  //component directive
  selector: 'app-root',
  standalone: true,
  imports: [BioComponent,HeroComponent,ProtfolioComponent,FooterComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myapp';
}
