module.exports = function transform(arr) {
if (!Array.isArray(arr)) throw 'Not implemented';
let newArr = [];
for (i=0; i<arr.length; i++) {
    if(arr[i]=="--discard-next"){
        i++;
        continue;
        }
    else if(arr[i]=="--discard-prev"){
        newArr.pop();
        continue;
        }
    else if (arr[i]=='--double-next') {
        i==arr.length-1 ? i++ : newArr.push(arr[i+1]);
        continue;
    }
    else if (arr[i]=='--double-prev') {
        if(i==0);
        else newArr.push(arr[i-1]);
        continue;
    }
    newArr.push(arr[i]);
}
return newArr;
};
