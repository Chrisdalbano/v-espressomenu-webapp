import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  orderBy,
  query,
  onSnapshot,
  docs,
  createdAt,
} from "firebase/firestore";
import { db } from "@/assets/firebase/config";
import { ref } from "vue";

export function getCollection(name) {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = query(collection(db, name), orderBy("createdAt"));
  onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );
  return { documents, error };
}

export default getCollection;
