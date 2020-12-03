import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-consulta',
  templateUrl: './restaurante-consulta.component.html',
  styleUrls: ['./restaurante-consulta.component.css']
})
export class RestauranteConsultaComponent implements OnInit {

  restaurantes:Restaurante[];
  Total :Number = 0;
  searchText = "";
  searchText1 = "";
  constructor(private service:RestauranteService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.service.Consultar().subscribe(result => {
      this.restaurantes = result;
    });
  }
}
