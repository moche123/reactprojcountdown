import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';


const Login = () => {
    
  const [ message , setMessage ] = useState('');
  const [ changeForm , setChangeForm ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setChangeForm(false);
    if(message === 'WELCOME...'){
        
        setTimeout(
            ()=>{
                return navigate('/');
            }
            ,1000
        )
    }
  }, [message,navigate]);


  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Email invalid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }),
    onSubmit: (  ) => {
        //const { email, password  } = values; //! SIN DESTRUCTURAR =>  email = values.email ; password = values.password
        try{
            localStorage.setItem('token','asdadasdds')
            setMessage('WELCOME...');

            
        }catch(error){
            setMessage('ERROR');
        }
    }
  })

  return (
    <div className="d-flex flex-column gap-2 align-items-center login-content">

        {message}
        <h1>Login</h1>
        <form onSubmit={ formik.handleSubmit }>
            <div className='d-block'>
                <label className='d-block' htmlFor="email" />
                <input 
                    type='email' 
                    id='email'
                    placeholder='User email'  
                    className="form-control"
                    onInput={ ()=>{
                        setChangeForm(true)
                    } }
                    onChange = { formik.handleChange }  
                    onBlur={ formik.handleBlur }
                    value={ formik.values.email }
                />
                {
                    formik.touched.email && formik.errors.email && 
                    <div className='text-danger'>
                        <p>{formik.errors.email}</p>
                    </div>
                }
            </div>


            <div className='d-block'>
                <label className='d-block' htmlFor="password" />
                <input 
                    type='password' 
                    id='password'
                    placeholder='User password'  
                    className="form-control"
                    onInput={ ()=>{
                        setChangeForm(true)
                    } }
                    onChange = { formik.handleChange }  
                    onBlur={ formik.handleBlur }
                    value={ formik.values.password }
                />
                {
                    formik.touched.password && formik.errors.password &&
                    <div className='text-danger'>
                        <p>{formik.errors.password}</p>
                    </div>
                }
            </div>
            <input type="submit" value="Init sesion" 
                    className={ (formik.errors.email || formik.errors.password || !changeForm )
                                    ? 'btn btn-secondary disabled':'btn btn-primary' } />
        </form>

    </div>


  )
}

export {Login}