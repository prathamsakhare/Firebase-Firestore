import {getFirestore, collection, addDoc} from 'firebase/firestore'
import './App.css';
import {app} from './firebase'

const firestore = getFirestore(app)

function App() {

  const writeData = async () => {
    const result = await addDoc(collection(firestore, 'cities'), {
      name : "Delhi",
      pinCode : 1234,
      lat : 123,
      long : 456
    })
    console.log(result)
  }

  // ! addDoc helps you to add a document in firestore
  // * whereas, for collection function, first parameter is the refernce of firestore and the path of the collection {usually name} and the second parameter is its details

  return (
    <div className="App">
        <h1>Firebase FireStore</h1>
        <button onClick={writeData}>Write Data in Firestore</button>
    </div>
  );
}

export default App;
