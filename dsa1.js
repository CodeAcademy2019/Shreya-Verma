var stack;
const getIndices= (val, arr) => {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}

const inp=(str)=> {
    res=str.split('\n');
    ret=[];
    for (i=0;i<res.length-1;++i) {
        j=0;
        temp=[];
        temp2=Number(res[i]);
        while(j<temp2){
            ++i;
            ++j;
            temp.push((res[i].split(' ')).slice(1));
            //console.log('temp:',temp);
        }
        ret=ret.concat([temp]);
        
    }
    //console.log(ret);
    return ret;
}
const mainFunc= (str)=> {
    arrsbig=inp(str);
    retVal='';
    k=0;
    arrsbig.forEach((arrs)=> {
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
        //console.log([maxProfit, res.slice(0,10)]);
        retVal+=((k+1).toString()+'\n'+maxProfit.toString()+'\n'+(res.slice(0,10)).join(' ')+'\n');
        ++k;
    });
    return retVal;
}
module.exports=mainFunc;

