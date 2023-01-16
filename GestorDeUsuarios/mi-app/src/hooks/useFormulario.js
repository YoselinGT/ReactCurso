import {useState} from "react";

const useFormulario = (inical) => {

    const [formulario,setFormulario] = useState(inical)

    const handleChange = ({target}) => {

        setFormulario({
            ...formulario,
            [target.name]: target.value
        })
    }

    const reset = () => {
      setFormulario(inical)
    }

    return [formulario,handleChange,reset]
}

export default useFormulario