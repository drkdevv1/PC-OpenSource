import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { People } from "../../model/people.entity";
import { StarwarsApiService } from '../../services/starwars-api.service';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, NgForOf],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people: Array<People> = [];
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color','birth_year','gender','homeworld','films','species','vehicles','starships','created','edited','url'];
  dataSource: any;

  constructor(private starwarsApiService: StarwarsApiService) {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.starwarsApiService.getPeople().subscribe((data: any) => {
      this.people = data.results;
      this.dataSource = new MatTableDataSource(this.people);
    });
  }
}
