import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';

import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  providers: [TripData],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
})
export class TripListingComponent implements OnInit {

  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripData,
    private router: Router
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip():void{
    this.router.navigate(['add-trip']);
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {

          //TEST
          console.log('VALUE: ', value);
          console.log('TYPE: ', typeof value);
          console.log('IS ARRAY: ', Array.isArray(value));
          //END TEST

          this.trips = value;

          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }

          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}

