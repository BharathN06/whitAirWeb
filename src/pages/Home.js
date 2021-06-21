import React from 'react';
import { Grid, Typography, List, ListItem, TextField, Button } from '@material-ui/core';
import '../scss/home.scss';
import Lightbackground from "../images/light-banner.svg";
import product1 from "../images/Product/Product1.jpg";
import product2 from "../images/Product/Product2.jpg";
import product3 from "../images/Product/Product3.jpg";
import product4 from "../images/Product/Product4.jpg";
import work1 from "../images/our-work/work1.png";
import work2 from "../images/our-work/work2.jpg";
import work3 from "../images/our-work/work3.jpg";
import work4 from "../images/our-work/work4.jpg";
import work5 from "../images/our-work/work5.jpg";
import work6 from "../images/our-work/work6.jpg";
import node from "../images/our-technologies/node.png";
import reactIcon from "../images/our-technologies/react.png";
import docker from "../images/our-technologies/docker.png";
import swift from "../images/our-technologies/swift.png";
import java from "../images/our-technologies/java.png";
import kotlin from "../images/our-technologies/kotlin.png";
import workTogether from "../images/workTogether.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import whychoose1 from "../images/whyChooseUs/whychoose1.jpg";
import whychoose2 from "../images/whyChooseUs/whychoose2.jpg";
import whychoose3 from "../images/whyChooseUs/whychoose3.jpg";
import whychoose4 from "../images/whyChooseUs/whychoose4.jpg";
const Home = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div>

            <section className="banner-section">
                <Grid style={{ backgroundImage: `url(${Lightbackground})` }} className="back-ground-img">
                    <Grid item xs={12} md={6} >
                        <Grid className="table-view">
                            <Typography variant="h2" >
                                We are here <br />for your<br /> development
                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section className="product-section">
                <Grid className="container-fluid">
                    <Typography variant="h2">Our Product</Typography>

                    <Grid className="items">
                        <Grid container>
                            <Grid item sm={4} className="product1">
                                <Grid className="images">
                                    <img src={product1} alt="product"></img>
                                    <Typography>Uber Clone</Typography>
                                    <Typography variant="span">Book - Pickup - Drop</Typography>
                                </Grid>
                                <Grid className="content">
                                    <Typography variant="h4">
                                        Launcher Taxi
                                </Typography>
                                    <Typography>A transport hiring App which lets your customers hire transport with ease. Built with the latest tools available, this product provides an impeccable user experience. The latest features available gives you an edge in the market.</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} className="product1 mid">
                                <Grid className="center-item">
                                    <Typography variant="h3">
                                        excited to see our <br></br> product
                                </Typography>

                                </Grid>
                                <Grid className="images" >
                                    <img src={product2} alt="product"></img>
                                    <Typography>CRM Clone</Typography>
                                    <Typography variant="span">To Do - Doing - Done</Typography>
                                </Grid>
                                <Grid className="content">
                                    <Typography variant="h4">
                                        Bot tech - CRM
                                </Typography>
                                    <Typography>A Customer Relationship Management Software as the name suggests helps you in efficiently managing and utilizing customer data which drives business development. This product helps you in converting potential leads to customers, which gives you a shot in the arm in the current competitive business environment. This product alone gives your business verifiable results even without any major changes to your current business model.</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} className="product1">
                                <Grid className="images">
                                    <img src={product3} alt="product"></img>
                                    <Typography>E-Commerce Clone</Typography>
                                    <Typography variant="span">Buy your essential online</Typography>
                                </Grid>
                                <Grid className="content">
                                    <Typography variant="h4">
                                        SMART BUCKET
                                </Typography>
                                    <Typography>If you are looking for a product to handle online shopping, look no further. This platform brings you an out of the box user experience and ease of use which separates you from the rest of the pack. </Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} className="last-div product1">
                                <Grid className="images">
                                    <img src={product4} alt="product"></img>
                                    <Typography>Bedding Clone</Typography>
                                    <Typography variant="span">Start your game</Typography>
                                </Grid>
                                <Grid className="content">
                                    <Typography variant="h4">
                                        Oscar - Gaming Clone
                                </Typography>
                                    <Typography>A transport hiring App which lets your customers hire transport with ease. Built with the latest tools available, this product provides an impeccable user experience. The latest features available gives you an edge in the market.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section className="our-work">
                <Grid className="container-fluid">
                    <Typography className="title" variant="h4">How we work</Typography>
                    <Typography>
                        Our development process is simple but effective, which helps us meet the<br />
                        Requirements of our clients.<br />
                        This workflow helps us build products with no compromise on<br />
                        Developmental standards and the time frame.<br />
                    </Typography>


                    <Grid className="carousel">
                        <Carousel autoPlay={true} infiniteLoop={true} interval={8000} onSwipeMove>
                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work1} alt="work"></img>
                                    <Typography variant="h4">1</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work2} alt="Requirement"></img>
                                    <Typography variant="h4">2</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work3} alt="Requirement"></img>
                                    <Typography variant="h4">3</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work4} alt="Requirement"></img>
                                    <Typography variant="h4">4</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work5} alt="Requirement"></img>
                                    <Typography variant="h4">5</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sm={5} className="img">
                                    <img src={work6} alt="Requirement"></img>
                                    <Typography variant="h4">6</Typography>
                                </Grid>
                                <Grid item sm={7} className="content">
                                    <Typography variant="h3">Requirement Gathering</Typography>
                                    <Typography>
                                        We start off by clearly understanding the business requirements of the client. This phase helps us to get a clear picture of the end product as imagined by the client.
                            </Typography>
                                </Grid>
                            </Grid>
                        </Carousel>
                    </Grid>

                </Grid>
            </section>
            <section className="choose-us">
                <Grid className="container-fluid">
                    <Typography className="title" variant="h4">Why Choose us</Typography>
                    <Typography>
                        Although all products of Whiteair are built with the latest tools and technologies available in the market, and our team of developers expertise in ReactJS, NodeJS, Flutter, GraphQL, Expressjs, ReactNative etc, the thing that makes us a bit different from others, is the passion that we put in, that makes the products that we build of stellar quality and which gives you a wholesome experience and exceeds your expectations.
                    </Typography>
                    <Typography>
                        Adhering to Whiteair’s promise of “From the spark till you make a mark”, we provide the following services out of the box:
                    </Typography>

                    <CarouselMulti autoPlay={true} swipeable={false}
                        draggable={true}
                        showDots={true} infinite={true} autoPlaySpeed={8000} showDots={false}
                        responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        className="slider-choose-us" >
                        <Grid className="slider-two">
                            <Grid className="img">
                                <img src={whychoose2} alt="choose-us"></img>
                            </Grid>
                            <Grid className="content">
                                <Typography variant="h5">
                                    App development
                                </Typography>
                                <Typography>
                                    With the usage of mobile platforms overtaking the traditional computer based services. We have expanded our inventory to tackle the challenges in the mobile domain, providing you with the top notch mobile apps both in android and IOS environments.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className="slider-two">
                            <Grid className="img">
                                <img src={whychoose3} alt="choose-us"></img>
                            </Grid>
                            <Grid className="content">
                                <Typography variant="h5">
                                Branding
                                </Typography>
                                <Typography>
                                Branding has a major role to play in the success of a product. The service that we provide doesn’t just stop with creating a logo, rather it follows a practical approach where we understand the market trends and based on collected data we identify the target audience who can be potential customers. This makes a huge difference in the success of our product.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className="slider-two">
                            <Grid className="img">
                                <img src={whychoose4} alt="choose-us"></img>
                            </Grid>
                            <Grid className="content">
                                <Typography variant="h5">
                                Business Strategy
                                </Typography>
                                <Typography >
                                This service involves letting you know about the best practises and educating you about the Standard Operating Procedures for us to get the most out of our product.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className="slider-two">
                            <Grid className="img">
                                <img src={whychoose1} alt="choose-us"></img>
                            </Grid>
                            <Grid className="content">
                                <Typography variant="h5">
                                    App development
                                </Typography>
                                <Typography>
                                    With the usage of mobile platforms overtaking the traditional computer based services. We have expanded our inventory to tackle the challenges in the mobile domain, providing you with the top notch mobile apps both in android and IOS environments.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CarouselMulti>



                </Grid>


            </section>

            <section className="ourTechnologies">
                <Grid className="container-fluid">
                    <Typography variant="h2">Our Technologies</Typography>
                    <Typography>
                        We take pride in developing our products with the latest tools and technologies available in the market so as to give our clients a competitive edge.
                    </Typography>
                    <Grid className="content">
                        <Grid container>
                            <Grid item sm={4} className="first-row">
                                <Typography variant="h3">Node <Typography variant="span"> <img src={node} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>This back-end javascript framework helps us build efficient web servers using the same javascript language used in the front end as well. This leads to low development and maintenance cost, without any compromise on performance.</Typography>
                            </Grid>

                            <Grid item sm={4} className="first-row">
                                <Typography variant="h3">React is <Typography variant="span"> <img src={reactIcon} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>React is a javascript front-end framework which is the latest and the most efficient of the web frameworks available in the market at present. This technology allows us to render web pages in the browser itself which makes a huge difference in operating speed and provides a good user experience.</Typography>
                            </Grid>

                            <Grid item sm={4} className="first-row">
                                <Typography variant="h3">Docker <Typography variant="span"> <img src={docker} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>Docker enables us to easily run any application anywhere with the help of virtualization. Thus providing our customers with flexibility in accessing the product anywhere without any lag in working efficiency.</Typography>
                            </Grid>
                            <Grid item sm={4} className="second-row">
                                <Typography variant="h3">Swift  <Typography variant="span"> <img src={swift} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>DSwift is a programming language used to create IOS applications. This helps us to ensure the cross platform availability of our product. The expertise is swift programming language that we have, helps us to cover a large customer base in the apple community.</Typography>
                            </Grid>
                            <Grid item sm={4} className="second-row">
                                <Typography variant="h3">Kotlin  <Typography variant="span"> <img src={kotlin} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>Kotlin is another cross-platform programming language which helps us build the product once and that can be run anywhere. This cross platform flexibility helps us to decrease the production cost and reach a wide range of customers in the various platforms.</Typography>
                            </Grid>
                            <Grid item sm={4} className="second-row">
                                <Typography variant="h3">Java  <Typography variant="span"> <img src={java} alt="ourTechnologies"></img></Typography></Typography>
                                <Typography>Java is a classic object oriented programming language, which helps us to build products which are compatible with the already available business infrastructure. Thus we can deploy our products without any business interruption.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className="workTogether">
                        <Typography variant="h4">Let’s Work together</Typography>
                        <Grid container>
                            <Grid item sm={4}>
                                <Grid className="tags">
                                    <List>
                                        <ListItem>App development</ListItem>
                                        <ListItem>Website Development</ListItem>
                                        <ListItem>Branding </ListItem>
                                        <ListItem className="active">Business Strategy</ListItem>
                                        <ListItem>UI/UX</ListItem>
                                    </List>
                                </Grid>

                                <Grid className="form">
                                    <TextField fullWidth variant="outlined" label="Name"></TextField>
                                    <TextField fullWidth variant="outlined" label="Email Address"></TextField>
                                    <TextField fullWidth variant="outlined" label="Mobile Number"></TextField>
                                    <Button className="submit-btn">Submit</Button>
                                </Grid>
                            </Grid>
                            <Grid item sm={8} className="img-section">
                                <img src={workTogether} alt="workTogether"></img>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section className="subscribe">
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="h4">Subscribe to our product update</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className="resp-only">
                        <TextField required label="Email Address" defaultValue="joney@gmail.com" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Button className="subscribe-btn">Subscribe</Button>
                    </Grid>
                </Grid>
            </section>

            <section className="footer">
                <Grid className="container-fluid">

                </Grid>
            </section>

        </div>
    );
};


export default Home;