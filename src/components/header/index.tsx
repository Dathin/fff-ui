import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export function Header(){
    const classes = useStyles()
    
    return (
        <Box className={classes.root}>
            <Box className={classes.center}>
                <img src="/minLogo.png" alt="Minified version of FFF logo" />
            </Box>
        </Box>
    )
}