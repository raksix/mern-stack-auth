import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Navba() {

    const { user } = useSelector((state) => state)


    return (
        <div className="navbar">
            <Link className="brand" type="button" to="/">
                React JWT Login
            </Link>
            {user.email ?
                <></>
                :
                <div className="nav-items">
                    <Link className="nav-item" type="button" to="/login">
                        Giriş Yap
                    </Link>
                    <Link className="nav-item" type="button" to="/register">
                        Kayıt Ol
                    </Link>
                </div>
            }
        </div>
    )
}