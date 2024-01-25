import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor( private dvzService: DbzService  )  {  }

  get characters():  Character[] {
    return [...this.dvzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dvzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character): void {
    this.dvzService.addCharacter( character );
  }


}
