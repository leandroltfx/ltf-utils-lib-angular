import { Injectable } from '@angular/core';

import { DateSeparator } from './types/date-separator.type';

@Injectable({
  providedIn: 'root'
})
export class LtfUtilsService {

  constructor() { }

  /**
   * 
   * @param date Data que será convertida.
   * @param separator Separador de dia, mês e ano. Exemplo: "15.01.2025", "25-07-1991", "01/01/2001".
   * @param reverse Indica se a data ficará em formato reverso: "yyyy/MM/dd" ou no formato do Brasil: "dd/MM/yyyy". Se não informado o valor padrão é false.
   * @returns Data em formato de string. Exemplo: 20.05.2010.
   */
  public transformDateToStringDate(
    date: Date,
    separator: DateSeparator,
    reverse: boolean = false,
  ): string {

    const year = Number(date.getFullYear());
    const month = (String(date.getMonth() + 1).length === 1) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = (String(date.getDate()).length === 1) ? '0' + date.getDate() : date.getDate();

    if (reverse) {
      return `${year}${separator}${month}${separator}${day}`;
    } else {
      return `${day}${separator}${month}${separator}${year}`;
    }
  }
}
