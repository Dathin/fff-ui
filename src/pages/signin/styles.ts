import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: theme.spacing(6)
    },
    form: {
        width: "100%",
        margin: theme.spacing(3)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))