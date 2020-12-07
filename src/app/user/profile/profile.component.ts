import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "src/app/common/toastr.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      this.setValidators()
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      this.setValidators()
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValue) {
    if (this.profileForm.valid) {
      this.authService.updateUser(formValue.firstName, formValue.lastName);
      this.toastr.success("Profile saved!");
    }
  }

  isErrorFirstName() {
    return this.firstName.invalid && this.firstName.touched;
  }

  isErrorLastName() {
    return this.lastName.invalid && this.lastName.touched;
  }

  setValidators(): any[] {
    return [Validators.required, Validators.pattern("[a-zA-Z].*")];
  }
}
