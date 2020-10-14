import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  profileForm: FormGroup;
  fields: FormlyFieldConfig[];
  model;
  constructor() {
    this.profileForm = new FormGroup({});
    this.model = {};
    this.fields = [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'first name',
          placeholder: 'Enter Name',
          required: true,
        },
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'last name',
          placeholder: 'Enter Name',
          required: true,
        },
      },
    ];
  }

  ngOnInit(): void {}
  addFields() {
    let a: FormlyFieldConfig = {
      key: 'NewField',
      templateOptions: {
        label: 'NewField',
        placeholder: 'NewField',
        required: true,
      },
      type: 'input',
    };
    // this.fields.push(this.fields[0]);
    this.fields.push(a);

    // console.info('jjjjjjjjjjj', JSON.stringify(this.fields[0]));
    // console.info('jjjjjjjjjjj', JSON.stringify(this.fields[1]));
    // console.info('jjjjjjjjjjj', JSON.stringify(this.fields[2]));
    // console.info('jjjjjjjjjjj', JSON.stringify(this.fields[3]));

    this.fields = [...this.fields];
  }
  onSubmit() {
    console.info('kkkkkkkkkkkkkkkkk', this.model);
  }
}
