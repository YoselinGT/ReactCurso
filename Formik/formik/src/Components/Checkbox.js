import {useField} from "formik";

const Checkbox = ({children,...props}) => {
    const [field,meta] = useField({...props,type:'checkbox'})

    return (
        <div>
            <label>
            <input type='checkbox' {...field} {...props}/>
                {children}
            {meta.touched && meta.error ?
                <div>{meta.erro}</div> : null}
            </label>
        </div>
    )
}
export default Checkbox