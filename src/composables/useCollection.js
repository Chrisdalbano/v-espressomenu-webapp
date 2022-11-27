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
      return await addDoc(collection(db, name), data);
    } catch (error) {
      console.error(error);
    }
  }
  async function get(id) {
    try {
      if (id == null) {
        return await getDocs(doc(db, name));
      } else {
        return await getDocs(doc(db, name, id));
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function remove(id) {
    try {
      await deleteDoc(doc(db, name, id));
    } catch (error) {
      console.error(error);
    }
  }
  async function update(id, data) {
    try {
      await updateDoc(doc(db, name, id), data);
    } catch (error) {
      console.error(error);
    }
  }
  return { add, get, update, remove };
}
