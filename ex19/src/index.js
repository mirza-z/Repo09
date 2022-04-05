// Only change code below this line
function myDoWhile(){
    var myNumbers = '';
    var i = 0;
    do{
        myNumbers += i;
        i++;
        if(i!=10){
            myNumbers += ', ';
        }
    } while(i<10);
    return myNumbers;
}
myDoWhile();
// Only change code above this line
module.exports = myDoWhile;