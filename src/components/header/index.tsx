import { Box, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useStyles } from "./styles";

export function Header(){
    const history = useHistory();
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <Box className={classes.center}>
                <img src="/minLogo.png" alt="Minified version of FFF logo" onClick={() => history.push(ROUTES.HOME)}/>
            </Box>
        </Box>
    )
}