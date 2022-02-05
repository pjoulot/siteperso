import React from "react";
import { useTheme } from '@mui/material/styles';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import { ColorModeContext } from "../pages/_app.js";

export default function DarkModeButton() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <BsSun /> : <MdOutlineDarkMode />}
        </IconButton>
    );
}
