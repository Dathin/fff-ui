import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    or: {
        display: 'flex',
        margin: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'center',
        "& > hr": {
            width: '35%'
        }
    },
    divider: {
        width: '35%'
    }
}))