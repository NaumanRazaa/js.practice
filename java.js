 var myName;
        myName="NAUMAN RAZA";
        myName="salman raza";
       
        //the value of console can br changed later
        console.log (myName);
        //the value in const cannot be changed
        const projectName= "JAVASCRIPT";
        console.log(projectName);

        var a=5;
        var b=6;
        a= a+1;
        b= b+1;
        var c= b=a;
        console.log(a);
        console.log(b);
        console.log(c);

        // add,sub,mul,div
        var sum=10+10;
        var sub=20-30;
        var mul=20*10;
        var div=20/10;
        var remainder=10%2;
        console.log(sum);
        console.log(sub);
        console.log(mul);
        console.log(div);
        console.log(remainder);

        var d= 20;
        var e= 60;
        d+=10;
        e-=20;
        console.log(d);
        console.log(e);

         //DOUBLE QUOTED +\N
        var string="my name is \"Nauman-Raza\" and i am a student";
        console.log(string);
        var study= 'i study "computer science"';
        console.log(study);

        var mystr="this is my javascript practice."+"\nand i am interested in web dev.";
        console.log(mystr);
         
        var myname="nauman raza"
        var names="how are you?" +myname+ "fine!";
        console.log(names);

        //to find the first and last letter of the name; INDEX;
        var namelength=0;
        var name="NaumanRaza";
        var firstLetterOfName="";
        var lastLetterOfName="";
        namelength=name.length;
        console.log(namelength);
        firstLetterOfName=name[0];
        lastLetterOfName=name[name.length-1];
        console.log(firstLetterOfName);
        console.log(lastLetterOfName);

        //function
        var clothe="tshirt";
        
        function minus(a) {
            return a-10; 
        }
       
        function wear() {
            var clothe="sweater";
            console.log(clothe);
            return clothe;
        }
        function wordBlanks(word1,word2,word3,word4)
        {
            var result="";
             result+=word1 +word2 +word3 +word4;
            return result;
    
        }
        console.log(wordBlanks("my","name","is","nauman"));
        console.log(wordBlanks("I","am","learning","javascript"));
        console.log(wear());
        console.log(minus(20));



        //Arrays
        var myarray=["ali","fahad","faizan"];
        myarray[1]="raza";    
        var mydata=myarray[0];
        var mybase=myarray[1];
        console.log(mydata);
        console.log(mybase);
        console.log(myarray);

      //nested array 
      var array=[[1,2,3],[4,5,6],[7,8,9]];
      array.push([10,11,12]);
      array.unshift(0);// insert and pop value form the start of the array
      var removeFromArray=array.pop();
      console.log(array);
      var data=array[1][2]; //first for the array and second the element of array
      console.log(data);

      //function
      var number=0;
      function change(num) {
        return (num*10)/3;
      }
      number=change(5);
      console.log(number);

      function queue(arr, num) {
    arr.push(num);
    return arr;
}

var testArray = [10, 20, 30];
console.log("before");

console.log(  queue(testArray, 5));

function tovote(age) {
    if (age >= 18) {
        return "Person is eligible";
    } else {
        return "Not eligible";
    }
}
console.log(tovote(20)); // Person is eligible
console.log(tovote(16)); // Not eligible

    function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    } else if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "Fail";
    }
}
var enter = Number(prompt("Enter the marks:"));
console.log(calculateGrade(enter));

//switch statment

function weekdays(val) {
    var answer="";
    switch(val){
    case "a":
            answer="monday";
            break;
            case "b":
                answer="tuesday"
                break;
                case "c":
                    answer="wednesday";
                break;
                case "d":
                    answer="thursday";
                    break;
                default:
    answer = "invalid";
    }
    return answer;
    
}
console.log(weekdays("a"));

