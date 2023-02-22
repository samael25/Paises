import { Component, OnInit } from '@angular/core';
import { SerchPaises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {
termino : string = '';
hayError: boolean = false;
paises: SerchPaises[] = [];
paisesSugeridos: SerchPaises[] = [];
mostrarSugerencias: boolean = false;


  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }
  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais( this.termino )
    .subscribe ( (paises) => {
      console.log( paises );
      this.paises = paises;

    },(err) => {
    this.hayError = true;
    this.paises = [];
    })
   }

   sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,7),
    (err) => this.paisesSugeridos = []);
   }

   buscarSugerido(termino: string) {
    this.buscar(termino);
   }

}
