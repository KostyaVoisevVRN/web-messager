import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const dialogpage = () => {
        navigate('/main/dialogs')
    }
    return (
        <div>
            <button onClick={dialogpage}>Dialogs</button>
        </div>
    )
}

export default Navbar;