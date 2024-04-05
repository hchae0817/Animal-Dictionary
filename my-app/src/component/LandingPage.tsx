import React from 'react';
//import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from './blue.jpeg';
import Typography from '@mui/material/Typography';
//import PulseText from 'react-pulse-text';

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
                    {/* <PulseText text="Welcome to the animal adventure" duration={6000} iterationCount={99999}>
                        <h2>Welcome to the animal adventure</h2>
                    </PulseText> */}

                    <h3>Welcome to the animal <br/> adventure</h3>

                </Typography>

            </div>



        </div>
    );
}

