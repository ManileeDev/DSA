//MaxProfit

const maxProfit = (prices) => {
    if (!prices)
        return 0
    let minPrice = Infinity
    let maxProfit = 0
    for ( let price of prices){
        if(minPrice > price){
            minPrice = price;
        }
        else if(price - minPrice > maxProfit){
            maxProfit = price - minPrice
        }
    }
    return maxProfit
}

const prices = [7, 1, 5, 3, 6, 4]
const result = maxProfit(prices)
console.log(result) 


//Chuncked array
const chunck = (array,size) =>{
 const chuncked = [];
 let index = 0;
 while(index<array.length){
    const chunck = array.slice(index,index+size)
    chuncked.push(chunck);
    index += size
 }
 return chuncked
}

console.log(chunck([7,4,5,6,7,1,5,7,9],3))