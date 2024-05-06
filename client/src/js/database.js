import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (id, content) => {
  try {
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ id: id, note: content });
    const result = await request;
    console.log("Note saved to the database", result);
  } catch (err) {
    console.error("putDb not executed", err);
  }
};

//console.error('putDb not implemented');

export const getDb = async () => {
  try {
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.get(1);
    const result = await request;
    console.log("result.value", result);
    return result?.value;
  } catch (err) {
    console.error("getDb not executed", err);
  }
};
//console.error("getDb not implemented");

initdb();

//refer to miniproject
