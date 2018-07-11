/**
 * Code from here: https://medium.com/airbnb-engineering/server-rendering-code-splitting-and-lazy-loading-with-react-router-v4-bfe596a6af70
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */

import React from 'react'

export default (loader, Placeholder) => {
    let Component = null

    return class AsyncRouteComponent extends React.Component {
        /**
         * Static so that you can call load against an uninstantiated version of
         * this component. This should only be called one time outside of the
         * normal render path.
        */
        static load() {
            return loader().then((ResolvedComponent) => {
                Component = ResolvedComponent.default || ResolvedComponent
            })
        }

        constructor() {
            super()
            this.updateState = this.updateState.bind(this)
            this.state = {
                Component
            }
        }

        componentWillMount() {
            AsyncRouteComponent.load().then(this.updateState)
        }

        updateState() {
            if (this.state.Component !== Component) {
                this.setState({
                    Component
                })
            }
        }

        render() {
            const { Component: ComponentFromState } = this.state
            if (ComponentFromState) {
                return <ComponentFromState {...this.props} />
            }
            if (Placeholder) {
                return <Placeholder {...this.props} />
            }
            return null
        }
    }
}
