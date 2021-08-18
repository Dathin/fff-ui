import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '35px',
        backgroundColor: theme.palette.background.paper,
        padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
}))