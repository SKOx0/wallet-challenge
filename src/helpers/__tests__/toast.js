import { getBasicToast } from '../toast';


describe('Toast helper', () => {
  it('deve retornar as informações do toast', () => {
    const expected = {
      type: 'success',
      message: 'Success!',
      options: {
        showCloseButton: true
      }
    };
    expect(getBasicToast('success', 'Success!')).toEqual(expected);
  });
});
