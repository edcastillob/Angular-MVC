import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipeTitle'
})
export class MiPipeTitlePipe implements PipeTransform {

  transform(valor: string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}
