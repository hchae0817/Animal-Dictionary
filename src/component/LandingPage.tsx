import React from 'react';
import { makeStyles } from '@mui/styles';
import background from './blue.jpeg';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 0.8,
        padding: 250,
    },
    text: {
        textAlign: 'center',
        minHeight: '100vh',
        color: 'black',
    }
})
);

export default function LandingPage() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <h3>Welcome to the animal <br /> adventure</h3>
                </Typography>
            </div>
        </div>
    );
}

