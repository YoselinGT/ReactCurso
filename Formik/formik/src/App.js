import {Formik, Form, Field, Error, ErrorMessage} from 'formik'
import TextInput from './Components/TextInput'
import Checkbox from "./Components/Checkbox";
import Radio from "./Components/Radio";
import Select from "./Components/Select";

const validate = (values) => {
    const errors = {}

    if(!values.name) {
        errors.name = 'Requerido'
    } else if(values.name.length < 5){
        errors.name = 'El nombre es muy corto'
    }

    if(!values.lastname) {
        errors.lastname = 'Requerido'
    } else if(values.lastname.length < 5){
        errors.lastname = 'El apellido es muy corto'
    }

    if(!values.email) {
        errors.email = 'Requerido'
    } else if(values.email.length < 5){
        errors.email = 'El correo es muy corto'
    }

    if(!values.chancho){
        errors.chancho = 'Requerido'
    }

    if(!values.radio){
        errors.radio = 'Requerido'
    }

    if(!values.accept){
        errors.accept = 'Requerido'
    }

    return errors;
}

const App = () => {


  return (
      <Formik
          initialValues={{
          name: '',
          lastname: '',
          email: '',
          chancho: '',
          radio: false,
          accept: false
      }}
            onSubmit={values => console.log(values)}
          validate={validate}
      >

          <Form>
              <TextInput name='name' label='Nombre' />
              <TextInput name='lastname' label='Apellido' />
              <TextInput name='email' label='Correo' />
              <Select label='Tipo de chancho' name='chancho'>
                  <option value=''>Seleccione chancho</option>
                  <option value='felipe'>Felipe</option>
                  <option value='chanchitofeliz'>Chanchito feliz</option>
                  <option value='chanchitotriste'>Chanchito triste</option>
              </Select>
              <Checkbox name='accept'>
                  Aceptar terminos y condiciones
              </Checkbox>
              <Radio name='radio' value='chanchito1' label='Chanchito 1'></Radio>
              <Radio name='radio' value='chanchito2' label='Chanchito 2'></Radio>
              <Radio name='radio' value='chanchito3' label='Chanchito 3'></Radio>
              <ErrorMessage name='radio'></ErrorMessage>
              <button type='submit'>Enviar</button>
          </Form>

      </Formik>
  );
}

/*
    {formik =>
        <form onSubmit={formik.handleSubmit}>
            <label>Nombre</label>
            <input type='text' {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <br />
            <label>Apellido</label>
            <input type='text' {...formik.getFieldProps('lastname')}/>
            {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
            <br />
            <label>Correo</label>
            <input  type='email' {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <br />
            <button type='submit'>Enviar</button>
        </form>
    }
* */

/*
    <Formik
          initialValues={{
          name: '',
          lastname: '',
          email: ''
      }}
            onSubmit={values => console.log(values)}
          validate={validate}
      >

          <Form>
              <label>Nombre</label>
              <Field name='name' type='text' className='input'/>
              <Field name='select' type='text' className='input' as='select'>
                  <option value='chanchitoFeliz'>Chanchito Feliz</option>
                  <option value='chanchitoFeliz'>Chanchito Feliz</option>
              </Field>
              <ErrorMessage name='name' />
              <br />
              <label>Apellido</label>
              <Field name='lastname' type='text'></Field>
              <ErrorMessage name='lastname' />
              <br />
              <label>Correo</label>
              <Field name='email' type='email'></Field>
              <ErrorMessage name='email' />
              <br />
              <button type='submit'>Enviar</button>
          </Form>

      </Formik>
* */
export default App;
