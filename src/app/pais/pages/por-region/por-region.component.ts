import { Component } from '@angular/core';
import { SerchPaises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
    margin-right: 6px;
  }`
]
})
export class PorRegionComponent {
regiones: string[] = ['eu', 'efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc'];
regionActiva: string = '';
paises: SerchPaises[] = [];

constructor( private paisService: PaisService) { }

getClaseCSS(region:string): string {
  return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
}
  activarRegion(region: string) {

    if (region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises =[];

    this.paisService.buscarRegion( region )
    .subscribe(paises => this.paises = paises);
  }
}
