import { ref, watchEffect } from 'vue'

// firebase
import { db } from '../firebase/config'
import { collection, onSnapshot, query } from "firebase/firestore";

const getCollection = (col) => {
  const documents = ref(null)

  // register the firestore collection reference
  let colRef = collection(db, col)

  let q = query(colRef)

  let results = []

  const unsub = onSnapshot(q, (snapshot) => {
    // console.log('TRRIGERED')
    snapshot.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
    })
    console.log('results: ', results)

    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  })

  return { documents }
}

export default getCollection