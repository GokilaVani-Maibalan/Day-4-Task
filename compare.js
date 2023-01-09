let obj1 = {
    "id" : "Person1", 
    "age" : "5"
}
let obj2 ={
    "age" : "5",
    "name" : "Person1"
};
var keys1=Object.keys(obj1);
var keys2=Object.keys(obj2);

// 1st approach using if condition:

if(keys1.sort().toString()==keys2.sort().toString()){
    console.log(true);
}else{
    console.log(false);
}

// 2nd approach using for:

keys1 = keys1.sort();
keys2 = keys2.sort();

let result = false;
if(keys1.length==keys2.length){
    for(let i=0;i<keys1.length;i++){
        if(keys1[i]==keys2[i]){
            result = true;
        } else {
            result = false;
            break;
        }
    }
}

console.log(result);



