import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbCharacteristicService } from 'src/app/services/characteristic/fb-characteristic.service';
import { SharedService } from 'src/app/services/shared.service';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { Characteristic } from 'src/app/shared/models/characteristic.model';
import { AddCharacteristicComponent } from './add-characteristic/add-characteristic.component';
import { UpdateCharacteristicComponent } from './update-characteristic/update-characteristic.component';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent implements OnInit {
  categories = CATEGORIES;
  characteristics: Characteristic[] = [];
  email: string;
  constructor(private sharedService: SharedService, private dialog: MatDialog, private service: FbCharacteristicService) { }

  openDialog() : void {
    const dialogRef = this.dialog.open(AddCharacteristicComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let alreadySet = false;
        this.characteristics.forEach(characteristic => {
          if(characteristic.name === result.name){
            alreadySet = true;
          }
        });

        if(!alreadySet){
          this.characteristics.push(result);
          this.service.add(this.email, this.characteristics);
        }else{
          alert("You already have this characteristic set!");
        }
      }
    });
  }

  openDialogUpdate(contactid: string) : void {
    const dialogRef = this.dialog.open(UpdateCharacteristicComponent, {id: contactid});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let oldName = this.characteristics[contactid].name;
        this.characteristics[contactid] = result;
        this.characteristics[contactid].name = oldName;
        this.service.update(this.email, this.characteristics);
      }
    });
  }

  remove(contactid: string) : void {
    this.characteristics.splice(parseInt(contactid), 1);
    this.service.delete(this.email, this.characteristics);
  }

  getCharacteristics(){
    let contactsClass = this;
    this.service.get(this.email).then(function(result: any) {
      if(!result) return;
      let contacts: Characteristic[] = result.characteristic;
      if(contacts == undefined) return;
      for(let i = 0; i < contacts.length; i++){
        contactsClass.characteristics.push(contacts[i]);
      }
    });
  }

  ngOnInit(): void {
    this.email = this.sharedService.EMAIL;
    this.characteristics = [];
    this.getCharacteristics();
  }

}
