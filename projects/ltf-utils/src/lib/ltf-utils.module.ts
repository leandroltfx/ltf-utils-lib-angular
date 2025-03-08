import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class LtfUtilsModule { }
