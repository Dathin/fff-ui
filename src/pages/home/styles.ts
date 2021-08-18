import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        margin: `${theme.spacing(5)}px 0`
    },
    logo: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexFlow: 'wrap'
    },
    logoText: {
        marginTop: theme.spacing(4)
    },
    icons: {
        width:' 100%',
    },
    toggleOn: {
        marginTop: theme.spacing(4) 
    }

}))