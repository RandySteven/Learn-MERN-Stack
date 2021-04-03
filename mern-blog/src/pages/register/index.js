import React from 'react'
import './register.scss'
import {RegisterBg} from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="Images"/>
            </div>
            <div className="right">
                <p className="title">Form Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={16}/>
                <Input label="Email" placeholder="Email"/>
                <Gap height={16}/>
                <Input label="Password" placeholder="Password" />
                <Gap height={50}/>
                <Gap height={10}/>
                <Button title="Register"/>
                <Link title="Kembali ke login" />
            </div>
        </div>
    )
}

export default Register
