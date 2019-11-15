import { Component } from '@angular/core';
import {Student} from './student';
import {StudentDataService} from './student-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public title = 'Input';
  public programNames = [
    '-- select program --',
    'Computer Programmer', 'Systems Technology',
    'Engineering Technician', 'Systems Technician'];
  public student: Student;
  public constructor(dataService: StudentDataService) {
    this.student = dataService.student;
  }

  public send(studentForm) {
    console.log(studentForm);
  }
}
