import React, { useState } from "react";
import "./inicio.css"
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { Checkbox } from 'primereact/checkbox';
import { Link } from "react-router-dom";
import axios from "axios";


const Register = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [roles, setRoles] = useState([])
    const [creation, setCreation] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        let url = "https://appointments-api-eesh.herokuapp.com/register"
        let payload = { "nombre": name, "username": username, "password": password, "email": email, "enabled": true, "idRoles": roles }
        axios.post(url, payload)
            .then(data => {
                if(data.data === "El usuario ha sido creado con exito"){

                    setCreation("success")

                }else{
                    setCreation("failed")
                }
            }
            )
            .catch(e => {console.log(e)
                setCreation("failed")})


    }

    function onRoleChange(e) {
        let selectedRoles = [...roles];
        if (e.checked) selectedRoles.push(Number(e.value));
        else selectedRoles.splice(selectedRoles.indexOf(Number(e.value)), 1);

        setRoles(selectedRoles);
    }

    return (
        <div className="p-d-flex p-jc-center">
            <div className="card" style={{ width: '30%', marginTop: '10vh', textAlign:'center' }}>
                <fieldset>
                    <legend className="p-text-center">Register</legend>
                    <form className="p-fluid" onSubmit={handleSubmit} >
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user-plus"></i>
                                </span>
                                <InputText placeholder="Name" value={name} onChange={(e) => {
                                    setName(e.target.value);
                                }}></InputText>
                            </div>
                        </div>
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
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-envelope"></i>
                                </span>
                                <InputText placeholder="mail@domain.com" value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                }}></InputText>
                            </div>
                        </div>

                        <fieldset style={{ textAlign:'left' }}>
                            <legend>Roles</legend>

                            <div>
                                <Checkbox
                                    inputId='cb1'
                                    value='1'
                                    onChange={onRoleChange}
                                    checked={roles.includes(1)}
                                />
                                <label htmlFor='cb1' className='p-checkbox-label'>
                                    User
                                </label>
                            </div>
                            <div>
                                <Checkbox
                                    inputId='cb2'
                                    value='2'
                                    onChange={onRoleChange}
                                    checked={roles.includes(2)}
                                />
                                <label htmlFor='cb2' className='p-checkbox-label'>
                                    Admin
                                </label>
                            </div>
                        </fieldset>

                        <Button type="submit" label="Submit" icon="pi pi-check" style={{ width: "50%", marginLeft: "50%" }} />
                    </form>
                </fieldset>
                <Link to='/' style={{  textAlign: "center" }}>Login</Link>
                <div>
                {creation==='success'? 'The user has been created, please log in': (creation==='failed' ? 'Something went wrong, please try again later' : null)}
                </div>

            </div>
        </div>)
}

export default Register;