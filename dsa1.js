var stack;
const getIndices= (val, arr) => {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}
const mainFunc= (...arrs)=> {
    result=[];
    maxProfit=0;
    arrs.forEach((arr)=> {
        if (arr.length==0){
            result.push([0, 0]); 
        }
        else if (arr.length==1){
            if (10-arr[0]>=0) {
                result.push([10-arr[0], [0,1]]);
                maxProfit+=10-arr[0];
            }
            else {
                result.push([0, 0]);
            }
        }
        else {
            stack=[10-arr[0]];
            (arr.slice(1)).forEach((i, index) => {
                stack.push(temp=(10-i)+stack[index]);
            });
            result.push([Math.max(...stack), getIndices(Math.max(...stack), stack)]);
            maxProfit+=Math.max(...stack);
            final.push(...getIndices(Math.max(...stack)));

        }
    });
    // result.forEach((val)=>{
    //     val[2].forEach(val3)=
    // });
    console.log(result);
    console.log(maxProfit);
    // 
}/*
1
10 5 13 8 7 11 9 2 10 11 13
2
7 8 1 9 15 3 6 10
4 7 2 14 10*/
mainFunc([1, 2, 3, 10, 15, 5], [15, 5, 15, 5, 15, 5]);
mainFunc([5, 13, 8, 7, 11, 9, 2, 10, 11, 13]);
mainFunc([8, 1, 9, 15, 3, 6, 10], [7, 2, 14, 10]);