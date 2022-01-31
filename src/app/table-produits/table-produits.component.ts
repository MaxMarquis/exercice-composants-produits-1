import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-table-produits',
  templateUrl: './table-produits.component.html',
  styleUrls: ['./table-produits.component.css']
})
export class TableProduitsComponent implements OnInit {
  produits: Produit[] = [];
  columnsToDisplay = ['nom', 'prix', 'actions'];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getProduits()
      .subscribe(resultat => this.produits = resultat);
  }

  onDelete(produit: Produit): void {
    this.produitService.deleteProduit(produit.id)
      .subscribe(result => this.produits = this.produits.filter(p => p !== produit));
  }


}
