import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from '../components/Navbar';

export const SkalekLayaout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Box component='main'
               
            >
                {children}
            </Box>
        </Box>
    )
}
