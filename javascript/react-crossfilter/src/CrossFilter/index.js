import React from 'react'
import crossfilter from 'crossfilter2'
import PropTypes from 'prop-types'

class CrossFilter extends React.Component {
    constructor(props) {
        super(props)

        this.cf = crossfilter(props.data)
        this.dimensions = {}
        Object.entries(props.dimensions).forEach(([key, dim]) => this.dimensions[key] = dim(this.cf))

        this.state = {
            crossfilterModifiedAt: new Date()
        }
    }

    renderChildren = (children) => {
        return React.Children.map(children, (child) => {
            if (!child || !child.props) {
                return child
            }

            let children = []
            if (child.props.children) {
                children = this.renderChildren(child.props.children)
            }

            if (child.props.isFilter) {
                return React.cloneElement(
                    child,
                    {
                        children,
                        crossfilter: this.cf,
                        dimensions: this.dimensions,
                        onFilterChange: () => this.setState({ crossfilterModifiedAt: new Date() })
                    }
                )
            }

            if (children.length) {
                return React.cloneElement(child, { children })
            }
            return child
        })
    }

    render() {
        return this.renderChildren(this.props.children)
    }
}

CrossFilter.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    dimensions: PropTypes.shape().isRequired
}

export default CrossFilter
