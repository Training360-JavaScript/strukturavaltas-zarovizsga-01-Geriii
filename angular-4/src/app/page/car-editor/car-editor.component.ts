import { Car } from 'src/app/model/car';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car$: Observable<Car> = this.ar.params.pipe(
    switchMap( params => this.CarService.get(params['id']))
  );

  constructor(
    private CarService: CarService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(car: Car): void {
    this.CarService.update(car).subscribe(
      car => this.router.navigate(['/', 'car']),
    );
  }
}
