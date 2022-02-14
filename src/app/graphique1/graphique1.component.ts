import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {
  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [800, 581, 568, 485, 852], label: 'Produit ABC' },
      { data: [400, 190, 230, 140, 200], label: 'Produit XYZ' }
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
