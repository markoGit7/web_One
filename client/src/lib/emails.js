import { openDB } from 'idb';

const DB_NAME = 'MyEmailDB';
const STORE_NAME = 'emails';

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function addEmail(email) {
  const db = await initDB();
  return db.add(STORE_NAME, { email });
}

export async function getAllEmails() {
  const db = await initDB();
  const all = await db.getAll(STORE_NAME);
  return all.map(item => item.email);
}

export async function clearEmails() {
  const db = await initDB();
  await db.clear(STORE_NAME);
}