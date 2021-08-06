import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar";

var qs = require("qs")

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [serverMsg, setServerMsg] = useState("")

    var data = qs.stringify({
        'name': name,
        'email': email,
        'password': password,
    })

    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/auth/register',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    }

    const RegisterPost = () => {
        setServerMsg('Sunucuya İstek Gönderiliyor...')
        axios(config).then((res) => {
            if (res.data.message === 'success') {
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
                        <div className="main-frame-text">Kayıt Ol</div>
                        <div>{serverMsg}</div>
                        <div>Kullanıcı Adı</div>
                        <input
                            className="form-input"
                            placeholder="Lütfen kullanıcı adınızı giriniz."
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
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
                        <div className="form-button" type="button" onClick={() => { RegisterPost() }}>Kayıt Ol</div>
                    </div>
                </div>
            </div>
        </div>
    )
}