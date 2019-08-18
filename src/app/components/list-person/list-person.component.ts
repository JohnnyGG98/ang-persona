import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons: Array<Person>;

  constructor(private phttp: PersonService) {
    this.getPersons();
  }

  ngOnInit() {
  }

  getPersons() {
    this.phttp.getAll().subscribe(
      data => {
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
