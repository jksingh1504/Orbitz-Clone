import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer1 = [
  {
    to: "#",
    Contact: "About",
  },
  {
    to: "#",
    Contact: "Jobs",
  },
  {
    to: "#",
    Contact: "List your property",
  },
  {
    to: "#",
    Contact: "Partnerships",
  },
  {
    to: "#",
    Contact: "Newsroom",
  },
  {
    to: "#",
    Contact: "Investor Relations",
  },
  {
    to: "#",
    Contact: "Site Map",
  },
  {
    to: "#",
    Contact: "Orbitz Rewards",
  },
  {
    to: "#",
    Contact: "Advertising",
  },
]; 
const Footer2 = [
  {
    to: "#",
    Contact: "Hotels in Uninted State",
  },
  {
    to: "#",
    Contact: "Vacation Rentals in United States",
  },
  {
    to: "#",
    Contact: "Car Rentals in United States",
  },
  {
    to: "#",
    Contact: "Domestic Fights",
  },
  {
    to: "#",
    Contact: "Vacations Package in United States",
  },
  {
    to: "#",
    Contact: "Orbitz Reviews",
  },
  {
    to: "#",
    Contact: "Orbitz Coupons",
  },
  {
    to: "#",
    Contact: "LGBTQ Travels",
  },
  {
    to: "#",
    Contact: "Unique Accommodations",
  },
  {
    to: "#",
    Contact: "Travel Blog",
  },
]; 
const Footer3 = [
  {
    to: "#",
    Contact: "Privacy Policy",
  },
  {
    to: "#",
    Contact: "Terms Of Use",
  },
  {
    to: "#",
    Contact: "Vrbo terms and conditions",
  },
  {
    to: "#",
    Contact: "Orbitz Rewards Terms",
  },
  {
    to: "#",
    Contact: "Do not sell my personal information",
  },
]; 
const Footer4 = [
    {
        to:"#",Contact:"Support"
    },
    {
        to:"#",Contact:"Cancal your hotel or vacation rental booking"
    },
    {
        to:"#",Contact:"cancel your flight"
    },
    {
        to:"#",Contact:"Refund timeslines,policies & process"
    }
    ,
    {
        to:"#",Contact:"use an Orbitz Coupon"
    }
    
] 
  
const paddingX = {
 
    sm:7
}
const paddingY = {
    xs: 1,
   
}

const Footer = () => {
    return (
        <box >
                <Box className={styles.containerGrid} px={paddingX} py={paddingY}>
                <Container>
                    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" />
                </Container>
            
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={6} sm={3}>
                            <Box className={styles.FooterBox} >Company</Box>
                            {Footer1.map((el) => (
                                <Box className={styles.Box}>
                                    <Link className={styles.Links} to={el.to}>{el.Contact }</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={styles.FooterBox}>Explore</Box>
                            {Footer2.map((el) => (
                                <Box className={styles.Box}>
                                    <Link className={styles.Links} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={styles.FooterBox}>Policy</Box>
                            {Footer3.map((el) => (
                                <Box className={styles.Box}>
                                    <Link className={styles.Links} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Box className={styles.FooterBox}>Help</Box>
                            {Footer4.map((el) => (
                                <Box className={styles.Box}>
                                    <Link className={styles.Links} to={el.to}>{el.Contact}</Link>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>                                
                </Container>               
            </Box>
            <Container>
                <Box  textAlign="center"  borderTop={1} paddingBottom="15">
                    <Box className={styles.comp1}>© 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.</Box>
                    <Box className={styles.comp2}> Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</Box>
                </Box>
             </Container>
        </box>
    )
}

export default Footer
