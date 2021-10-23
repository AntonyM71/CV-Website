import React from "react"
import { Route, Switch } from "react-router-dom"
import { useToasts } from "react-toast-notifications"
import { registerRejectedPromise } from "../topLevelErrorHandler"
import CV from "./cv"
import Home from "./home"
export const routes = {
    home: {
        root: "/",
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
        </Switch>
    )
}
export default Router
