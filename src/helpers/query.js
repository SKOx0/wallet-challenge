
import gql from 'graphql-tag';
import apollo from 'helpers/apollo';

export async function obterValorMoeda(moeda) {
  return apollo.query({
    query: gql`
      query GetCoinPrice{
        ${moeda}{
          buy,
          sell
        }
      }
    `,
  });
}

export function getAllUsers() {
  return JSON.parse(localStorage.getItem('users'));
}

export function getUser(userEmail, predict) {
  predict = predict || function emailFilter(user) { return user.email === userEmail; };

  const users = getAllUsers();

  if (!users) return null;

  const user = users.find(predict);

  return user;
}


export function addTransaction(userEmail, informations) {
  const users = getAllUsers();

  const user = getUser(userEmail);

  user.transactions = [...user.transactions, { ...informations }];

  const keepUsers = users.filter((value) => value.email !== userEmail);

  localStorage.setItem('users', JSON.stringify([...keepUsers, user]));
}

export function getAllTransactions(userEmail) {
  const user = getUser(userEmail);

  return user.transactions;
}

export async function getUserInformations(email) {
  return apollo.query({
    query: gql`
      query GetUserInformations{
        userInitialInfo(email: "${email}"){
          britaHash,
          bitcoinHash,
          moedas {
            real {
              saldo
            }
            bitcoin {
              saldo
            }
            brita {
              saldo
            }
          }
        }
      }
    `,
  });
}
