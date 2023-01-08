
const rest = (a,...argumentos) => {
    console.log(a)
    console.log(argumentos)
}

rest(1,2,3,4,5,6)

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

//Object desructuring 

//const {a,b,...restObj}=obj;

//console.log(a,b,restObj)

//Array destructuring

const arr = [1,2,3,4,5]
const [a,b,...r] = arr;

console.log(a,b,r)

const useState = () => ['valor', () => {}]


const [valor,setValor] = useState()
console.log(valor,setValor);