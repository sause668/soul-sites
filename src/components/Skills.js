import Image from "next/image"
import { Container, Grid, Typography, useMediaQuery, Box } from "@mui/material";

export default function Skills() {

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

    return (
        <Box id='title' sx={{backgroundColor: "primary.main", paddingTop: '10px'}} >
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                // backgroundColor: "#fdfdfd"
            }} >
                
                
            </Container>
        </Box>
    )
}

