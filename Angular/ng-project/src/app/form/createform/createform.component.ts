import { Component } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent {
  myForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.pattern('[0-9]*')],
      gender: [''],
      skills: new FormArray([])
    });
  }
  get Name() {
    return this.myForm.get("name");
  }
  onSubmit(f: NgForm) {
    console.log(f);

  }
  get Skills() {
    return this.myForm.get("skills") as FormArray
  }
  addSkills(skill: any) {
    console.log(this.Skills);
    
    this.Skills.push(
      new FormControl(skill.value))
  }
  removeSkills(skill: any){
    this.Skills.removeAt(skill);
  }

}
