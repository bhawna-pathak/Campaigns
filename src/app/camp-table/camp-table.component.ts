import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-camp-table',
  templateUrl: './camp-table.component.html',
  styleUrls: ['./camp-table.component.css']
})

export class CampTableComponent implements OnInit {
  @Input("case") case: string;
  events: string[] = [];
  Math: any = Math;
  upcoming = [];
  live = [];
  past = [];
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
      '9-20-2019',
      {
        campaignsName: 'Super Jewel Quest',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '9-30-2019',
      {
        campaignsName: 'Super Jewel Quest',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '9-30-2019',
      {
        campaignsName: 'Super Jewel Quest',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '9-30-2019',
      {
        campaignsName: 'Super Jewel Quest',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '9-30-2019',
      {
        campaignsName: 'Super Jewel Quest',
        campaignsIcon: 'sfdsfds'
      },
      new Date(),
      0
    ),
    new Campaign(
      '3-10-2019',
      {
        campaignsName: 'Mole Slayer',
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
      element.campaignsDateToshow = new Date(element.campaignsDate);
      if (element.days > 0) {
        this.upcoming.push(element);
      } else if (element.days == 0) {
        this.live.push(element);
      } else {
        this.past.push(element);
      }
    });
  }

  openDialog(item): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = item;

    this.dialog.open(DialogComponent, dialogConfig);
  }

  public onDate(event): void {
    console.log(event);
  }
}
