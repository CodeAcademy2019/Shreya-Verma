var stack;
const getIndices= (val, arr) => {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}
const returnRes=()=>{

}
const mainFunc= (...arrs)=> {
    resultPos=[];
    resultZero=[];
    maxProfit=0;
    arrs.forEach((arr)=> {
        if (arr.length==1){
            if (10-arr[0]>0) {
                resultPos.push([1]);
                maxProfit+=(10-arr[0]);
            }
            else if (10-arr[0]==0){
                resultZero.push([1]);
            }
        }
        else if (arr.length>1){
            stack=[10-arr[0]];
            (arr.slice(1)).forEach((i, index) => {
                stack.push((10-i)+stack[index]);
            });
            //console.log(stack);
            if (Math.max(...stack)>0) {
                resultPos.push(getIndices(Math.max(...stack), stack));
                maxProfit+=Math.max(...stack);
            }
            else if (Math.max(...stack)==0) {
                resultZero.push(getIndices(Math.max(...stack), stack));
            }
        }
    });
    //console.log('Result Pos:',resultPos,'Result Zero:', resultZero);
    //console.log(maxProfit);
    if (resultPos.length==0) {
        return [0, 0];
    }
    final=resultPos[0];
    //console.log(resultPos, final)
    if (resultPos.length>1) {
        (resultPos.slice(1)).forEach((val)=> {
            temp=final;
            final=[];
            val.forEach((val2)=> {
                temp.forEach((val3)=> {
                    final.push(val2+val3);
                });
            });
        })
    }   
    resultZero.forEach((val)=>{
        temp=final;
        val.forEach((val2)=> {
            temp.forEach((val3)=> {
                final.push(val2+val3);
            });
        });
    });
    unique=new Set(final);
    res=Array.from(unique);
    res.sort((a, b) => a - b);
    console.log([maxProfit, res.slice(0,10)]);
    return [maxProfit, res.slice];
 
}
mainFunc([1, 2, 3, 10, 15, 5], [15, 5, 15, 5, 15, 5]);
mainFunc([5, 13, 8, 7, 11, 9, 2, 10, 11, 13]);
mainFunc([8, 1, 9, 15, 3, 6, 10], [7, 2, 14, 10]);
mainFunc([3, 2, 1, 3, 10, 12, 2], [12, 13, 14, 15, 2, 3], [1, 2, 3])
