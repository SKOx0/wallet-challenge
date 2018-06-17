import { round } from '../decimal';


describe('Decimal helper', () => {
  it('deve arrendondar para 2 casas de forma correta', () => {
    const resultBaixo = round(2.021, 2);
    const resultParaCima = round(2.029, 2);

    expect(resultBaixo).toBe(2.02);
    expect(resultParaCima).toBe(2.03);
  });
});
