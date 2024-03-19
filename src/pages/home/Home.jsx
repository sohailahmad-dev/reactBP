import React from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import CheckIcon from '@mui/icons-material/Check';
import companies from '../../assets/imgs/companies.png';
import companies1 from '../../assets/imgs/companies1.png';
import img1 from '../../assets/imgs/img1.png';
import img2 from '../../assets/imgs/img2.png';
import img3 from '../../assets/imgs/img3.png';
import img4 from '../../assets/imgs/img4.png';
import img5 from '../../assets/imgs/img5.png';
import img6 from '../../assets/imgs/img6.png';
import img7 from '../../assets/imgs/img7.png';
import img8 from '../../assets/imgs/img8.png';
import img9 from '../../assets/imgs/img9.png';
import img10 from '../../assets/imgs/img10.png';
import img11 from '../../assets/imgs/img11.png';
import img12 from '../../assets/imgs/img12.png';
import img13 from '../../assets/imgs/img13.png';
import img14 from '../../assets/imgs/img14.png';
import img15 from '../../assets/imgs/img15.png';
import img16 from '../../assets/imgs/img16.png';
import { CardLeft } from './CardLeft';
import Card1 from './Card1';
import { CardRight } from './CardRight';
import EastIcon from '@mui/icons-material/East';




export default function Home() {
    const bannerFacilities = ['Messaging', 'Merchandising', 'Market Segmentation', 'Personalization', 'Wallet Booking & Communication', 'QR Code Generator', 'Chatbot AI', 'Loyalty', 'GeoFencing', 'Customer Recognition', 'Vouchers & Gift Cards', 'Inspirations', 'Asset Tracking', 'RFID Platforms']

    const sec3Imgs = [img1, img2, img3, img4, img5]

    return (
        <>
            <NavBar />
            {/* section 1 banner section  */}
            <section className='home-banner-box'>
                <Grid container spacing={5}>
                    <Grid item sm={8} >
                        <div className="home-banner-heading">
                            The AI Powered tools <br />
                            to connect customers <br />
                            and guests.
                        </div>
                        <Btn label='Get Started' />
                    </Grid>
                    <Grid item sm={4} >
                        <div className="home-banner-right">
                            {bannerFacilities.map(item => (
                                <div key={item}><CheckIcon fontSize='small' /> {item}</div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 2  */}
            <section className='home-sec2-box padding'>
                <div className="global-heading1">Empower all to spend <br />confidently.</div>
                <div className="home-sec2-content global-text1">As a finance leader, you love control. But most company spend happens outside your team. So how do you empower everyone — everywhere — to spend wisely? Top companies are doing just that with iVeeW.
                </div>
                <div className='home-sec2-imgs' >
                    <img className='home-sec-2-img' src={companies} alt="companies" />
                    <img className='home-sec-2-img' src={companies1} alt="companies" />
                </div>
            </section>
            {/* section 3  */}
            <section className='home-sec3-box padding'>
                <div className="global-heading1">Consolidate all spending onto <br /> one platform.</div>
                <div className="global-text1 home-sec2-content">Everything you need to control spend before it happens and empower teams confidently.</div>
                <div className="">
                    <Grid container spacing={3}>
                        <Grid item md={2.4} sm={6} xs={12}>
                            <img src={img1} alt="img1" className='home-sec3-img' />
                        </Grid>
                        <Grid item md={2.4} sm={6} xs={12}>
                            <img src={img2} alt="img2" className='home-sec3-img' />
                        </Grid>
                        <Grid item md={2.4} sm={6} xs={12}>
                            <img src={img3} alt="img3" className='home-sec3-img' />
                        </Grid>
                        <Grid item md={2.4} sm={6} xs={12}>
                            <img src={img4} alt="img4" className='home-sec3-img' />
                        </Grid>
                        <Grid item md={2.4} sm={6} xs={12}>
                            <img src={img5} alt="img5" className='home-sec3-img' />
                        </Grid>
                    </Grid>
                </div>
            </section>
            {/* section 4  */}
            <section className='home-sec4-box padding'>
                <div className="global-heading1">Spend smarter at every stage <br /> of growth.</div>
                <div style={{ marginTop: 100 }}>
                    <Grid container spacing={5}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Card1 img={img6} heading="SMB - Starting with 1-10 locations" />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Card1 img={img7} heading="SMB - Starting with 1-10 locations" />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Card1 img={img8} heading="SMB - Starting with 1-10 locations" />
                        </Grid>
                    </Grid>
                </div>
            </section>
            {/* section 5  */}
            <section className="home-sec5-box padding">
                <div className="global-heading1">Give your resources team <br /> superpowers</div>
                <div className="global-text1 home-sec2-content">Maximize every resource with AI-powered controls, payments, and accounting.</div>
                <div className="sec5-cards-box">
                    <CardLeft
                        img={img9}
                        heading="RFID software revolutionizes "
                        content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                    />
                    <CardRight
                        img={img10}
                        heading="QRMAJI Delivers codes"
                        content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                    />
                    <CardLeft
                        img={img11}
                        heading="Beacons, wifi, mesh, 5.0"
                        content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                    />
                    <CardRight
                        img={img12}
                        heading="Geofencing your property"
                        content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                    />
                    <CardLeft
                        img={img13}
                        heading="GX-Guest management"
                        content="Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact."
                    />
                    <CardRight
                        img={img14}
                        heading="Segmentation marketing"
                        content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                    />
                </div>
                <div>
                    <Grid container spacing={5} mt={15}>
                        <Grid item sm={5} xs={12} >
                            <img src={img15} alt="img" width="100%" />
                        </Grid>
                        <Grid item sm={6} xs={12} mt={7} >
                            <img src={img16} alt="img" width='250px' />
                            <div className="home-sec5-author-text">
                                “iVeeW has been a major gain for us in efficiency for T&E. It’s easy for employees to understand where and how to spend.”
                            </div>
                            <div className="home-sec5-author-name">— Mike Kim, Vice President of Finance, DoorDash</div>
                            <div className="home-card-btnTxt">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}
