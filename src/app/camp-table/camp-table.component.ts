import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";


@Component({
  selector: 'app-camp-table',
  templateUrl: './camp-table.component.html',
  styleUrls: ['./camp-table.component.css']
})

export class CampTableComponent implements OnInit {
  Math: any = Math;
  data = [
    new Campaign(
      '9-5-2019',
      {
        campaignsName: 'Test Whatsapp',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '9-30-2019',
      {
        campaignsName: 'Test Whatsapp',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '3-10-2019',
      {
        campaignsName: 'Test Whatsapp',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    )
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.data.forEach(element => {
      let currentDate = moment(new Date());
      let campaignsDateToshow = moment(new Date(element.campaignsDate));
      element.days = currentDate.diff(campaignsDateToshow, 'days');
      console.log(Math.sign(element.days));
      element.campaignsDateToshow = new Date(element.campaignsDate);
    });
  }

  openDialog(item): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = item;

    this.dialog.open(DialogComponent, dialogConfig);
  }
}
