import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class canFlyPipe implements PipeTransform {
  transform(canFly: boolean): 'Vuela' | 'No vuela' {
    return canFly ? 'Vuela' : 'No vuela';
  }
}
