var fs = require('fs');
var obj;
const compabilityList = [];
const bestMatchIndex = 0;

function calculateDifferance(a, b) {
    let toatlDifferance = 0;
    for(let i = 0; i < a.length; i++){
        toatlDifferance += Math.abs(a[i] - b[i])
    }

    return toatlDifferance;
};

function getIndexOflowestvalue(list) {
    let lowestIndex  = 0;
    for(let i = 0 ; i < list.length; i++){
        if(list[i] < list[lowestIndex]){
            lowestIndex = i;
        }
    }

    return lowestIndex;
}

function getMostCompatiableFriend(scores) {
  return new Promise((reslove, reject)=> {
    fs.readFile('./data/friends.json', 'utf8', function (err, data) {
        if (err)  throw err;
        obj = JSON.parse(data);
          for(let i =0; i < obj.length; i++){
              compabilityList.push(calculateDifferance(scores, obj[i].scores));
          }
          const bestMatchIndex = getIndexOflowestvalue(compabilityList);

          reslove(obj[bestMatchIndex]);
      })
  })
}




// class Friend {
//     constructor(name, photo, scores){
//         this.name = name ;
//         this.photo = photo;
//         this.scores = scores ;

//     }

//     calculateDifferance(a, b) {
//         let toatlDifferance = 0;
//         for(let i = 0; i < a.length; i++){
//             toatlDifferance += Math.abs(a[i] - b[i])
//         }

//         return toatlDifferance;
//     };

//     getIndexOflowestvalue(list){
//         let lowestIndex  = 0;
//         for(let i = 0 ; i < list.length; i++){
//             if(list[i] < list[lowestindex]){
//                 lowestIndex = i;
//             }
//         }

//         return lowestIndex;
//     }

//     getCompabilityList(){
//         const compabilityList = [];
//         fs.readFile('./data/friends.json', 'utf8', function (err, data) {
//             if (err) throw err;
//             obj = JSON.parse(data);
//               for(let i =0; i < obj.length; i++){
//                   compabilityList.push(calculateDifferance(scoresA, obj[i].scores));
//               }
//               const bestMatchIndex = getIndexOflowestvalue(compabilityList);
//               console.log("best Match is", obj[bestMatchIndex] )
//               return compabilityList;
//           });  
//     }

//      findCloseestFriend(){
//         const list = getCompabilityList();
//         list.then( function(){
            
//         }  
//         )
       
//     }

// }

module.exports = getMostCompatiableFriend;
// module.exports = Friend;