import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DiscussFormComponent} from '../discuss-form/discuss-form.component'

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DiscussFormComponent);
  }

  ngOnInit(): void {
  }

}

