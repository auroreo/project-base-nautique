// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getFirestore, doc, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore'
// import { getFirestore, doc, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestsore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4mlZOGA6dnHchdGBeiGnBrdN9scrR63A',
  authDomain: 'loeuilly-kayak.firebaseapp.com',
  projectId: 'loeuilly-kayak',
  storageBucket: 'loeuilly-kayak.appspot.com',
  messagingSenderId: '293375159428',
  appId: '1:293375159428:web:fab1f5cd67cacd0636a6d1',
  measurementId: 'G-M2X2NNFD1T'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
// console.log(app);
// console.log(db);

let count = 0
export const connect = (login, password) => {
  let user = signInWithEmailAndPassword(auth, login, password)
    .then((userCredentials) => {
      let user = userCredentials.user
      return user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  return user
}
export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('deconnecté')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
// EXEMPLE DE CREATION DE COLLECTION
// const collectionTest = doc(firestore, 'Test');

// fonction pour écrire une data
export const writeData = async (collection_name, docData) => {
  // docData, objet pour stocker les données
  try {
    // addDoc pour ajouter une donner
    await addDoc(collection(db, collection_name), docData)
    return true
  } catch (error) {
    console.log(error)
  }
}

// EXEMPLE D'ECRITURE DE DATA

// writeData('individual', 'personne', {
//   lastname: 'Boulant',
//   firstname: 'Simon',
//   email: 'developpeur@gmail.com'
// })
// writeData('individual', 'presonne', {
//   lastname: 'Dulot',
//   firstname: 'Philippe',
//   email: 'fanDeChevaux@gmail.com'
// })
// writeData('family', 'titulaire', {
//   lastname: 'Ferrero',
//   firstname: 'Roger',
//   email: 'LeChocolatMiam@gmail.com'
// })

// writeData('group', 'number-', {
//   titulaire: { lastname: 'Murdock', firstname: 'Matt', email: 'aveugle@gmail.com' },
//   personne1: { lastname: 'Obispo', firstname: 'Pascal', email: 'chanteurDeFou@gmail.com' },
//   personne2: { lastname: 'Loucheut', firstname: 'Zayaa', email: 'surfeur@gmail.com' }
// })

export const deleteData = () => {
  try {
    readData('family').then((data) => {
      for (let i = 0; i < data.length; i++) {
        deleteDoc(doc(db, 'family', data[i].id))
      }
    })
    readData('group').then((data) => {
      for (let i = 0; i < data.length; i++) {
        deleteDoc(doc(db, 'group', data[i].id))
      }
    })
    readData('individual').then((data) => {
      for (let i = 0; i < data.length; i++) {
        deleteDoc(doc(db, 'individual', data[i].id))
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// EXEMPLE DE SUPRESSION DE DATA
// deleteData('individuel', 'personne1');

export const readData = async (collection_name) => {
  try {
    const colRef = collection(db, collection_name)
    const docSnap = await getDocs(colRef)

    let arrayData = []
    docSnap.forEach((doc) => {
      let data = doc.data()
      delete data.persons
      arrayData.push({ id: doc.id, ...data })
      // doc.data() is never undefined for query doc snapshots
    })

    if (arrayData) {
      return arrayData
    } else {
      console.log('Aucune donnée trouvée pour ce document.')
    }
  } catch (error) {
    console.error('Erreur lors de la lecture des données :', error)
  }
}

// EXEMPLE DE LECTURE DE DATA
// readData('groupe', 'number-4').then((data) => {
//     console.log(data.titulaire.lastname);
//     console.log(data.titulaire.firstname);
//     console.log(data.titulaire.email);
// });
