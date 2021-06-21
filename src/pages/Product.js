import { Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import '../scss/product.scss';
import indroduction from "../images/product-img/indroduction-img.png";
import plans from "../images/plans.png";
import Requestrides from "../images/product-img/RotatoSnapshot.png";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function a11yPropsvertical(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    verticalroot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: "auto",
    }
}));

const Product = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [valuevertical, setValuevertical] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangevertical = (event, newValuevertical) => {
        setValuevertical(newValuevertical);
    };



    return (
        <div>
            <section className="product-banner-section">
                <Grid className="container-fluid">
                    <Typography variant="h1">Launcher Taxi</Typography>
                    <Typography className="abt-project">Uber clone <Typography variant="span">iOS - Android - Web - Admin</Typography></Typography>
                </Grid>
            </section>
            <section className="introduction">
                <Grid className="container-fluid">
                    <Grid container>
                        <Grid item xs={12} md={4} className="content">
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} className="img">
                            <img src={indroduction}></img>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section className="tab-app-demo">
                <Grid className="container-fluid">

                    <div className={classes.root}>
                        <Grid container>
                            <Grid item xs={12} md={12} className="content">
                                <AppBar position="static">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="nav tabs example"
                                    >
                                        <LinkTab label="User" href="/drafts" {...a11yProps(0)} />
                                        <LinkTab label="Driver" href="/trash" {...a11yProps(1)} />
                                        <LinkTab label="Web" href="/spam" {...a11yProps(2)} />
                                        <LinkTab label="Admin" href="/spam" {...a11yProps(3)} />
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0}>
                                    <div className={classes.verticalroot}>
                                        <Grid container>
                                            <Grid item xs={12} sm={4} md={3} lg={2}>
                                                <Tabs
                                                    orientation="vertical"
                                                    variant="scrollable"
                                                    value={valuevertical}
                                                    onChange={handleChangevertical}
                                                    aria-label="Vertical tabs example"
                                                    className={classes.tabs}
                                                >
                                                    <Tab label="Request rides" {...a11yPropsvertical(0)} />
                                                    <Tab label="Wallet & Payments" {...a11yPropsvertical(1)} />
                                                    <Tab label="Notification & Reviews" {...a11yPropsvertical(2)} />
                                                    <Tab label="Social Login & Invite" {...a11yPropsvertical(3)} />
                                                    <Tab label="Web Application" {...a11yPropsvertical(4)} />
                                                    <Tab label="Live Navigation" {...a11yPropsvertical(5)} />
                                                    <Tab label="Fare Estimation" {...a11yPropsvertical(6)} />
                                                </Tabs>
                                            </Grid>
                                            <Grid item xs={12} sm={8} md={9} lg={10}>
                                                <TabPanel value={valuevertical} index={0} className="requestrides">
                                                    <Grid container>
                                                        <Grid item xs={12} sm={12} md={6} className="image">
                                                            <img src={Requestrides} alt="Requestrides"></img>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={6} className="content">
                                                            <Link>
                                                                <Typography variant="h3">Ride Now</Typography>
                                                                <Typography>Rides/Bookings can be done by users and the nearby drivers will be notified immediately through the driver app once a user book the ride.</Typography>
                                                            </Link>
                                                            <Link>
                                                                <Typography variant="h3">Ride Later</Typography>
                                                                <Typography>Rides/Bookings can be done by users and the nearby drivers will be notified immediately through the driver app once a user book the ride.</Typography>
                                                            </Link>
                                                            <Link>
                                                                <Typography variant="h3">Ride History</Typography>
                                                                <Typography>Rides/Bookings can be done by users and the nearby drivers will be notified immediately through the driver app once a user book the ride.</Typography>
                                                            </Link>
                                                        </Grid>
                                                    </Grid>
                                                </TabPanel>
                                                <TabPanel value={valuevertical} index={1}>
                                                    Wallet & Payments
                                        </TabPanel>
                                                <TabPanel value={valuevertical} index={2}>
                                                    Notification & Reviews
                                        </TabPanel>
                                                <TabPanel value={valuevertical} index={3}>
                                                    Social Login & Invite
                                        </TabPanel>
                                                <TabPanel value={valuevertical} index={4}>
                                                    Web Application
                                        </TabPanel>
                                                <TabPanel value={valuevertical} index={5}>
                                                    Live Navigation
                                        </TabPanel>
                                                <TabPanel value={valuevertical} index={6}>
                                                    Fare Estimation
                                        </TabPanel>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    Page Two
                             </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Page Three
                            </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Admin
                            </TabPanel>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </section>
            <section className="You-never">
                <Grid className="container-fluid">
                    <Grid container>
                        <Grid item xs={12} md={8} className="content">
                            <Typography variant="h1">
                                You never go off when we see our product demo
                            </Typography>
                        </Grid>
                        <Grid className="video"></Grid>
                    </Grid>
                </Grid>
            </section>
            <section className="demovideo">
                <Grid className="container-fluid">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="600" type="text/html" src="https://www.youtube.com/embed/YxotuYbiOAk?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0&vq=hd720&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode.com/en/</a></small></div><div><small><a href="https://enablecookies.info"></a></small></div></iframe>
                </Grid>
            </section>
            <section className="pick-plan">
                <Grid className="container-fluid">
                    <Typography variant="h3">Pick a plan</Typography>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </Typography>

                    <Grid className="plans">
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} className="first">
                                <Grid className="bacground-img" style={{ backgroundImage: `url(${plans})` }}>
                                    <Typography variant="h3">Premium plan</Typography>
                                    <List>
                                        <ListItem> > Admin Dashboard</ListItem>
                                        <ListItem> > User web panel</ListItem>
                                        <ListItem> > Provider web panel</ListItem>
                                        <ListItem> > User Android App</ListItem>
                                        <ListItem> > User iOS App</ListItem>
                                        <ListItem> > Provider Android App</ListItem>
                                        <ListItem> > Provider iOS App</ListItem>
                                        <ListItem> > Social Login/Manual Sigin</ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} className="center">
                                <Grid className="bacground-img" style={{ backgroundImage: `url(${plans})` }}>
                                    <Typography variant="h3">Basic plan</Typography>
                                    <List>
                                        <ListItem> > Admin Dashboard</ListItem>
                                        <ListItem> > User web panel</ListItem>
                                        <ListItem> > Provider web panel</ListItem>
                                        <ListItem> > User Android App</ListItem>
                                        <ListItem> > User iOS App</ListItem>
                                        <ListItem> > Provider Android App</ListItem>
                                        <ListItem> > Provider iOS App</ListItem>
                                        <ListItem> > Social Login/Manual Sigin</ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} className="last">
                                <Grid className="bacground-img" style={{ backgroundImage: `url(${plans})` }}>
                                    <Typography variant="h3">Advanced plan</Typography>
                                    <List>
                                        <ListItem> > Admin Dashboard</ListItem>
                                        <ListItem> > User web panel</ListItem>
                                        <ListItem> > Provider web panel</ListItem>
                                        <ListItem> > User Android App</ListItem>
                                        <ListItem> > User iOS App</ListItem>
                                        <ListItem> > Provider Android App</ListItem>
                                        <ListItem> > Provider iOS App</ListItem>
                                        <ListItem> > Social Login/Manual Sigin</ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            <section className="quote">
                <Button variant="contained" className="btn">
                    Get a quote
                </Button>
            </section>
        </div>
    );
};



export default Product;
