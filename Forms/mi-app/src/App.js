import {useState} from "react";

const App = () => {

    const [value,setValue] = useState({normal:'por defecto',texto:'',select:'',check:false,estado:'feliz'})
    const handleChange = ({target}) => {
        /*setValue({
            ...value,[e.target.name]: e.target.value
        })*/


        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        }))
    }
    console.log(value)
    return (
       <div>
           {value.length < 5 ? <span>Longitud minima de 5</span> : null}
           <input name='normal' type='text' value={value.normal} onChange={handleChange}/>
           <textarea name='texto' value={value.texto} onChange={handleChange} />
           <select value={value.select} name='select' onChange={handleChange}>
               <option value=''>-- Selecciones --</option>
               <option value='Chancho feliz'>Chancho feliz</option>
               <option value='Chanchito feliz'>Chanchito feliz</option>
               <option value='Chanchito troste'>Chanchito troste</option>
               <option value='Felipe'>Felipe</option>
           </select>
           <input type='checkbox' name='check' onChange={handleChange} checked={value.check}/>
           <div >
                <label>Cahcnho</label>
               <input type='radio' value='feliz' name='estado' onChange={handleChange} checked={value.estado === 'feliz'}/> Feliz
               <input type='radio' value='troste' name='estado' onChange={handleChange} checked={value.estado === 'troste'}/> Troste
               <input type='radio' value='felipe' name='estado' onChange={handleChange} checked={value.estado === 'felipe'}/> Felipe
           </div>
       </div>
    );
}

export default App