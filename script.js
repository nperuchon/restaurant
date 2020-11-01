/* globals firebase */


//Firebase database connexion
//--------------------------

//Firebase parameters
  var Config = {
    apiKey: "AIzaSyBzvXYy1wwiT12fBKdHGvCSzjmOXJtuJ-Y",
    authDomain: "my-restaurant-database.firebaseapp.com",
    databaseURL: "https://my-restaurant-database.firebaseio.com",
    projectId: "my-restaurant-database",
    storageBucket: "my-restaurant-database.appspot.com",
    messagingSenderId: "1026559743770",
    appId: "1:1026559743770:web:6d5b353608a39d5abb3ea3",
    measurementId: "G-LTZS5PY7JT"
  };
// Initialize Firebase
firebase.initializeApp(Config);
firebase.analytics();

function saveRestaurant() {
//first we get the data from the form field using javascript
  var Rname = document.getElementById("name").value;
  var Raddress = document.getElementById("address").value;
  var Rcity = document.getElementById("city").value;
  var Rcategory = document.getElementById("category").value;
  var Rprice = document.getElementById("price").value;
  var Rgrade = document.getElementById("grade").value;
  

  //Create a Firebase connexion
  var db = firebase.database();
  
  // Save data to the database
  var membreRef = db.ref(Rname);
  membreRef.set({
    address: Raddress,
    city: Rcity,
    category: Rcategory,
    price: Rprice,
    grade: Rgrade
   });
  
  //Use jquery to inform user data has been saved
  document.getElementById("saved").innerHTML = 'Thanks for your review, the data has been stored in the Firebase database for '+Rname+' in category '+Rcategory;
  

}

  

