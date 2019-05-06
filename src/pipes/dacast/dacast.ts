import { Pipe, PipeTransform } from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the DacastPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dacast',
})
export class DacastPipe implements PipeTransform {
  constructor(
    public domSanitizer: DomSanitizer
  ) {



  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string,args) {
      //console.log(value);
      return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
