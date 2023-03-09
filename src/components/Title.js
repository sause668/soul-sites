import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box } from "@mui/material";

export default function Title() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let sizer = .5;
        let height = 1004*sizer;
        let width = 582*sizer;
        if (!mobile) {
            if (!phone) {
                height *= .45;
                width *= .45;
            }else {
                height *= .625;
                width *= .625;
            }
        }else {
            height *= .75;
            width *= .75;
        }
        return {height: height, width: width};
    }

    return (
        <Box id='title' sx={{backgroundColor: "primary.main", paddingTop: '60px'}} >
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        py: 2
                    }}
                >
                    <Grid item xs={12} sm={12} md={6}   sx={{
                        
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Image 
                            src='/img/logos/logo-main-inverted.jpg'
                            height={logoSize().height} 
                            width={logoSize().width} 
                            alt='Nav Logo'
                        />
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} sx={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Typography variant="h1" color="secondary" align="center" >Soul Sites</Typography>
                        <Typography variant="h3" color="secondary" align="center" >Soul Never Dies</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}