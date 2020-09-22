import React from 'react';
import { Link, Typography } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                davenelson.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const Footer = ({ classes, ...props }) => {
    return (
        <footer className={'footer'}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </footer>
    );
};

export default Footer;
