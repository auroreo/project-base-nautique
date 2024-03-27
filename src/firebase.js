// Import the functions you need from the SDKs you need

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js'
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  deleteDoc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'

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

// console.log(app);
// console.log(db);

let count = 0

// EXEMPLE DE CREATION DE COLLECTION
// const collectionTest = doc(firestore, 'Test');

// fonction pour écrire une data
export const writeData = async (collection_name, docData) => {
  // docData, objet pour stocker les données
  try {
    // addDoc pour ajouter une donner
    await addDoc(collection(db, collection_name), docData)
    console.log('value inserted')
  } catch (error) {
    console.log(error)
  }
}

// EXEMPLE D'ECRITURE DE DATA

// writeData('individuel', 'personne', {
//   lastname: 'Boulant',
//   firstname: 'Simon',
//   email: 'developpeur@gmail.com'
// })
// writeData('individuel', 'presonne', {
//   lastname: 'Dulot',
//   firstname: 'Philippe',
//   email: 'fanDeChevaux@gmail.com'
// })
// writeData('famille', 'titulaire', {
//   lastname: 'Ferrero',
//   firstname: 'Roger',
//   email: 'LeChocolatMiam@gmail.com'
// })

// writeData('groupe', 'number-', {
//   titulaire: { lastname: 'Murdock', firstname: 'Matt', email: 'aveugle@gmail.com' },
//   personne1: { lastname: 'Obispo', firstname: 'Pascal', email: 'chanteurDeFou@gmail.com' },
//   personne2: { lastname: 'Loucheut', firstname: 'Zayaa', email: 'surfeur@gmail.com' }
// })

export const deleteData = (collection_name, col_module) => {
  try {
    const collection = doc(db, collection_name, col_module)
    deleteDoc(collection, col_module)
  } catch (error) {
    console.log(error)
  }
}

// EXEMPLE DE SUPRESSION DE DATA
// deleteData('individuel', 'personne1');

export const readData = async (collection_name, col_module) => {
  try {
    const colRef = doc(db, collection_name, col_module)
    const docSnap = await getDoc(colRef)

    if (docSnap.exists()) {
      console.log('Données trouvées :', docSnap.data())
      return docSnap.data()
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
