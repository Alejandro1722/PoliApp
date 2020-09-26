import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-q-somos',
  templateUrl: './q-somos.page.html',
  styleUrls: ['./q-somos.page.scss'],
})
export class QSomosPage implements OnInit {

  constructor(private authSvc: AuthService ) { }

  ngOnInit() {
  }
  
}
