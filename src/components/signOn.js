import {SIGNUP, SIGNIN, RESET_PASSWORD } from './quarries'
import {useState, useEffect} from 'react'
import { Formik} from 'formik';
import { useMutation } from '@apollo/client';
import '../styles/signon.css'


export default function SignOn ({setToken}){
    
    const [formToShow, setFormToShow] = useState('signIn')
    const [apolloError, setApolloError] = useState('')
    const [signIn, {data: signInData, loading: signInLoading, error: signInError }] = useMutation(SIGNIN)
    const [signUp, {data: signUpData, loading: signUpLoading, error: signUpError}] = useMutation(SIGNUP)
    const [resetPassword, {data: resetPasswordData, loading: resetPasswordLoading, error: resetPasswordError}] = useMutation(RESET_PASSWORD)

    const onSubmitSignin = (values,{ setSubmitting }) => {
       signIn({variables:{username: values.username, password: values.password}})
    }

    const onSubmitSignUp = (values) => {
        signUp({variables:{username: values.username, name:values.fullName, email: values.email, password: values.password }})
    }

    const onSubmitReset = (values) => {
        resetPassword({variables: {email: values.email}})
    }

    useEffect(() =>{
        if(signInError){
            setApolloError(`Submission error! ${signInError.message}`)
        }

        if(signUpError){
            setApolloError(`Submission error! ${signUpError.message}`)
        }

        if(resetPasswordError){
            setApolloError(`Submission error! ${resetPasswordError.message}`)
        }
    },[signInError, signUpError, resetPasswordError])

    useEffect(()=>{
        if(signInData){
            setToken(signInData.signIn.value)
        }

        if(signUpData){
            setToken(signUpData.signUp.value)
        }

        if(resetPasswordData){
            console.log(resetPasswordData)
        }
    }, [signInData, signUpData, resetPasswordData])


    return(
        <div className='signOn'>
            <h1><span>NAIJA</span>ODIN</h1>
            <div className='formControl'>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('signIn')
                    }} className={formToShow === 'signIn'? 'setSignin activeForm': 'setSignin'}>Sign in</button>
                <button onClick={() => {
                    setApolloError('')
                    setFormToShow('signUp')}} className={formToShow ==='signUp'? 'activeForm': ''}>Sign Up</button>
            </div>
            <div className='apolloError'>{apolloError}</div>
           {formToShow === 'signIn' && <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                errors.username = 'Required*';
                } else if (
                !/^[A-Za-z0-9_]{1,15}$/i.test(values.username)
                ) {
                errors.username = 'Invalid username pattern';
                }
                if (!values.password) {
                    errors.password = 'Required*';
                    } else if (
                    !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i.test(values.password)
                    ) {
                    errors.password = 'Password must include(uppercase, lowercase, number/special char and min 8 char)';
                    }
                return errors;
            }}
            onSubmit={onSubmitSignin}
            >
                    {   (  {   values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            }
                        ) => (
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit()
                                }}>
                                    <div className="inputContainer">
                                        <input
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            placeholder=' '
                                        />
                                        <label htmlFor="usernmame">Username</label>
                                    </div>
                                    <div className='errorMessage'>{errors.username && touched.username && errors.username}</div>
                                    <div className="inputContainer">
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder=' '
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className='errorMessage'>{errors.password && touched.password && errors.password}</div>
                                    <div className="formFoot">
                                        <button type="submit" disabled={signInLoading} className='submitButton'>
                                            Submit
                                        </button>
                                    {signInLoading && <div className="loading"></div>}
                                    </div>
                                </form>
                             )}
            </Formik>}
           {formToShow === 'signUp' && <Formik
            initialValues={{ username: '', password: '', fullName: '', email: '', confirmPassword: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required*';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }

                if(!values.fullName){
                    errors.fullName = 'Required*'
                }
                if (!values.username) {
                errors.username = 'Required*';
                } else if (
                !/^[A-Za-z0-9_]{1,15}$/i.test(values.username)
                ) {
                errors.username = 'Invalid username pattern';
                }

                if (!values.password) {
                    errors.password = 'Required*';
                    } else if (
                    !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i.test(values.password)
                    ) {
                    errors.password = 'Password must include(uppercase, lowercase, number/special char and min 8 char)';
                    }

                if(!values.confirmPassword){
                    errors.confirmPassword = 'Required*'
                }
                else if(values.confirmPassword !== values.password){
                    errors.confirmPassword = "Passwords don't match"
                }
                return errors;
            }}
            onSubmit={onSubmitSignUp}
            >
                 {({   values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}>
                        <div className="inputContainer">
                            <input
                                type="text"
                                name='fullName'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}
                                placeholder=' ' />
                            <label htmlFor="fullName">Full name</label>
                        </div>
                         <div className='errorMessage'>{errors.fullName && touched.fullName && errors.fullName}</div>
                         <div className="inputContainer">
                             <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder=' '
                            />
                             <label htmlFor="email">Email</label>
                         </div>
                        <div className='errorMessage'>{errors.email && touched.email && errors.email}</div>
                        <div className="inputContainer">
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                placeholder=' '
                            />
                             <label htmlFor="usernmame">Username</label>
                        </div>
                         <div className='errorMessage'>{errors.username && touched.username && errors.username}</div>
                        <div className="inputContainer">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder=' '
                            />
                             <label htmlFor="password">Password</label>
                        </div>
                         <div className='errorMessage'>{errors.password && touched.password && errors.password}</div>
                         <div className="inputContainer">
                             <input
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                placeholder=' '
                            />
                              <label htmlFor="comfirmPassword">Confirm password</label>
                         </div>
                        <div className='errorMessage'>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</div>
                        <div className="formFoot">
                            <button type="submit" disabled={signUpLoading} className='submitButton'>
                                Submit
                            </button>
                            {signUpLoading && <div className="loading"></div>}
                        </div>
                    </form>
                   )}
            </Formik>}

            {formToShow === 'forgot' && <Formik
            initialValues={{ email: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required*';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                return errors;
            }}
            onSubmit={onSubmitReset}
            >
                    {   (  {   values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            }
                        ) => (
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit()
                                }}>
                                    <div className="inputContainer">
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder=' '
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className='errorMessage'>{errors.username && touched.username && errors.username}</div>
                                    
                                    <div className="formFoot">
                                        <button type="submit" disabled={signInLoading} className='submitButton'>
                                            Submit
                                        </button>
                                    {resetPasswordLoading && <div className="loading"></div>}
                                    </div>
                                </form>
                             )}
            </Formik>}
           {formToShow === 'signIn' && <div className='forgot' onClick={() => setFormToShow('forgot')}>Forgot password?</div>}
        </div>
    )
}