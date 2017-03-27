var emailLog = require ('./data.json');

var bigArray = [];
var grouping = {};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function addArrayToAnObject (arr1,arr2){
  for (var m = 0; m < arr1.length; m++){
    grouping.email = arr1[m];
    grouping.numbers = arr2[m];
    bigArray.push(grouping);
    grouping= {};
  }

  return bigArray;
}


function uniqueArray(){

  var emails = emailLog.emails;
  var uniqueArray = [];

  for ( var i = 0; i < emails.length; i++){
    uniqueArray.push(emails[i].email);
  }

  var uniqueEmails = uniqueArray.filter(onlyUnique);
  uniqueArray = [];
  var count = 0;

  for ( var j = 0; j < uniqueEmails.length; j++){
    for (var k = 0; k < emails.length; k++){
      if(emails[j].email === emails[k].email){
        count++;
      }
    }
    uniqueArray.push(count);
    count = 0;
  }

  addArrayToAnObject (uniqueEmails, uniqueArray);

  return bigArray;

}

console.log(uniqueArray());