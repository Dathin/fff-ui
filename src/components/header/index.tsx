import { Avatar, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUser } from "../../context/userContext";
import { useStyles } from "./styles";

export function Header(){
    let history = useHistory();
    const { isAuthenticated } = useUser();
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <Box className={classes.center}>
                <img src="/minLogo.png" alt="Minified version of FFF logo" onClick={() => history.push(ROUTES.HOME)}/>
                {isAuthenticated && <Avatar />}
            </Box>
        </Box>
    )
}