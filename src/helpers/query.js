
import gql from 'graphql-tag';
import apollo from 'helpers/apollo';

async function obterValorMoeda(moeda) {
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

function getUser(userEmail, predict) {
  const users = JSON.parse(localStorage.getItem('users'));

  if (!users) return null;

  const user = users.find(predict);

  return user;
}

async function getUserInformations(email) {
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

export { getUserInformations, getUser, obterValorMoeda };
