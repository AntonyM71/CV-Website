import React from "react"
import { Route, Switch } from "react-router-dom"
import { useToasts } from "react-toast-notifications"
import { registerRejectedPromise } from "../topLevelErrorHandler"
import CV from "./cv"
import Home from "./home"
import Projects from "./projects"
export const routes = {
    home: {
        root: "/",
    },
    projects: {
        root: "/projects",
    },
    cv: {
        root: "/cv",
    },
}

const Router = () => {
    const { addToast } = useToasts()
    registerRejectedPromise(addToast)

    return (
        <Switch>
            <Route path={routes.cv.root} component={CV} />
            <Route path={routes.home.root} component={Home} />
            <Route path={routes.projects.root} component={Projects} />
        </Switch>
    )
}
export default Router
