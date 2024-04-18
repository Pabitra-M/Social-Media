import { Box } from "@mui/material";
import { padding, styled } from "@mui/system";



const WidgetWrapper = styled (Box) (({ theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    bacgroundColor: theme.palette.background.alt,
    broderRadius: "0.75rem",
}));

export default WidgetWrapper;
