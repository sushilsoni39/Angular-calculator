import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  public arr:number=[];
  clicked()
  {
   for(let i=0; i<instance.value; i++)
   {
      this.arr.push(i);

   }
   instance.value="";

  }


}
