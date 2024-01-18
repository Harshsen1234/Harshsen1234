// // // 
// // let name = prompt("INDIAN SHAMI")
// // console.log(name)
// var arr1=[1,2,3,4,5,"String","Hello",true,false]
// function getString(arr1) {
//     let res=[]
//     for(let item of arr1){
//         if (typeof item=="number") {
//             res.push(item)
//         }


//     }
//     return res
// }
// console.log(getString(arr1))
// console.log(getnumber(arr1))

var arr1=[1,2,3,4,5,"String","Hello",true,false]
function getString(item){
    return typeof item ==="string"
}
function getBool(item){
    return typeof item==="boolean"
}
function getnumber(item){
    return typeof item==="number"
}
function get(arr1,fn)
{
    let res=[]
    for(let item of arr1){
        if (fn(item)) {
            res.push(item)
        }
    }
    return res
}
console.log(getString(arr1))
console.log(getnumber(arr1))