import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box, Button } from "@mui/material";

export default function Title() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let sizer = .3;
        let height = 2603*sizer;
        let width = 2317*sizer;
        if (!mobile) {
            if (!phone) {
                height *= .35;
                width *= .35;
            }else {
                height *= .6;
                width *= .6;
            }
        }else {
            height *= .75;
            width *= .75;
        }
        return {height: height, width: width};
    }

    return (
        <Box id='about' sx={{backgroundColor: "black"}} >
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
                        pb: 2,
                        pt: 5,
                    }}
                >
                    <Grid item xs={12} sx={{
                        
                        my: '20px',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                        py: 2

                    }}>
                        <Typography variant="h2" color="white" align="center" >Profile</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{
                        marginBottom: '20px',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Image 
                            src='/img/profile/profile-pic.jpg'
                            height={logoSize().height} 
                            width={logoSize().width} 
                            alt='Profile Picture'
                            style={{borderRadius: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{
                    
                        marginBottom: '20px',
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center',

                    }}>
                        <Typography variant="h3" color="white" align="center" py={2}>Kamara Reynolds</Typography>
                        <Typography variant="h5" color="white" align="center" pb={2}>Full Stack Developer</Typography>
                        <Typography variant="body1" color="white" align="center" pb={2}>
                            {"After working in the Electronics Industry for 3 years and teaching Middle School Math for 4 years, I've stepped into the realm of Web Development."}
                        </Typography>
                        <Typography variant="body1" color="white" align="center" pb={2}>
                            My areas of expertise are reactive web sites and web applications with backend functionality.
                        </Typography>
                        <Typography variant="body1" color="white" align="center" pb={2}>
                            My primary tools are React, Redux, React Router, Flask, Next.js, SQLAchademy, Sequelize and MUI using Python, Node.js, Javascript, CSS, HTML, and SQL.
                        </Typography>
                        <Typography variant="body1" color="white" align="center" pb={2}>
                            <><b>Cell Number: </b>(516)-668-2866</>
                        </Typography>
                        <Typography variant="body1" color="white" align="center" pb={2}>
                            <><b>Email: </b>reynoldskamara@soulsitescoding.com</>
                        </Typography>
                        <Button 
                            component={'a'}
                            href='/Kamara_Reynolds_Resume.pdf'
                            download
                            variant='contained'
                            color="secondary" 
                            sx={{my: 2}}
                        >
                            <Typography align='center' color={'black'}  variant="h6" >
                                Download Resume
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}