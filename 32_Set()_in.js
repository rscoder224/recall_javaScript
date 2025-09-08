// Sets are (iterable);
// sets can Store data;
// No-index based access;
// order is not gurenteed;
// unique items only no duplicate allowed;
// Set aur array me sabse bada differnce ye hai ki Set me duplicates allowed nhi hai ;

const numbers = new Set([1,2,3]);

const array2 = ["items","items2","items3"]

console.log(numbers);

// hum chahe to Set ko empty set rakh sakte hai 
// phir baad me usme cheeze add kar sakte hai

const nums = new Set();

nums.add(1);
nums.add(array2);
nums.add(['items',"items2"]);
console.log(nums);

// Set me kuch bhi find krne ke liye hamare pass ek method hai
// has method Set_name.has('value') ye boolean return karega

if(nums.has(1)){
    console.log('yes this is present');
}else{
     console.log('no this is not present'); 
}

for(let num of numbers){
    console.log(num);
}

const num2 = [1,2,3,4,5,4,5,44,6,9,9];

const unique_items = new Set(num2);

console.log(unique_items);










