import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box, ButtonBase } from "@mui/material";
import Link from "next/link";

export default function SitesExp() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const xLarge = useMediaQuery('(min-width:1200px)');
    const large = useMediaQuery('(min-width:1000px)');
    const medium = useMediaQuery('(min-width:800px)');
    const small = useMediaQuery('(min-width:600px)');
    const xSmall = useMediaQuery('(min-width:400px)');

    function logoSize() {
        let sizer = .8;
        if (!xLarge) {
            if (!large) {
                if(!medium) {
                    if (!small) {
                        if (!xSmall) {
                            sizer = .23;
                        } else {
                            sizer = .3;
                        }
                    } else {
                        sizer = .45;
                    }
                } else {
                    sizer = .55;
                }
            } else {
                sizer = .65;
            } 
        }
        let height = 750*sizer;
        let width = 1440*sizer;
        return {height: height, width: width};
    }

    const siteData = [
        
        {
            id: 'sewposh', 
            img: '/img/sites/sew-posh.png', 
            title: 'Sew Posh', 
            dis: 'Website for Upholstery Company', 
            link: 'https://sew-posh.vercel.app'
        }
    ]

    return (
        <Box id='sites' sx={{backgroundColor: "#fdfdfd"}} >
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
                        <Typography variant="h2" color="black" align="center" >Freelance Experience</Typography>
                    </Grid>
                    {siteData.map((site)=>(
                        <Grid item xs={12} sm={12} lg={12} key={`${site.id}pic`}  sx={{
                            marginBottom: '20px',
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Typography variant="h3" color="black" align="center" >{site.title}</Typography>
                            <Typography variant="h5" color="black" align="center" >{site.dis}</Typography>
                            <ButtonBase 
                                componet={Link}
                                href={site.link}
                                sx={{py: 2, borderRadius: '10px'}} 
                                disableRipple
                            >
                                <Image 
                                    src={site.img}
                                    height={logoSize().height} 
                                    width={logoSize().width} 
                                    // fill
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                                    alt={site.id}
                                    style={{
                                        borderRadius: '10px', 
                                        height: '100%', 
                                        width: '100%',
                                        boxShadow: '0px 0px 5px grey'
                                    }}
                                    priority={site.id == 'soulAcademy'}
                                />
                            </ButtonBase>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}