import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
   contador: number = 0;

   incrementar (){
    this.contador++
   }
   decrementar (){
    this.contador--
   }
   reset(){
    this.contador = 0
   }
}
