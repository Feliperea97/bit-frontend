import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/shared/navigation/navigation';
import { Footer } from './components/shared/footer/footer';
import { Header } from './components/shared/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
