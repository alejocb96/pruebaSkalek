import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from '../components/Navbar';

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


    )
}
