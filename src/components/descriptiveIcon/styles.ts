import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
        margin: `0 ${theme.spacing(5)}px`,
        marginTop: theme.spacing(3)
    },
    icon: {
        fontSize: '56px',
        color: theme.palette.primary.main
    },
    text: {
        width: '100%',
        textAlign: 'center'
    }
}))