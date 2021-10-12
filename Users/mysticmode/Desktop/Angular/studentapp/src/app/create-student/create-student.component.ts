import { StudentService } from '../student.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  //emailForm!: FormGroup
    submitted = false;
  constructor(private studentService: StudentService,
    private router: Router) { }

    ngOnInit() {
     
  }


  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
   // this.submitted = true;
   console.log(this.student);
   this.save();   
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}
