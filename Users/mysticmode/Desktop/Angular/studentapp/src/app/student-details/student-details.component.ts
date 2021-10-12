import { Student } from '../student';
import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentListComponent } from '../student-list/student-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id!: number
  student: Student = new Student();

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getStudentById(this.id).subscribe(data => {
        this.student = data;
      });
  }

  list(){
    this.router.navigate(['students']);
  }
}

