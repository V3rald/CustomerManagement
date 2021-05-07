import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbCharacteristicService } from 'src/app/services/characteristic/fb-characteristic.service';
import { SharedService } from 'src/app/services/shared.service';
import { Characteristic } from 'src/app/shared/models/characteristic.model';

@Component({
  selector: 'app-update-characteristic',
  templateUrl: './update-characteristic.component.html',
  styleUrls: ['./update-characteristic.component.scss']
})
export class UpdateCharacteristicComponent implements OnInit {
  public selectedCharacteristic;

  characteristic: Characteristic;

  form: FormGroup = new FormGroup({
    name: new FormControl({value: '', disabled: true}, Validators.required),
    value: new FormControl(0, Validators.required),
  });

  constructor(private sharedService: SharedService, public dialogRef: MatDialogRef<UpdateCharacteristicComponent>, private service: FbCharacteristicService) { }

  ngOnInit(): void {
    let id = this.dialogRef.id;
    let email = this.sharedService.EMAIL;
    let characteristicClass = this;
    this.service.get(email).then(function(result: any) {
      if(!result) return;
      let contacts: Characteristic[] = result.characteristic;
      if(contacts == undefined) return;
      characteristicClass.characteristic = contacts[id];
      characteristicClass.selectedCharacteristic = contacts[id].name;
    });
  }

  close(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }
}
