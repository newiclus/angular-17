import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent {
  list = [
    { name: 'Math', teacher: 'Mr. Smith', id: 1 },
    { name: 'Science', teacher: 'Ms. Johnson', id: 2 },
    { name: 'History', teacher: 'Mr. Brown', id: 3 },
    { name: 'English', teacher: 'Ms. Davis', id: 4 },
    { name: 'Art', teacher: 'Ms. White', id: 5 },
  ];
}
