import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProduitService } from './produit.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ImageComponent } from './image/image.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { TableProduitsComponent } from './table-produits/table-produits.component';
import { FormulaireProduitsComponent } from './formulaire-produits/formulaire-produits.component';
import { DialogFormulaireProduitsComponent } from './dialog-formulaire-produits/dialog-formulaire-produits.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphique1Component } from './graphique1/graphique1.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { Graphique2Component } from './graphique2/graphique2.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    ListeProduitsComponent,
    ImageComponent,
    NomDescriptionComponent,
    PrixComponent,
    LienDetailsComponent,
    FicheProduitComponent,
    TableProduitsComponent,
    FormulaireProduitsComponent,
    DialogFormulaireProduitsComponent,
    Graphique1Component,
    GraphiquesComponent,
    Graphique2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
