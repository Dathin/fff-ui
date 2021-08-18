import { Box, Switch, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useStyles } from "./styles";

export function ToggleOn(){
    
    const classes = useStyles();
    const history = useHistory();

    function redirectToSignUp(){
        setTimeout(() => history.push(ROUTES.SIGNUP), 200);
    }

    return (<Box className={classes.root}>
                <Typography variant="h5">Try it out:</Typography>
                <Switch color="primary" onChange={redirectToSignUp}/>
            </Box>)
}