import { Box, Typography } from "@material-ui/core";
import { DescriptiveIcon } from "../../components/descriptiveIcon";
import { ToggleOn } from "../../components/toggleOn";
import { useStyles } from "./styles";
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import LaunchIcon from '@material-ui/icons/Launch';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import { useUser } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../../constants/routes";

export function Home(){
    const classes = useStyles();
    const { isAuthenticated } = useUser();
    let history = useHistory();

    useEffect(() => {
        if(isAuthenticated) {
            history.push(ROUTES.MAIN)
        }
    }, [isAuthenticated, history])


    return (<Box className={classes.root}>
        <Box className={classes.logo}>
            <img src="/fullLogo.png" alt="Full version of FFF logo" />
            <Typography variant="h4" component="h1" className={classes.logoText}>Free Feature Flags</Typography>
        </Box>
        <Box className={classes.toggleOn}>
            <ToggleOn />
        </Box>
        <Box className={classes.icons}>
            <DescriptiveIcon description={"It's and will always be unlimeted and free"} icon={MoneyOffIcon} />
            <DescriptiveIcon description={"Don’t worry scaling up. Our cloud solution will do the hard work for you while you will just have to decide if it’s on or off"} icon={LaunchIcon}></DescriptiveIcon>
            <DescriptiveIcon description={"Developer first. You can extract 100% of our platform from our SDK’s or API"} icon={SettingsIcon}></DescriptiveIcon>
            <DescriptiveIcon description={"Data is gold. You can measure all your usage"} icon={TimelineIcon}></DescriptiveIcon>
        </Box>
    </Box>)
}