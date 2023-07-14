import { ref, watchEffect } from 'vue'

// firebase
import { db } from '../firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'

// fetching a single document (& realtime)
const getDoc = (col, docId) => {
  const document = ref(null)

  const docRef = doc(db, col, docId)
  
  const unsub = onSnapshot(docRef, (doc) => {
    document.value = doc.data()
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  })

  return { document }
}

export default getDoc