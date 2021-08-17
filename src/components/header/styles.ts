import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '70px',
        backgroundColor: theme.palette.background.paper
    },
    center: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    tryForFree: {
        paddingTop: theme.spacing(1)
    }
}))