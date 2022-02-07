import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from '../produit';

@Component({
  selector: 'app-dialog-formulaire-produits',
  templateUrl: './dialog-formulaire-produits.component.html',
  styleUrls: ['./dialog-formulaire-produits.component.css']
})
export class DialogFormulaireProduitsComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormulaireProduitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit) {
   }

  fermerDialogue(): void {
    this.dialogRef.close();
  }

}
