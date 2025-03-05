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

  /**
   * 
   * @param word Uma letra, palavra ou frase
   * @returns A mesma string, porém com a primeira letra em maiúsculo e o resto em minúsculo, ou, em caso de uma frase, a primeira letra da primeira palavra em maiúsculo e o resto das letras do restante das palavras em minúsculo
   */
  public capitalize(
    word: string
  ): string {
    try {
      let letters = word.toLowerCase().split('');
      letters[0] = letters[0].toUpperCase();
      return letters.join(''); 
    } catch (error) {
      console.error('Informe uma string');
      return '';
    }
  }

  /**
   * 
   * @param word Palavra ou frase
   * @param length Ponto onde a palavra ou frase será cortada
   * @returns A mesma palavra ou frase, porém cortada na parte desejada e com ellipsis adicionada no final
   */
  addEllipsis(
    word: string,
    length: number,
  ): string {
    
    word = word.substring(0, length);
    return `${word}...`;
  }
}
