var fs = require('fs');
var obj;

scoresA =   [5,
1,
3,
4,
5,
1,
2,
5,
2,
1]


function calculateDifferance(a, b) {
    let toatlDifferance = 0;
    for(let i = 0; i < a.length; i++){
        toatlDifferance += Math.abs(a[i] - b[i])
    }

    return toatlDifferance;
};






class Friend {
    constructor(name, photo, scores){
        this.name = name ;
        this.photo = photo;
        this.scores = scores ;

    }

    calculateDifferance(a, b) {
        let toatlDifferance = 0;
        for(let i = 0; i < a.length; i++){
            toatlDifferance += Math.abs(a[i] - b[i])
        }

        return toatlDifferance;
    };

    getCompabilityList(){
        const compabilityList = [];
        fs.readFile('./data/friends.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
              for(let i =0; i < obj.length; i++){
                  compabilityList.push(calculateDifferance(scoresA, obj[i].scores));
              }
              console.log("the log version" , compabilityList);

              for(let i = 0; i < compabilityList.length; i ++){
                console.log(obj[i].name)
            }
              return compabilityList;
          });  
    }

     findCloseestFriend(){
        const list = getCompabilityList();
        list.then( function(){
            
        }  
        )
       
    }

}
 const friendExample = new Friend('abe' , 'photo' , scoresA);

 friendExample.getCompabilityList();




module.exports = Friend;