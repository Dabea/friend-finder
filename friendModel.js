
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