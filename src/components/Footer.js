
import React from 'react';
import { Grid, List, Typography, ListItem } from '@material-ui/core';
import '../scss/footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookSquare, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <Grid className="container-fluid">
                    <Grid container>
                        <Grid item sm={8} md={8}>
                            <Typography variant="h5">WhiteAir Technologies Pvt Lmt.</Typography>
                            <address>
                                <Typography>No. 677, 1st Floor, 27th Main, 13th Cross, Sector 1, <br />
                                HSR Layout, Bangalore, Pin: 560102</Typography>
                                <Typography><Link>080-25043164</Link></Typography>
                                <Typography email="support@whiteair.com"><Link>support@whiteair.com</Link></Typography>
                            </address>
                        </Grid>
                        <Grid item sm={4} md={4}>
                            <Typography variant="h4">Company</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <List>
                                        <ListItem>
                                            <Link>About us</Link>
                                        </ListItem>
                                        <ListItem><Link>Products</Link></ListItem>
                                        <ListItem><Link>How we work</Link></ListItem>
                                        <ListItem><Link>Contact us</Link></ListItem>
                                        <ListItem><Link>Company</Link></ListItem>

                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <List>
                                        <ListItem><Link>Privacy Policy</Link></ListItem>
                                        <ListItem><Link>FAQ</Link></ListItem>
                                    </List>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} className="social-icon">
                            <List>
                                <ListItem>
                                    <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                                </ListItem>
                                <ListItem>
                                    <Link><FontAwesomeIcon icon={faFacebookSquare} /></Link>
                                </ListItem>
                                <ListItem>
                                    <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                                </ListItem>
                                <ListItem>
                                    <Link><FontAwesomeIcon icon={faSkype} /></Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </section>  
        </div>
    );
};


export default Footer;
