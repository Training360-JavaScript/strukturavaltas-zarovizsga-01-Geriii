import { Component } from '@angular/core';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';
}
