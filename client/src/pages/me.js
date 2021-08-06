import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Me() {

    const { user } = useSelector((state) => state)

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="main-frame">
                    <div className="main-frame-image">
                        <img src="https://jwt.io/img/pic_logo.svg" alt="main" />
                    </div>
                    <div className="main-frame-text">React JWT Login</div>
                    <div className="main-frame-information">Welcome {user.name} </div>
                    <Link className="nav-item" type="button" onClick={() => {
                        localStorage.removeItem('token')
                        window.location.href = './login'
                    }}>
                        Çıkış Yap
                    </Link>

                </div>
            </div>
        </div>
    )
}