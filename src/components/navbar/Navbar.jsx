import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import logo from '../../assets/img/logo.png'
import Btn from "../btn/Btn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';






export default function NavBar({ active }) {
    let [menu, setMenu] = useState('true');
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        menu ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    useEffect(() => {
        setActiveLink(active)
    }, [])


    return (
        <>
            <div className="navBar">
                <img onClick={() => navigate('/')} src={"https://tse3.mm.bing.net/th?id=OIP.SAKQHzWHJAPXMqGYXv3JzAHaGZ&pid=Api&P=0&h=220"} className="logo-nb" />

                <div>
                    <div className={activeMenu}>
                        <div
                            className={activeLink === 'Courses' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Courses')
                            }
                            }
                        >Courses</div>
                        <div
                            className={activeLink === 'Trainings' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Trainings')
                            }
                            }
                        >Trainings</div>
                        <div
                            className={activeLink === 'Jobs' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Jobs')
                            }
                            }
                        >Jobs</div>
                        <div
                            className={activeLink === 'About Us' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/About')
                            }
                            }
                        >About Us</div>

                        <div
                            className="link-nb1"
                            onClick={() => navigate('/SignUp')} >Create Account</div>
                        <Btn
                            className='navBtn' label="LOGIN" onClick={() => navigate('/SignIn')} />
                    </div>
                    <div className="icon">
                        {menu ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                    </div>
                </div>
            </div>
        </>
    )
} 