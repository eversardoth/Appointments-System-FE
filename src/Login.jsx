import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Inicio from './Inicio'
import axios from "axios";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const jwt = localStorage.getItem("jwt")


    function handleSubmit(e) {
        e.preventDefault()
        let url = "https://appointments-api-eesh.herokuapp.com/authenticate"
        let payload = { "username": username, "password": password }
        axios.post(url, payload)
            .then(data => {
                if (data.data.jwt) {
                    localStorage.setItem("jwt", data.data.jwt)
                    //  location.replace("/inicio")
                    window.location.reload()
                }
            }
            )
            .catch(e => console.log(e))

    }
    return (
        <>

            {!jwt ?
                <div className="p-d-flex p-jc-center">
                    <div className="card" style={{ width: '30%', marginTop: '10vh' }}>
                        <fieldset>
                            <legend className="p-text-center">Login</legend>
                            <form className="p-fluid" onSubmit={handleSubmit} >
                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user"></i>
                                        </span>
                                        <InputText placeholder="Username" value={username} onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}></InputText>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-star-o"></i>
                                        </span>
                                        <Password placeholder="Password" value={password} onChange={(e) => {
                                            setPassword(e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <Button type="submit" label="Submit" icon="pi pi-check" style={{ width: "50%", marginLeft: "50%" }} />
                            </form>
                        </fieldset>

                        <Link to="/register">Sign Up</Link>
                    </div>
                </div> : <Inicio />
            }
        </>


    )
}

export default Login;