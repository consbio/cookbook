import React from 'react'

class ResetAll extends React.Component {
    handleClick = () => {
        Object.values(this.props.dimensions).forEach(dim => dim.dispose())
        this.props.onFilterChange()
    }

    render() {
        return (
            <div>
                <button className="button is-primary" onClick={this.handleClick}>
                    Reset all filters
                </button>
            </div>
        )
    }
}

export default ResetAll