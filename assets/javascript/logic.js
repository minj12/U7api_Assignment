
// FIREBASE SERVER Configuration
var config = {
    apiKey: "AIzaSyB2EXbe2pHRFvj6FV7mUZ03yanjQwyUUUc",
    authDomain: "train-times-data.firebaseapp.com",
    databaseURL: "https://train-times-data.firebaseio.com",
    projectId: "train-times-data",
    storageBucket: "train-times-data.appspot.com",
    messagingSenderId: "736432072110"
  };

  firebase.intializeApp(config);

  var database = database();

  var trainName ="";
  var dstination="";
  var startTime ="";
  var frequency = 0;