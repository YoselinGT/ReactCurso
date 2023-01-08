const chanchosFelices = ['chancho 1','chancho 2','cancho 3'];
//export const chanchosTristes = ['triste 1','triste 2']; 
//export const otrosChanchos = []; 
const chanchosTristes = ['triste 1','triste 2']; 
const otrosChanchos = []; 

/*module.exports = { 
    chanchosFelices,
    chanchosTristes
}*/

const fn1 = () => {
    console.log("Soy la funcion 1")
} 

const fn2 = () => {
    console.log("Soy la funcion 2");
}

export {chanchosTristes,otrosChanchos,fn1,fn2}
export default chanchosFelices