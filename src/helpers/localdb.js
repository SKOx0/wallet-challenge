import localForage from 'localforage';

const initializeLocalDb = () => {
  localForage.setDriver([
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL
  ]);
  return localForage;
};

export default initializeLocalDb();
