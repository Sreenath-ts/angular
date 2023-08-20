import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grand-son',
  templateUrl: './grand-son.component.html',
  styleUrls: ['./grand-son.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GrandSonComponent {
grandSonCall(){
  console.log('grand-Son');
  return 'grandSon'
}
}
