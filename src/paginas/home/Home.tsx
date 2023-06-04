import { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import TabPostagens from '../../components/postagens/tabpostagens/TabPostagens'
import './Home.css'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserState } from '../../store/token/Reducer'
import { toast } from 'react-toastify'

function Home() {

    let navigate = useNavigate();
    //const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado ', {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            navigate("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts">
                            <Button variant="outlined" className='text-decorator-none'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;