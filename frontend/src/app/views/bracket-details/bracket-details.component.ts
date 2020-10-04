import { SrvBracketService } from '../../core/services/srv-bracket.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bracket } from 'src/app/core/models/bracket.model';

@Component({
  selector: 'app-bracket-details',
  templateUrl: './bracket-details.component.html',
  styleUrls: ['./bracket-details.component.scss']
})
export class BracketDetailsComponent implements OnInit {
  bracketId: string;
  bracketDtlsForm: FormGroup;
  submitted = false;
  newBracket = true;

  constructor(
    private bracketService: SrvBracketService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bracketDtlsForm = this.formBuilder.group({
      id: ['', Validators.required],
      info: ['', Validators.required],
      date: ['']
    });

    // Check if bracket is new or existing by routing
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        const bracket = this.bracketService.getBracket(params.id);
        if (bracket) {
          this.bracketId = params.id;
          this.newBracket = false;
          this.fun_Populate_Edit_Form(bracket);
        } else {
          this.newBracket = true;
        }
      } else {
        this.newBracket = true;
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.bracketDtlsForm.controls; }

  fun_Save_Bracket() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bracketDtlsForm.invalid) {
      return;
    }

    const formData = this.bracketDtlsForm.value;

    if (this.newBracket) {
      this.bracketService.addBracket(formData);
    } else {
      this.bracketService.updateBracket(this.bracketId, formData);
    }
    this.router.navigateByUrl('/bracket');
  }

  fun_Reset_Form() {
    this.submitted = false;
    this.bracketDtlsForm.reset();
    this.router.navigateByUrl('/bracket');
  }

  fun_Populate_Edit_Form(bracketObj: Bracket) {
    this.bracketDtlsForm.setValue({
      id: bracketObj.id,
      info: bracketObj.info,
      date: bracketObj.date
    });
  }
}
