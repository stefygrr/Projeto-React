import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';


function Navbar() {
    //const [token, setToken] = useLocalStorage('token');
    let navigate  = useNavigate()
    

    const dispatch = useDispatch();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout(){
        dispatch(addToken(''))
        alert("Usuário deslogado")
        navigate('/login')
    }
    
    var navbarComponent;
    
    if(token !== ''){
        navbarComponent =
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/posts">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                            

                    </Box>

                </Toolbar>
            </AppBar>
}
        return (
            <>
            {navbarComponent}
        </>
    )
}

export default Navbar;