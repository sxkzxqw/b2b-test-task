import React from 'react';
import styles from './Main.module.scss';
import OurOffers from '../OurOffers/OurOffers';
import OurOffersForm from '../OurOffersForm/OurOffersForm';
import OurProjects from '../OurProjects/OurProjects';
import Hitec from '../Hitec/Hitec';
import HitecGrid from '../HitecGrid/HitecGrid';
import Grid from '../Grid/Grid';
import Slider from '../Slider/Slider';
import Form from '../Form/Form';
import YourResult from '../YourResult/YourResult';
import AboutCompany from '../AboutCompany/AboutCompany';
import Partners from '../Partners/Partners';
import Reviews from '../Reviews/Reviews';
import TakeOrder from '../TakeOrder/TakeOrder';
import VideoBlogs from '../VideoBlogs/VideoBlogs';

const Main = () => {
    return (
        <main className={styles.main}>
            <OurOffers />
            <OurOffersForm />
            <OurProjects />
            <Hitec />
            <HitecGrid />
            <Grid />
            <Slider />
            <Form />
            <YourResult />
            <AboutCompany />
            <Partners />
            <Reviews />
            <VideoBlogs />
            <TakeOrder />
        </main>
    );
};

export default Main;