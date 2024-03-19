import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/imgs/iveewLogo.jpeg'
import Btn from "../btn/Btn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';






export default function NavBar({ active }) {
    let [menu, setMenu] = useState('true');
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('')
    const [showNote, setShowNote] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setShowNote(currentScroll <= 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        menu ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    useEffect(() => {
        setActiveLink(active)
    }, [])


    return (
        <div className="navBar-Parent">
            <div className="navBar-note" style={{ display: showNote ? 'block' : 'none' }}>🚀 The Winter '24 Release is here — with smarter bill pay, spend limits, and more </div>
            <div className="navBar">
                <div className="icon">
                    {menu ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                </div>
                <img onClick={() => navigate('/')} src={logo} className="logo-nb" />
                <div className="nb-links-box">
                    <div className={activeMenu}>
                        <div
                            className="link-nb"
                            onMouseEnter={() => setActiveLink('Products')}
                            onMouseLeave={() => setActiveLink('')}
                        >Products
                            {activeLink === 'Products' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => setActiveLink('Solutions')}
                            onMouseLeave={() => setActiveLink('')}
                        >Solutions
                            {activeLink === 'Solutions' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => setActiveLink('Resources')}
                            onMouseLeave={() => setActiveLink('')}
                        >Resources
                            {activeLink === 'Resources' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => setActiveLink('Pricing')}
                            onMouseLeave={() => setActiveLink('')}
                        >Pricing
                            {activeLink === 'Pricing' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                    </div>
                    <div className={activeMenu}>
                        <div
                            className="link-nb1"
                        >Sign In</div>
                        <Btn
                            className='navBtn' label="Get Started" />
                    </div>
                </div>
            </div>
        </div >
    )
} 