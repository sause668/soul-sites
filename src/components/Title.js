import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box, Tooltip } from "@mui/material";

export default function Title() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');
    const phone2 = useMediaQuery('(min-width:400px)');

    function logoSize() {
        let sizer = .5;
        let height = 1004*sizer;
        let width = 582*sizer;
        if (!mobile) {
            if (!phone) {
                if (!phone2) {
                    height *= .25;
                    width *= .25;
                } else {
                    height *= .45;
                    width *= .45;
                }
                
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
    
    const skillIcons = [
        {name: 'JavaScript', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'},
        {name: 'TypeScript', link: '/img/icons/typescript.png'},
        {name: 'Python', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png'},
        {name: 'HTML', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'},
        {name: 'CSS', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'},
        {name: 'React.js', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'},
        {name: 'Redux.js', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png'},
        {name: 'Node.js', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'},
        {name: 'Express.js', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png'},
        {name: 'Flask', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png'},
        {name: 'Next.js', link: 'https://github.com/user-attachments/assets/7016efe1-f0fd-4b78-b0cb-db431926ec0d'},
        {name: 'Sequelize', link: 'https://avatars.githubusercontent.com/u/3591786?s=200&v=4'},
        {name: 'PostgreSQL', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png'},
        {name: 'Material UI', link: 'https://github.com/user-attachments/assets/7c0e7758-04f7-4911-9066-6dcac2832fba'},
        {name: 'Bootstrap', link: '/img/icons/bootstrap.png'},
        {name: 'GitHub', link: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'},
        {name: 'Git', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'},
        {name: 'Docker', link: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png'},
        
    ]

    return (
        <Box id='title' sx={{backgroundColor: "primary.main", paddingTop: '60px'}} >
            <Container sx={{
                display: "flex",
                flexDirection: 'column',
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
                            priority={true}
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
                <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                gap: '.5rem',
                backgroundColor: "#fdfdfd",
                borderRadius: '20px',
                margin: '10px',
                padding: '10px',
                flexWrap: 'wrap'
            }} >
                {skillIcons.map((icon, index) => (
                    <Tooltip title={icon.name} key={`skillIcon${index}`}>
                        <img height='32' width='32' src={icon.link}/> 
                    </Tooltip>
                    
                ))}
                </Box>
            </Container>
        </Box>
    )
}