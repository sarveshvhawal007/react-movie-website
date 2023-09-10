import React ,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {Button} from "./Button";
import '../css/Navbar.css'

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton] = useState(true);
    const handleClick =() => setClick(!click)

    const showButton =() =>{
        if(window.innerWidth<=960){
            setButton(false)
        } else {
            setButton(true)
        }
    }
    // to solve bug of render
    useEffect(()=>{
        showButton()
    },[])
    window.addEventListener('resize',showButton);
    const closeMoblieMenu =() =>setClick(false);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
                        Movies
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                    </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            {/*<li className='nav-item'>*/}
                            {/*    <Link to='/' className='nav-links' onClick={closeMoblieMenu} >Home</Link>*/}
                            {/*</li>*/}
                            {/*<li className='nav-item'>*/}
                            {/*    <Link to='/products' className='nav-links' onClick={closeMoblieMenu} >Products</Link>*/}
                            {/*</li>*/}
                            {/*<li className='nav-item'>*/}
                            {/*    <Link to='/' className='nav-links' onClick={closeMoblieMenu} >Home 3</Link>*/}
                            {/*</li>*/}
                            {/*<li className='nav-item'>*/}
                            {/*    <Link to='/' className='nav-links' onClick={closeMoblieMenu} >Home 4</Link>*/}
                            {/*</li>*/}
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>Home</Button>}
                    </div>
            </nav>
        </>
    )
}


export default Navbar