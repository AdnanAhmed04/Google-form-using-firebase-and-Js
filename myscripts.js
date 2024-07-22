// console.log('hello')
var sname = document.getElementById('name');
var fname = document.getElementById('fname');
var position = document.getElementById('jposition');
var file = document.getElementById('file')
var exp = document.getElementById('exp')

function finish() {

    var genderRadios = document.getElementsByName('gender');
    var selectedGender;

    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selectedGender = genderRadios[i].value;
            break;
        }
    }
    // console.log(sname.value);
    // console.log(fname.value);
    // console.log(position.value);
    // console.log(exp.value, 'Year experience ');
    // console.log(selectedGender, 'Gender');
    // console.log(file.value);
    let arr = [sname.value, fname.value, position.value, exp.value, selectedGender, file.value]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '') {
            console.log('error')
            break
        }
    }


    console.log('hello');
    // firebase laganee hai agayeee
    import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}
