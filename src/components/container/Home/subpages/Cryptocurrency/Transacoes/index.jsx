import React from 'react';
import { Content, Table } from 'bloomer';
import { array } from 'prop-types';

// TODO paginação
const Transacoes = (props) => (
  <Content>
    <Table >
      <thead>
        <tr>
          <th>Data</th>
          <th>Tipo transação</th>
          <th>Meoda</th>
          <th>Valor</th>
          <th>Moeda de troca</th>
          <th>Valor convertido</th>
        </tr>
      </thead>
      <tbody>
        {
          props.transactions.map((key, idx) => (
            <tr key={`${idx}`}>
              <td>{key.data}</td>
              <td>{key.tipoTransacao}</td>
              <td>{key.moeda}</td>
              <td>{key.valor}</td>
              <td>{key.moedaTroca}</td>
              <td>{key.valorConvertido}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </Content>
);

export default Transacoes;

Transacoes.propTypes = {
  transactions: array
};
