import { Component, OnInit } from '@angular/core';
import { Assessment2Service } from 'src/app/services/assessment2.service';

@Component({
  selector: 'app-assessment2',
  templateUrl: './assessment2.component.html',
  styleUrls: ['./assessment2.component.css']
})
export class Assessment2Component implements OnInit {

  constructor(private assessment2Service: Assessment2Service) { }

  data: any;
  expandedRowIndex: number | null = null;

  ngOnInit(): void {
    this.assessment2Service.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );
  }
  toggleDetails(index: number): void {
    if (this.expandedRowIndex === index) {
      this.expandedRowIndex = null;
    } else {
      this.expandedRowIndex = index;
    }
    console.log(this.expandedRowIndex)
  }

}
