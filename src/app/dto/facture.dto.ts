import { Client } from './client.dto';
import { LigneFacture } from './ligne-facture.dto';

export interface Facture {
  id: number;
  client: Client;
  ligneFactures: LigneFacture[];
}
