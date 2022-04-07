function avc(str){ 

    str = str.split(' ')
    return Math.min(...str) && Math.max(...str)

}
 
console.log(avc('1 4 5 6 7'))