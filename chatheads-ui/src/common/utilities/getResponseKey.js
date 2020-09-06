export const getResponseKey = (arr, val) => {
    let retVal
    for(let i = 0;i<arr.length;i++){
        retVal = val[arr[i]]
        if(retVal){
            continue
        }
        else{
            break
        }
    }
    return retVal
}