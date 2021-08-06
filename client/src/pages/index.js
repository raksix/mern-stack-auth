import Navbar from "../components/navbar";

export default function Index(){

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="main-frame">
                    <div className="main-frame-image">
                        <img src="https://jwt.io/img/pic_logo.svg" alt="main" />
                    </div>
                    <div className="main-frame-text">React JWT Login</div>
                    <div className="main-frame-information">Simple react jwt auth system MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack.</div>
                </div>
            </div>
        </div>
    )
}