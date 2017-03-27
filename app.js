var emailLog = require ('./data.json');

var bigArray = [];
var grouping = {};

// this is a function that finds unique values of an array an return an array with these unique values
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// this is a function that will join two arrays into one big array with each position of this array being an object with two properties. Each property will be the value of the respective value of the single arrays.
function addArrayToAnObject (arr1,arr2){
  for (var m = 0; m < arr1.length; m++){
    grouping.email = arr1[m];
    grouping.numbers = arr2[m];
    bigArray.push(grouping);
    grouping= {};
  }

  return bigArray;
}

// this funciton is the main one. It will will take the JSON file located in a folder and will return an array of obkects with unique emails and number of time an email was sent.

function uniqueArray(){

  var emails = emailLog.emails;
  var uniqueArray = [];

// will create an array of unique emails
  for ( var i = 0; i < emails.length; i++){
    uniqueArray.push(emails[i].email);
  }

  var uniqueEmails = uniqueArray.filter(onlyUnique);
  uniqueArray = [];
  var count = 0;

// will create an array of the numbers of emails. This array will be the same length of uniqueEmails and position will correspond to the emails of the uniqueEmails array.
  for ( var j = 0; j < uniqueEmails.length; j++){
    for (var k = 0; k < emails.length; k++){
      if(emails[j].email === emails[k].email){
        count++;
      }
    }
    uniqueArray.push(count);
    count = 0;
  }

// this funciton will join the two arrays into a big array with each position correpsonding to an object
  addArrayToAnObject (uniqueEmails, uniqueArray);

// return the new big array
  return bigArray;

}

console.log(uniqueArray());