import { Grid } from '@material-ui/core'
import Carrossel from '../../components/carrossel/Carrossel'

function Home() {
    return (
        <Grid container style={{ marginTop: "8px" }}>
            <Grid item xs={12}>
                <Carrossel />
            </Grid>
        </Grid>
    )
}

export default Home