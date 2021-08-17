import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export function Home(){
    const classes = useStyles();


    return (<Box className={classes.root}>
        <Box className={classes.logo}>
            <img src="/fullLogo.png" alt="Full version of FFF logo" />
            <Typography variant="h4" component="h1" className={classes.logoText}>Free Feature Flags</Typography>
        </Box>

    </Box>)
}