const items2 = ['pencil', 'book', 'pencil']

function find_duplicate_in_array(array){
const count = {}
const result =[]

array.forEach(item =>{
    if(count[item]) {
        count[item] +=1
        return
    }
    count[item] = 1
})

for (let prop in count){
    if (count[prop] >=2){
        result.push(prop)
    }
}

console.log(count)
return result;

}

find_duplicate_in_array(items2)
// {pencil: 2, book: 1}
//[pencil]