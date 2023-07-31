import {getFirestore, collection, addDoc, doc, getDoc, getDocs, query, where, updateDoc} from 'firebase/firestore'
import './App.css';
import {app} from './firebase'

const firestore = getFirestore(app)

function App() {
  
  // ! addDoc helps you to add a document in firestore
  // ! documents parameters are first -- collections reference, and the second parameter is its details
  // * whereas, for collection function, first parameter is the refernce of firestore and the path of the collection {usually name}

  const writeData = async () => {
    const result = await addDoc(collection(firestore, 'cities'), {
      name : "Delhi",
      pinCode : 1234,
      lat : 123,
      long : 456
    })
    console.log(result)
  }

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, 'cities/xj7tKILDhbDqj0rwAukX/places'), {
      name : 'Chauk',
      desc : '...',
      date : '..'
    })
  }

  const getDocument = async () => {
    const reference = doc(firestore, 'cities' , 'xj7tKILDhbDqj0rwAukX');
    const snap = await getDoc(reference);
    console.log(snap.data())
  }


  const getDocsByQuery = async () => {
    const collectionRef = collection(firestore, 'users');
    const q = query(collectionRef, where('isMale', '==', true));
    const snapshots = await getDocs(q)
    snapshots?.forEach((snapshot) => console.log(snapshot.data()))
  }

  const updateDocument = async () => {
    const docRef = doc(firestore, 'cities', 'xj7tKILDhbDqj0rwAukX');
    await updateDoc(docRef, {
      name : 'New Delhi'
    })
  }

  return (
    <div className="App">
        <h1>Firebase FireStore</h1>
        <button onClick={writeData}>Write Data in Firestore</button>
        <button onClick={makeSubCollection}>Write collection Data inside collection</button>

        <button onClick={getDocument}>Getting data from document</button>
        
        <button onClick={getDocsByQuery}>Getting data from document using query</button>

        <button onClick={updateDocument}>Update The Document</button>
        
    </div>
  );
}

export default App;
