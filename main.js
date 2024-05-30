//assignment 14 make a guest list of at least 3 persons and invite each of them them for dinner 
var guestlist = ['hina', 'tooba', 'fatima', 'kainat', 'ali', 'hadi'];
//loop method
/*for(let i = 0; i<guestlist.length; i++){
    console.log(`hello ${guestlist[i]} you are invited for a dinner at our place tonight`)
}
//foreach method
guestlist.forEach(invitation => {
    console.log(`hello ${invitation} you are invited for a dinner at our place tonight` )
    
});
//ASSIGNMENT 15
//THE GUEST WHO CAN`T MAKE IT BY SPLICE MTHOD
let unabletoattend : string | undefined = guestlist.splice(3,1)[0]
console.log(`${unabletoattend} can not make it for a diiner at our place tonight`)

//now adding a new name in list by push method
guestlist.push('lubna')
console.log(guestlist)

//now sending invitations to those who are in final guest list to come for dinner
guestlist.forEach(invitation => {
    console.log(`${invitation} you are invited for a dinner at our place tonight`)
    
});
//assignment 16
//now you find a bigger table inform your guest that there is a bigger table
guestlist.forEach(goodnews=> {
    console.log(`hurray good news ${goodnews} we found a bigger dinner table`)
    
});
// now add a new guest in the beging of array by .unshift method
guestlist.unshift("shumaila" , `zehak`)
console.log(guestlist)

//now to add name at middle of array by math.forth method for adding in middle you use .splice method also
guestlist.splice(Math.floor(guestlist.length/2),0, `asgher`)
console.log(guestlist)
//now add a new guest at the end of array by .push method
guestlist.push(`tehmina`)
console.log(guestlist)
//now invite each of them for a dinner
guestlist.forEach(newinvitation => {
    console.log(`${newinvitation} you are cordiallay invited for tonight dinner at our place see you tonight`)
}*/
//ASSIGNMENT 17
//print a message that you can invite only two people
console.log("unfortunately dinner table won't arrive so we can invite only two people for dinner");
//remove guest from pop method until 2 remain in list letting them know one by one that ou are not invited 
while (guestlist.length > 2) {
    var removedguestlist = (guestlist.pop());
    if (removedguestlist !== undefined) {
        console.log("sorry ".concat(removedguestlist, " we can't invite you for a dinner"));
    }
}
//tell the remaining 2 guest that you are still invted for dinner 
guestlist.forEach(function (invitation) {
    console.log("dear ".concat(invitation, " you are still invited for dinner"));
});
//removing rest of 2 guest from list
guestlist.splice(0, guestlist.length);
console.log(guestlist);
//print empty array 
console.log("updated guest list", guestlist);