function chainToSwitch(val) {
    var answers="";
    switch (val) {
        case "bob":
            answers="marley";
            break;
            case 42:
                answers="the answer";
                break;
                case 1:
                    answers="there is no #1";
                    break;
                    case 99:
                        answers="missed me by this much";
                        break;
                        case 7:
                            answers="ate nine";
                            break;
    
        default:
            answers = "invalid";

    }
    return answers;
    
}
console.log(chainToSwitch(1));


var count = 0;

function countingCards(cards) {
    switch (cards) {
        case 1:
        case 2:
        case 3:
        case 4:
            count++;
            break;
        case 5:
        case 6:
        case 7:
            count--;
            break;
        default:
            return "Enter a number from 1 to 7";
    }

    var holdbet = "hold";

    if (count > 0) {
        holdbet = "bet";
    }

    return count + " " + holdbet;
}

var enter = Number(prompt("Enter the card Number:"));
console.log(countingCards(enter));

//objects
var name={
    "name":"nauman",
    "age":"20",
    "study":"cs"
    
};
name.name="salman";
name.lastname="raza";
delete name.name;
var test=name.name;
var tests=name["age"];
console.log(test);   
console.log(tests); 

function objects(val) {
    var result="";
    var lookup={
        "alpha":"adams",
        "bravo":"boston",
        "charlie":"chicago",
        "echo":"easy"
    };
    result=lookup[val];
    return result;
    
}
function checkObj(checkProp) {
    if(lookup.hasOwnProperty(checkProp)){
        return lookup[checkProp];
    }
    else{
        return "not found";
    }
    }
console.log(objects("charlie"));

var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveBoxContent= myStorage.car.inside["glove box"];
console.log(gloveBoxContent);

//loops 
var array=[];
var i=0;
while (i<5){
    array.push(i);
    i++;
}
console.log(array);

var ourarray=[];
for (var i=0; i<5; i++){
     ourarray.push(i);
}
console.log(ourarray);

//odd numbers
var ourarr=[];
for (var i=1; i<=10; i+=2){
     ourarr.push(i);
     i++;
}
console.log(ourarr);

//backword numbers 
var  myarr=[];
for (var i=10; i>=1; i-=2){
     myarr.push(i);
}
console.log(myarr);

var arrays=[10,20,30,40];
var total=0;
for (var i=0;i<arrays.length;i++)
{
    total+=arrays[i];
}
console.log(total);


function multiplyAll(arr) {
    var product=1;
    for (var i=0;i<arr.length;i++){
        for (var j=0; j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
    
}
var product=multiplyAll([[1,2],[3,4],[5,6]]);
console.log(product);

//do while loop
var myarray=[];
var i=10;
do{
    myarray.push(i);
    i++;
}while(i<5);
    
    console.log(i,myarray);

    //randam decimal number 
    function randomnumber() {
        return Math.random();
        
    }
    console.log(randomnumber());

    function convertToInteger(str) {
        return parseInt(str);
        
    }
console.log(convertToInteger(58));

function binary(str) {
    return parseInt(str,2); // base 2 tells base 2 means binary 
    
}
console.log(binary("10011"));

//ternary operator 

function check(num) {
    return num>0 ?"positive" : num<0 ?"negative" : "zero";
    
}
console.log(check(5));

function checkEqual(a,b) {
    return a===b? true:false;
    
}
console.log(checkEqual(10,10));

//var and let keywords

function checkScope() {
    
    if (true){
        let i="block scope";
        console.log("block is ",i);
    }
    console.log("function is ",i);        //let i = "block scope";

    return i;
    
}
console.log(checkScope());

function my(val) {
    let sentence = val + " is amazing";

    for (var i = 0; i < val.length; i++) {
        console.log(sentence);
    }

    return 0;
}
console.log(my("salman"));

//arrow functiona and map function

var mycontact=(arr1,arr2)=> arr1.concat(arr2);   // varaiable,parameters, return 
console.log(mycontact([1,2,3],[1,4,5]));

var arr = ["ali", "faizan", "haider"];

const namess = arr.map(name => name.toUpperCase());

console.log(namess);

