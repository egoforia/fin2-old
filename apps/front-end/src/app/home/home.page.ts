import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '@fin2/api-interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'fin-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(
    private apiService: ApiService
  ) {}

  hello$;

  ngOnInit() {
    this.hello$ = this.apiService.getHello();
  }
}
