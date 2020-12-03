import PouchDB from 'pouchdb';

const DB = () => {
  const db = new PouchDB('catster-favs-db');
  return db;
};

export default DB;
