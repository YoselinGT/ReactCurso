/** FILTER **/
const arr = [-1,-2,-3,-4,-5]

const r = arr.filter((el,i) => {
            //console.log(i)
            return el > 2

        }
    );

/** MAP **/    
//console.log(r);

//const mapped = arr.map((el) => el *2)

//const mapped = arr.map((el) => `<h1>${el}</h1>`)
//console.log(mapped)

const users = [
    {id:1,name:"Chanchito 1"},
    {id:2,name:"Chanchito 2"},
    {id:3,name:"Chanchito 3"},
    {id:4,name:"Chanchito 4"}
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)

//console.log(mapped)

/** REDUCE **/   
//Recibe dos parametros uno que es el acumulador y el otro es el elementos que estamos iterando, los 
//otros dos elementos son el indice y el valor que se esta iterando
//const r1 = arr.reduce((acc,el) => acc + el , 0)

//const getMAx = (a,b) => Math.max(a,b);
//const r1 = arr.reduce(getMAx)

/*const r1 = users.reduce((acc,el) => 
    `${acc === '' ? '' : `${acc} ,`} ${el.name}`,''

)*/

//Filtrar y reduce al mismo tiempo 
const r1 = users.reduce ((acc,el) => {
    if(el.id < 2) {
        return acc
    }
    return acc.concat(el)
},[])

console.log(r1)