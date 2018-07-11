import React from 'react'
import {
    Link,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'

import asyncRouterComponent from './asyncRouteComponent'

const Index = () => (
    <div>
        <div>
            <Link to="/module1">Module1</Link>
            <Link to="/module2">Module2</Link>
        </div>

        <div>
            <Switch>
                <Route
                    exact
                    path="/module1"
                    component={asyncRouterComponent(() => import(/* webpackChunkName: "module1" */'./Module1'))}
                />
                <Route
                    exact
                    path="/module2"
                    component={asyncRouterComponent(() => import(/* webpackChunkName: "module2" */'./Module2'))}
                />
            </Switch>
        </div>
    </div>
)

export default withRouter(Index)
