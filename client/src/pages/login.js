import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar";

var qs = require("qs")

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [serverMsg, setServerMsg] = useState("")

    var data = qs.stringify({
        'email': email,
        'password': password,
    })

    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    }

    const LoginPost = () => {
        setServerMsg('Sunucuya İstek Gönderiliyor...')
        axios(config).then((res) => {
            if(res.data.message === 'success') {
                localStorage.setItem("token", 'Bearer ' + res.data.token)
                window.location.href = './me'
                setServerMsg(res.data.message)
            } else {
                setServerMsg(res.data.message)
            }
        })
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="main-frame">
                    <div className="form">
                        <div className="main-frame-text">Giriş Yap</div>
                        <div>{serverMsg}</div>
                        <div>E-Posta</div>
                        <input  
                            className="form-input" 
                            placeholder="Lütfen e-posta adresinizi giriniz." 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                        <div>Şifre</div>
                        <input  
                            className="form-input" 
                            placeholder="Lütfen şifrenizi giriniz." 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                        <div className="form-button" type="button" onClick={() => { LoginPost() }}>Giriş Yap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}