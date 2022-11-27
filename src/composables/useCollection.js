import { ref } from 'vue';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();
const useCollection = (collection) => {
    const error = ref(null);

    const addDoc = async (doc) => {
        error.value = null;

        try {
            await collection(db).add(doc);
        } catch(err) {
            console.log(err.message);
            err.value = 'Could not send the message';
        }
    }
    return { error, addDoc }
}

export default useCollection