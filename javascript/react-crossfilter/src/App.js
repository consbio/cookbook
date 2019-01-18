import React, { Component } from 'react'

import 'bulma/css/bulma.css'

import CrossFilter from './CrossFilter'

import data from './data'

import DateFilter from './filters/Date'
import ResetAll from './filters/ResetAll'
import Type from './filters/Type'
import List from './List'

class App extends Component {
    render() {
        return (
            <CrossFilter
                data={data}
                dimensions={{
                    date: cf => cf.dimension(f => ((new Date(f.date)))),
                    quantity: cf => cf.dimension(f => f.quantity),
                    type: cf => cf.dimension('type')
                }}
            >
                <div className="content section">
                    <h1>CrossFilter Example:</h1>
                    <ResetAll isFilter />
                    <div className="columns">
                        <div className="column">
                            <List isFilter />
                        </div>
                        <div className="column">
                            <DateFilter isFilter />
                            <Type isFilter />
                        </div>
                    </div>
                </div>
            </CrossFilter>
        )
    }
}

export default App
