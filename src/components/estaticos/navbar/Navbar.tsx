import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">

                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start"></Box>
                    <Link to='/home' className="text-decorator-none">
                    <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                    </Box>
                </Link>
                <Box mx={1} className="cursor">
                    <Typography variant="h6">
                        Criar Postagem
                    </Typography>
                </Box>
                <Box className="cursor">
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
                <Box className="cursor">
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        Cadastrar tema
                    </Typography>
                </Box>
                <Link to='/login' className="text-decorator-none">
                    <Box mx={1} className="cursor" >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar >
        </>
    )
}

export default Navbar;