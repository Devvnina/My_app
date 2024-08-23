import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Copyright from '../Commons/Copyright'
function Footers(){

  
    return(
        <>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [1, 1],
                }}
                >
         
      
                <Grid container spacing={1} justifyContent="space-evenly">
                  
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </>
    )
}

export default Footers
