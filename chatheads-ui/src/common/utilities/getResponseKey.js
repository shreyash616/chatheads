export const getResponseKey = (arr, val) => {
    let retVal = val
    for(let i = 0;i<arr.length;i++){
        retVal = retVal instanceof Object && retVal[arr[i]]
        if(retVal instanceof Object){
            continue
        }
        else{            
            break
        }
    }
    
    return retVal
}