import React from 'react';
import { Content, Table } from 'bloomer';

const Transacoes = () => (
  <Content>
    <Table >
      <thead>
        <tr>
          <th>Data</th>
          <th>Tipo transação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15/06/2018</td>
          <td>Venda</td>
        </tr>
        <tr>
          <td>15/06/2018</td>
          <td>Troca</td>
        </tr>
        <tr>
          <td>15/06/2018</td>
          <td>Compra</td>
        </tr>
      </tbody>
    </Table>
  </Content>
);

export default Transacoes;

Transacoes.propTypes = {

};
