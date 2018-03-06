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

  constructor(public outletter: OutletterService) { }

  ngOnInit() {
    this.generatedNumber = null;
    this.department = [
      "hr",
      "it",
      "sales",
      "finance",
      "marketing"
    ]
    this.selectedDept = this.department[0];
  }

  getNumber(){
    this.outletter.getNumber(this.selectedDept).subscribe(
      result => {
        this.generatedNumber = `B.N/${this.selectedDept.toUpperCase()}/${result.key_number + 1}/SUMBAR/PROV/10.2017`;
      }
    );
  }

}
