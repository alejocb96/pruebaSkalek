import React from 'react';
import { Navbar } from '../components/Navbar';
import { Box } from '@mui/material';

export const SkalekLayaout = ({ children }) => {
    return (

        <Box>
            <Navbar />
            <Box
                sx={{
                    display: "flex", '@media (max-width: 600px)': {
                        flexDirection: "column",
                    },
                }}
            >
                {children}
            </Box>
        </Box>


    );
};
