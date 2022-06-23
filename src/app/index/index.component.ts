import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isAdmin?: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.getAdmin()
  }

}
