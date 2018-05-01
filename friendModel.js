var fs = require('fs');
var obj;
const compabilityList = [];
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
fs.readFile('./data/friends.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
    
    for(let i =0; i < obj.length; i++){
        compabilityList.push(calculateDifferance(scoresA, obj[i].scores));
    }

    console.log(compabilityList);
});

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

}

module.exports = Friend;