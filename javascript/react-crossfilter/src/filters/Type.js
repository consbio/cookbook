import React from 'react'

class DateFilter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values: []
        }
    }

    handleChange = (e) => {
        const options = e.target.options
        const values = []
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value)
            }
        }
        this.setState(
            { values },
            () => {
                this.props.dimensions.type.filter(v => this.state.values.indexOf(v) !== -1)
                this.props.onFilterChange()
            }
        )

    }

    handleReset = () => {
        this.setState(
            { values: [] },
            () => {
                this.props.dimensions.type.dispose()
                this.props.onFilterChange()
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Types</h1>

                <div className="field">
                    <div className="control">
                        <div className="select is-multiple">
                            <select
                                multiple
                                value={this.state.values}
                                onChange={this.handleChange}
                            >
                                <option>tab</option>
                                <option>visa</option>
                                <option>cash</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    className="button is-primary"
                    onClick={this.handleReset}
                >
                    Reset type filter
                </button>
            </div>
        )
    }
}

export default DateFilter
