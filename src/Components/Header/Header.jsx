import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useTheme,
    Box, Typography
} from "@mui/material";
import * as ROUTES from '../../Constants/routes';
import Logo from '../../assets/novelnest.png';
import DrawerComp from "./Drawer";

const Header = ({ userName = "Ahmed3zzeldeen" }) => {
    const [value, setValue] = useState();
    const [isLogin, setIsLogin] = useState(false);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    function handleLogout() {
    // TODO: Add Logout Logic
        setIsLogin(true)
    }

    return (
        <AppBar sx={{ background: "#FFFFFF" }}>
            <Toolbar>
                {isMatch ? (
                    <>
                        <Box component="a" href={ROUTES.LANDING} className="logo">
                            <img src={Logo} alt="NovelNest Logo" />
                        </Box>
                        <DrawerComp />
                    </>
                ) : (
                    <>
                        <div className="logo">
                            <img src={Logo} alt="NovelNest Logo" />
                        </div>
                        <Tabs
                            sx={{ marginLeft: "auto" }}
                            indicatorColor="secondary"
                            variant="text"
                            color="dark"
                            value={value}
                            onChange={(e, value) => setValue(value)}
                        >
                            <Tab label="Home" href={ROUTES.HOME} variant="text" color="dark" />
                            <Tab label="Books" href={ROUTES.BOOKS} variant="text" color="dark" />
                            <Tab label="About Us" href={ROUTES.ABOUT_US} variant="text" color="dark" />
                            <Tab label="Contact" href={ROUTES.CONTACT} variant="text" color="dark" />
                        </Tabs>
                        {isLogin ?
                            <>
                                <Button href={ROUTES.LOG_IN} sx={{ marginLeft: "auto" }} variant="contained">
                                    Login
                                </Button>
                                <Button href={ROUTES.SING_UP} sx={{ marginLeft: "10px" }} variant="contained">
                                    SignUp
                                </Button>
                            </> :
                            <>
                                <Typography variant="body1" color="initial" sx={{ marginLeft: "auto" }}>{userName.toLocaleUpperCase()}</Typography>
                                <Button onClick={handleLogout} sx={{ marginLeft: "10px" }} variant="outlined">
                                    Logout
                                </Button>
                            </>
                        }
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
