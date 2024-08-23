import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const theme = createTheme();
function State(){
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const footers = [
    {
      title: 'Hungry',
      description: ['History', 'Contact us'],
    },
    
    {
      title: 'Soft',
      description: ['Resource', 'Another resource'],
    },
    {
      title: 'Hard',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

    return(
        <>
              
              <ThemeProvider theme={theme}>
        
        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          
        >
<Grid container spacing={1} justifyContent="space-evenly">
                    {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        {footer.title}
                        </Typography>
                        <ul>
                        {footer.description.map((item) => (
                            <li key={item}>
                            <Link href="#" variant="subtitle2" color="text.secondary">
                                {item}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </Grid>
                    ))}
                </Grid>

 </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              
            </Box>
          </Box>
        
 
          </Grid>
      </Grid>
      
      </ThemeProvider>
        </>
    )
}

export default State