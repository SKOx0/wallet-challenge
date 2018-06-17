import { history } from '../history';


describe('History helper', () => {
  it('deve retornar o objeto de histórico', () => {
    expect(history).toBeDefined();
    expect(history).toBeInstanceOf(Object);
  });
});
