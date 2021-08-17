import { Box, Link } from "@material-ui/core"
import { useStyles } from "./styles"

export function Footer(){
    const classes = useStyles()
    
    return (<Box className={classes.root}>
                <Link href="#" color="inherit">
                    Contribute
                </Link> 
                &nbsp; | &nbsp; 
                <Link href="#" color="inherit">
                    Contact Us
                </Link>
            </Box>)
}