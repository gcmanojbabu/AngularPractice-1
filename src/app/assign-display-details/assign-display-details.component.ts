import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-display-details',
  templateUrl: './assign-display-details.component.html',
  styleUrls: ['./assign-display-details.component.css'],
})
export class AssignDisplayDetailsComponent implements OnInit {
  showPass = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleDetails() {
    this.showPass = !this.showPass;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
