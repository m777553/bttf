import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent implements OnInit {
  showInfo = true;
  message = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showInfo = false;
    }, 8000);
  }

  checkAndRedirect() {
    const month = (<HTMLInputElement>document.querySelector('.input-group.red .input.month')).value.toLowerCase();
    const day = (<HTMLInputElement>document.querySelector('.input-group.red .input.day')).value.toLowerCase();
    const year = (<HTMLInputElement>document.querySelector('.input-group.red .input.year')).value.toLowerCase();
    const hours = (<HTMLInputElement>document.querySelector('.input-group.red .input.hours')).value.toLowerCase();
    const minutes = (<HTMLInputElement>document.querySelector('.input-group.red .input.minutes')).value.toLowerCase();
    const button = <HTMLButtonElement>document.querySelector('button');


    if (month === 'nov' && day === '05' && year === '1955' && hours === '22' && minutes === '04') {
      this.message = 'Именно тогда мне и пришла в головы мысль о создании машины времени';
      setTimeout(() => {
        this.router.navigate(['/second-page']);
      }, 4000);
      return
    }

    if (month === 'nov' && day === '12' && year === '1955' && hours === '06' && minutes === '38') {
      this.message = 'Именно тогда мне и пришла в головы мысль о создании машины времени';
      setTimeout(() => {
        this.router.navigate(['/second-page']);
      }, 4000);
      return
    }

    if (month === 'jul' && day === '17' && year === '1990' && hours === '00' && minutes === '00') {
      this.message = 'Мммммм..... Любимый.... Это так мило.... Конечно, всё верно!!!';
      setTimeout(() => {
        this.router.navigate(['/second-page']);
      }, 4000);
      return
    }

    if (month === '000' && day === '00' && year === '0000' && hours === '00' && minutes === '00') {
      this.message = 'Читер)))';
      setTimeout(() => {
        this.router.navigate(['/second-page']);
      }, 2000);
      return
    }

    const inputs = document.querySelectorAll('.input-group.red .input');
    inputs.forEach(input => (<HTMLInputElement>input).value = '');
    button.classList.add('highlight');
    setTimeout(() => {
      button.classList.remove('highlight');
    }, 2000);
  }
}
