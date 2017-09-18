import { executeTask } from './io'

const START_TASK = 'START_TASK'
const FINISH_TASK = 'FINISH_TASK'
const FAIL_TASK = 'FAIL_TASK'

export const startTask = () => {
    return {
        type: START_TASK
    }
}

export const finishTask = data => {
    return {
        type: FINISH_TASK,
        data
    }
}

export const failTask = () => {
    return {
        type: FAIL_TASK
    }
}

// `run` is a Redux Thunk action which uses our Promise code in `io.js`
export const run = () => {
    return dispatch => {
        dispatch(startTask())

        return executeTask().then(json => {
            dispatch(finishTask(json))
        }).catch(err => {
            dispatch(failTask())
        })
    }
}