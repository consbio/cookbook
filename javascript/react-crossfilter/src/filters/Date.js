import React from 'react'

class DateFilter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lower: '',
            upper: ''
        }
    }

    handleChange = (type, value) => {
        this.setState(
            {[type]: value},
            () => {
                this.props.dimensions.date.filter(
                    (v) => {
                        if (this.state.lower && this.state.upper) {
                            return v >= new Date(this.state.lower) && v <= new Date(this.state.upper)
                        } else if (this.state.lower) {
                            return v >= new Date(this.state.lower)
                        } else if (this.state.upper) {
                            return v <= new Date(this.state.upper)
                        }
                        return true
                    }
                )
                this.props.onFilterChange()
            }
        )
    }

    handleReset = () => {
        this.setState(
            {
                lower: '',
                upper: ''
            },
            () => {
                this.props.dimensions.date.dispose()
                this.props.onFilterChange()
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Date Range</h1>

                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="date"
                            value={this.state.lower}
                            onChange={(e) => this.handleChange('lower', e.target.value)}
                        />
                    </div>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="date"
                            value={this.state.upper}
                            onChange={(e) => this.handleChange('upper', e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="button is-primary"
                    onClick={this.handleReset}
                >
                    Reset date filter
                </button>
            </div>
        )
    }
}

export default DateFilter
