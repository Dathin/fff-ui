import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

interface DescriptiveIconProps {
    description: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export function DescriptiveIcon({description, icon}: DescriptiveIconProps){
    const classes = useStyles();

    const Icon = icon;

    return (<Box className={classes.root}>
        <Icon className={classes.icon} />
        <Typography className={classes.text} variant="h6" component="h6">{description}</Typography>
    </Box>);
}