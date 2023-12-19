import { Pipe, PipeTransform } from '@angular/core';
import { HeroGender } from '../enums';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(value: HeroGender): string {
    switch (value) {
      case HeroGender.Female:
        return "Female";
      case HeroGender.Male:
        return "Male";
      default:
        throw new Error("Not mapped");
    }
  }
}
