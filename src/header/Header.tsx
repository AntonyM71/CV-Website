import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { preferDarkState } from "../recoil/atoms"
import { routes } from "../routes/Router"

const Header = () => (
    <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
            <h1>AM</h1>
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <Typography color="textPrimary" variant="body1">
                            <Link
                                component={RouterLink}
                                to={routes.home.root}
                                color="inherit"
                            >
                                Home
                            </Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="textPrimary" variant="body1">
                            <Link
                                component={RouterLink}
                                to={routes.cv.root}
                                color="inherit"
                            >
                                CV
                            </Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="textPrimary" variant="body1">
                            <Link
                                component={RouterLink}
                                to={routes.projects.root}
                                color="inherit"
                            >
                                My Projects
                            </Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="textPrimary" variant="body1">
                            <Link
                                component={RouterLink}
                                to="/linkedin"
                                color="inherit"
                            >
                                Linkedin
                            </Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <DarkModeButton />
                    </ListItemText>
                </ListItem>
            </List>
        </Toolbar>
    </AppBar>
)

export const DarkModeButton = () => {
    const [preferDark, setPreferDark] = useRecoilState(preferDarkState)
    const handleDarkModePress = () => {
        setPreferDark(!preferDark)
    }

    return (
        <IconButton
            color="default"
            data-testid="darkModeButton"
            onClick={handleDarkModePress}
        >
            <Brightness4Icon />
        </IconButton>
    )
}

export default Header
