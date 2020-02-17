import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('confirmationModal') confirmationModal: NgbModalRef

  isSubmitted: boolean;

  registerForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if(this.registerForm.valid) {
      this.isSubmitted = false
      this.modalService.open(this.confirmationModal)
    } else {
      this.isSubmitted = true
      return
    }
  }

  closeModal(): void {
    this.registerForm.reset()
    this.modalService.dismissAll()
  }
}
