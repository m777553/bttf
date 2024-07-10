import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  constructor(private router: Router) {}

  checkAndRedirect() {
    console.log('here')
    const month = (<HTMLInputElement>document.querySelector('.input-group.red .input.month')).value;
    const day = (<HTMLInputElement>document.querySelector('.input-group.red .input.day')).value;
    const year = (<HTMLInputElement>document.querySelector('.input-group.red .input.year')).value;
    const hours = (<HTMLInputElement>document.querySelector('.input-group.red .input.hours')).value;
    const minutes = (<HTMLInputElement>document.querySelector('.input-group.red .input.minutes')).value;

    console.log(`Month: ${month}, Day: ${day}, Year: ${year}, Hours: ${hours}, Minutes: ${minutes}`);


    if (month === 'nov' && day === '05' && year === '1955' && hours === '22' && minutes === '04') {
      this.router.navigate(['/second-page']);
    }
    if (month === 'nov' && day === '12' && year === '1955' && hours === '06' && minutes === '38') {
      this.router.navigate(['/second-page']);
    }
    if (month === 'jul' && day === '17' && year === '1990' && hours === '00' && minutes === '00') {
      this.router.navigate(['/second-page']);
    }

    if (month === '000' && day === '00' && year === '0000' && hours === '00' && minutes === '00') {
      console.log('nav')
      this.router.navigate(['/second-page']);
    }
  }
}
