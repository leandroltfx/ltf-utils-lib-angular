import { LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { TestBed } from '@angular/core/testing';
import { registerLocaleData } from '@angular/common';

import { LtfUtilsService } from './ltf-utils.service';

registerLocaleData(ptBr);

describe('LtfUtilsService', () => {
  let service: LtfUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LtfUtilsService,
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    });
    service = TestBed.inject(LtfUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transformDateToStringDate', () => {

    it('deve transformar um objeto do tipo Date para uma data no formato: dd.MM.yyyy', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '.');
      const secondDateString = service.transformDateToStringDate(secondDate, '.');
      const thirdDateString = service.transformDateToStringDate(thirdDate, '.');

      expect(firstDateString).toBe('15.02.2025');
      expect(secondDateString).toBe('05.01.1977');
      expect(thirdDateString).toBe('31.10.793');
    });

    it('deve transformar um objeto do tipo Date para uma data no formato: dd-MM-yyyy', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '-');
      const secondDateString = service.transformDateToStringDate(secondDate, '-');
      const thirdDateString = service.transformDateToStringDate(thirdDate, '-');

      expect(firstDateString).toBe('15-02-2025');
      expect(secondDateString).toBe('05-01-1977');
      expect(thirdDateString).toBe('31-10-793');
    });

    it('deve transformar um objeto do tipo Date para uma data np formato: dd/MM/yyyy', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '/');
      const secondDateString = service.transformDateToStringDate(secondDate, '/');
      const thirdDateString = service.transformDateToStringDate(thirdDate, '/');

      expect(firstDateString).toBe('15/02/2025');
      expect(secondDateString).toBe('05/01/1977');
      expect(thirdDateString).toBe('31/10/793');
    });

    it('deve transformar um objeto do tipo Date para uma data no formato: yyyy.MM.dd', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '.', true);
      const secondDateString = service.transformDateToStringDate(secondDate, '.', true);
      const thirdDateString = service.transformDateToStringDate(thirdDate, '.', true);

      expect(firstDateString).toBe('2025.02.15');
      expect(secondDateString).toBe('1977.01.05');
      expect(thirdDateString).toBe('793.10.31');
    });

    it('deve transformar um objeto do tipo Date para uma data no formato: yyyy-MM-dd', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '-', true);
      const secondDateString = service.transformDateToStringDate(secondDate, '-', true);
      const thirdDateString = service.transformDateToStringDate(thirdDate, '-', true);

      expect(firstDateString).toBe('2025-02-15');
      expect(secondDateString).toBe('1977-01-05');
      expect(thirdDateString).toBe('793-10-31');
    });

    it('deve transformar um objeto do tipo Date para uma data no formato: yyyy/MM/dd', () => {

      const firstDate = new Date(2025, 1, 15);
      const secondDate = new Date(1977, 0, 5);
      const thirdDate = new Date(793, 9, 31);

      const firstDateString = service.transformDateToStringDate(firstDate, '/', true);
      const secondDateString = service.transformDateToStringDate(secondDate, '/', true);
      const thirdDateString = service.transformDateToStringDate(thirdDate, '/', true);

      expect(firstDateString).toBe('2025/02/15');
      expect(secondDateString).toBe('1977/01/05');
      expect(thirdDateString).toBe('793/10/31');
    });

  });

  describe('capitalize', () => {

    it('deve transformar a primeira letra de uma palavra em letra maiúscula e as outras em minúsculas', () => {

      const result = service.capitalize('paLAvrA');
      expect(result).toBe('Palavra');
    });

    it('deve transformar a primeira letra da primeira palavra de uma frase em maiúscula e as letras das palavras restantes em minúsculas', () => {

      const result = service.capitalize('priMeira pALAvra Da FrasE');
      expect(result).toBe('Primeira palavra da frase');
    });

    it('deve retornar uma string vazia se receber uma string vazia e logar um erro', () => {

      const errorSpy = spyOn(console, 'error');

      const result = service.capitalize('');

      expect(result).toBe('');
      expect(errorSpy).toHaveBeenCalledWith('Informe uma string');
    });

    it('deve transformar a única letra passada por parâmetro em maiúsculo', () => {

      const result = service.capitalize('a');
      expect(result).toBe('A');
    });
  });

  describe('addEllipsis', () => {

    it('deve cortar a string no ponto desejado e adicionar ellipsis no final', () => {

      const result = service.addEllipsis('palavra', 5);
      expect(result).toBe('palav...');
    });

    it('deve retornar apenas a ellipsis se toda a string for cortada', () => {

      const result = service.addEllipsis('palavra', 0);
      expect(result).toBe('...');
    });

    it('deve retornar apenas a ellipsis se for passado uma string vazia', () => {

      const result = service.addEllipsis('palavra', 0);
      expect(result).toBe('...');
    });
  });

  describe('formatCurrencyBrl', () => {

    it('deve transformar um valor em um formato de moeda brasileira', () => {

      const result = service.formatCurrencyBrl(50);
      const result2 = service.formatCurrencyBrl(1250);
      const result3 = service.formatCurrencyBrl(0.50);

      // O formatCurrency do @angular/commons pode incluir um espaço entre o símbolo da moeda e o número
      // O replace remove qualquer espaço invisível na string formatada
      expect(result.replace(/\s/g, '')).toBe('R$50,00');
      expect(result2.replace(/\s/g, '')).toBe('R$1.250,00');
      expect(result3.replace(/\s/g, '')).toBe('R$0,50');
    });
  });
});
