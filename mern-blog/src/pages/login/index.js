import React from 'react'
import {LoginBg, RegisterBg} from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="Images"/>
            </div>
            <div className="right">
                <p className="title">Form Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={16}/>
                <Input label="Password" placeholder="Password" />
                <Gap height={50}/>
                <Button title="Login"/>
                <Link title="Belum Punya Akun Silahkan Daftar"/>
            </div>
        </div>
    )
}

export default Login
