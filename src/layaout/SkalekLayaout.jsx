import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from '../components/Navbar';

export const SkalekLayaout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Box component='main'
                sx={{ p: 3, display: "flex", justifyContent: "center" }}
            >
                {children}
            </Box>
        </Box>
    )
}
