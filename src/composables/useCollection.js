import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/assets/firebase/config";

export function useCollection(name) {
  async function add(data) {
    try {
      return [await addDoc(collection(db, name), data), null];
    } catch (error) {
      console.error(error);
      return [null, error];
    }
  }

  // Example: 
  // const collection = useCollection("users");
  // const [users, error] = collection.get();
  // if (error) // do stuff
  // else // no error
  // return { users, error }
  async function get(id) {
    try {
      if (id == null) {
        return [await getDocs(doc(db, name)), null]
      } else {
        return [await getDocs(doc(db, name, id)), null];
      }
    } catch (error) {
      console.error(error);
      return [null, error];
    }
  }

  // Example: 
  // const collection = useCollection("users");
  // const error = collection.remove("exampleId");
  // if (error) // do stuff
  // else // no error
  // return { users, error }
  async function remove(id) {
    try {
      await deleteDoc(doc(db, name, id));
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async function update(id, data) {
    try {
      await updateDoc(doc(db, name, id), data);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  return { add, get, update, remove };
}
