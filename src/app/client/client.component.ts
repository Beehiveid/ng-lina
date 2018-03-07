import { Component, OnInit } from '@angular/core';
import { OutletterService } from '../outletter.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  generatedNumber: string;
  department: string[];
  selectedDept: string;
  perihal: string;
  sender: string;
  receiver: string;
  key_number: any;
  message: string;

  constructor(public outletter: OutletterService) { }

  ngOnInit() {
    this.department = [
      "hr",
      "it",
      "sales",
      "finance",
      "marketing"
    ]
    this.selectedDept = this.department[0];
    this.getNumber();
  }

  getNumber(){
    this.outletter.getNumber(this.selectedDept).subscribe(
      result => {
        this.key_number = result.key_number + 1;
        this.generatedNumber = `B.N/${this.selectedDept.toUpperCase()}/${this.key_number}/SUMBAR/PROV/10.2017`;
      }
    );
  }

  submit(){
    let obj = {
      sender: this.sender,
      receiver: this.receiver,
      perihal: this.perihal,
      department: this.selectedDept,
      key_number: this.key_number,
      letter_number: this.generatedNumber
    }
    
    this.outletter.submitOutletter(obj).subscribe(
      result=>{
        if(!result.success){
          this.message = "Nomor surat sudah digunakan. Silahkan klik 'verify'";
        }else{
          this.message = "Submit telah dilakukan";
        }
      }
    );
    
  }
}
