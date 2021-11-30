import React, { useState } from 'react'

import '../../styles/login.css'
import Title from './Title'
import Inputs from './Inputs'


import logo from '../../assets/giphy.gif'


const Login = () => {

    const [passwordError, setPasswordError] = useState(false)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [hasError, setHasError] = useState(false)

    function handleChange(name, value) {
        if (name === 'username') {
            setUser(value)
            setHasError(false)
        } else {
            if (value.length < 6) {
                setPasswordError(true)
                setHasError(false)
            } else {
                setPasswordError(false)
                setPassword(value)
                setHasError(false)
            }
        }
    }

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user==='Marcos' && param.password === '123456') {
                const { user, password } = param
                let ac = { user, password }
                let account = JSON.stringify(ac)
                localStorage.setItem('accont', account)
                setIsLogin(true)
            } else {
                setIsLogin(false)
                setHasError(true)
            }
        } else {
            setIsLogin(false)
        }
    }

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            if (account) {
                ifMatch(account)
            }
        }
    }


    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {isLogin ?
                                <div className="container">
                                    <div className="home-container">
                                        <h1>Hello, {user} !</h1>
                                        <br />
                                    </div>
                                    <div className="home-label">
                                        <img className="gif" src={logo} alt="loading.." width={72} height={57} />
                                        <label className="success">Succefully login</label>
                                    </div>
                                </div>
                                :
                                <div className="login-content">
                                    <Title text="Sign in" />
                                    <div className="form-group">
                                        <Inputs
                                            attribute={{
                                                id: "user",
                                                name: "username",
                                                type: "text",
                                                placeholder: "input your username"
                                            }}
                                            handleChange={handleChange}
                                            param={passwordError}
                                        />
                                    </div>
                                {hasError &&
                                    <label className="label-alert">Username and Password not found</label>
                                }
                                    <div className="form-group">
                                        <Inputs
                                            attribute={{
                                                id: "password",
                                                name: "password",
                                                type: "password",
                                                placeholder: "input your password"
                                            }}
                                            handleChange={handleChange}
                                            param={passwordError}
                                        />
                                    </div>
                                    {passwordError &&
                                        <label className="label-error">
                                            Invalid password
                                        </label>
                                    }

                                    <div className="form-group">
                                        <button className="btn btn-success" onClick={(e) => handleSubmit()}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
