import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, ButtonGroup } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery } from '@mui/material';
import { useState} from "react";


export default function Nav() {

    const mobile = useMediaQuery('(min-width:1000px)');
    const pathSelect = useRouter().pathname.replace('/','')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    function scroll(id) {
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"});
        setAnchorEl(null); 
    }


    const pageData = [
        {id: 'title', page: 'Home'},
        {id: 'sites', page: 'Projects'},
        {id: 'about', page: 'Profile'},
    ]

    return (
        <AppBar sx={{
            backgroundColor: "black", 
            width: '100%',
            position: 'fixed', 
            top: '0px', 
            zIndex: 999
        }} >
            {!mobile ? (
                // Mobile Nav
                <Toolbar>
                    {/* Mobile Menu Button */}
                    <IconButton 
                        color="secondary" 
                        size="large" 
                        onClick={handleMenuClick} 
                        sx={{mr: 2}}
                    >
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    {/* Mobile Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                backgroundColor: 'black',
                                color: 'secondary.main',
                                borderRadius: '7px',
                            }
                        }}
                    >
                        {pageData.map((data)=>(
                            <MenuItem 
                                 key={`${data.id}mobilePageNav`}
                                 onClick={()=>scroll(data.id)}
                            >
                                {data.page}
                            </MenuItem>
                        ))}
                    </Menu>
                    {/* Mobile Loge */}
                    <Image 
                        src='/img/logos/logo-main-inverted.jpg'
                        height={50} 
                        width={50*582/1004} 
                        alt='Nav Logo'
                        style={{position: 'absolute', top: '0px', left: '50%', transform: 'translate(-50%, 10%)'}}

                        
                    />
                    {/* Mobile Links */}
                    <ButtonGroup sx={{
                            position: 'fixed',
                            right: '0px',
                            zIndex: '98',
                    }}>
                        <Button 
                            component={Link}
                            href='https://www.linkedin.com/in/kamara-reynolds-41248686/'
                            variant='text'
                            color="secondary" 
                            sx={{display: 'block', mx: 0}}
                        >
                            <LinkedInIcon fontSize="large" />
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            ) : (
                // Nav
                <Toolbar>
                    {/* Logo */}
                    <Image 
                        src='/img/logos/logo-main-inverted.jpg'
                        height={50} 
                        width={50*582/1004} 
                        alt='Nav Logo'
                        
                    />
                    {/* Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, ml: 3 }}>
                        {pageData.map((data)=>(
                            <Button 
                                key={`${data.id}navPage`}
                                onClick={()=>scroll(data.id)}
                                variant={(pathSelect == data.id) ? 'contained' : 'text'}
                                color="secondary" 
                                sx={{display: 'block', mx: 2}}
                            >
                                <Typography align='center' color={(pathSelect == data.id) ? 'black' : ''}  variant="h6">
                                    {data.page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    {/* Links */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex'}, justifyContent: 'flex-end', ml: 3 }}>
                        <Button 
                            component={Link}
                            href='https://www.linkedin.com/in/kamara-reynolds-41248686/'
                            variant='text'
                            color="secondary" 
                            sx={{display: 'block', mx: 0}}
                        >
                            <LinkedInIcon fontSize="large" />
                        </Button>
                    </Box>
                </Toolbar>
            )}
        </AppBar>
    )
}