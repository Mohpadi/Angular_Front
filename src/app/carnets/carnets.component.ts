import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carnets',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './carnets.component.html',
  styleUrls: ['./carnets.component.scss']
})
export class CarnetsComponent implements OnInit {
  carnets: any[] = [];
  newCarnet = { numero: '',nom: '', prenom: '', adresse: '', photo: '' };
  editingCarnet: any = null;
  showForm = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCarnets();
  }

  getCarnets() {
    this.http.get('http://127.0.0.1:8000/api/contacts')
      .subscribe((data: any) => {
        this.carnets = data;
      });
  }
  editCarnet(carnet: any) {
    this.newCarnet = { ...carnet };
    this.editingCarnet = { ...carnet };
    this.showForm = true;
  }
  addOrUpdateCarnet() {
    if (this.editingCarnet) {
      console.log(this.editingCarnet)
      this.updateCarnet();
    } else {

      this.http.post('http://127.0.0.1:8000/api/contacts', this.newCarnet)
        .subscribe(() => {
          this.getCarnets();
          this.resetForm();
        });
    }
  }
  updateCarnet() {
    this.http.put(`http://127.0.0.1:8000/api/contacts/${this.editingCarnet.id}`, this.newCarnet)
      .subscribe(() => {
        this.getCarnets();
        this.resetForm();
      });
  }
  deleteCarnet(id: number) {
    this.http.delete(`http://127.0.0.1:8000/api/contacts/${id}`)
      .subscribe(() => {
        this.getCarnets();
      });
  }

  cancelEdit() {
    this.resetForm();
  }


  resetForm() {
    this.editingCarnet = null;
    this.newCarnet = { numero: '', nom: '', prenom: '', adresse: '',  photo: '' };
    this.showForm = false;
  }

}
