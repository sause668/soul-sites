import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box, ButtonBase } from "@mui/material";
import Link from "next/link";

export default function Title() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let sizer = 1;
        let height = 724*sizer;
        let width = 1007*sizer;
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

    const siteData = [
        {
            id: 'sewposh', 
            img: '/img/sites/sew-posh.jpg', 
            title: 'Sew Posh', 
            dis: 'Website for Upholstery Company', 
            link: 'https://sew-posh.vercel.app'
        },
        {
            id: 'soulmath', 
            img: '/img/sites/soul-math.jpg', 
            title: 'Soul Math', 
            dis: 'Practice Assesments for Middle School Math', 
            link: 'https://soul-math.vercel.app'
        },
        {
            id: 'soulcalc', 
            img: '/img/sites/soul-calc.jpg', 
            title: 'Soul Calc', 
            dis: 'Online Calculator', 
            link: 'https://soul-math.vercel.app/calc'
        },
        {
            id: 'frontendBasics', 
            img: '/img/sites/front-end-basics.jpg', 
            title: 'Front End Basics', 
            dis: 'Reference for Beginner Web Developers', 
            link: 'https://front-end-basics.vercel.app'
        },
    ]

    return (
        <Box id='sites' sx={{backgroundColor: "white"}} >
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
                        <Typography variant="h2" color="black" align="center" >Recent Projects</Typography>
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
                                    alt={site.id}
                                    style={{borderRadius: '10px'}}
                                />
                            </ButtonBase>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}