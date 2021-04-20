import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/result';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  @Input()
  result: Result;

  constructor() {}

  ngOnInit(): void {}
}
