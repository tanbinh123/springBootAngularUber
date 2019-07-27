import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Driver} from '../../driver';
import { DriversService } from '../../drivers.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  angForm: FormGroup;
  driver: Driver;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private ps:DriversService) {
    this.driver=new Driver();
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      DriverName: ['', Validators.required ],
      DriverLastName: ['', Validators.required ],
      DriverLicense: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.ps.save(this.driver).subscribe(data => console.log(data), error => console.log(error));
    this.driver=new Driver();
    this.gotoDriverList();
  }

  gotoDriverList(){
    this.router.navigate(['/drivers']);
  }

  

  ngOnInit() {
  }

}