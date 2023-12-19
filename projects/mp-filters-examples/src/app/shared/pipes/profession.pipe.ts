import { Pipe, PipeTransform } from '@angular/core';
import { HeroProfession } from '../enums';

@Pipe({
  name: 'profession'
})
export class ProfessionPipe implements PipeTransform {

  transform(value: HeroProfession): string {
    switch (value) {
      case HeroProfession.Barbarian:
        return "Barbarian";
      case HeroProfession.Bard:
        return "Bard";
      case HeroProfession.Knight:
        return "Knight";
      case HeroProfession.Priest:
        return "Priest";
      case HeroProfession.Thief:
        return "Thief";
      case HeroProfession.Wizard:
        return "Wizard";
      default:
        throw new Error("Not mapped");
    }
  }

}
