import fetch from 'isomorphic-fetch'
import { getCookies } from './utils'

/* `urlEncode` and `post` are I/O utility methods built on isomorphic fetch */

export const urlEncode = data => {
    let items = Object.keys(data).map(item => encodeURIComponent(item) + '=' + encodeURIComponent(data[item]))

    return items.join('&')
}

export const post = (url, data, options = {}) => {

    return fetch(url, {
        method,
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*',
            'X-CSRFToken': getCookies().csrftoken
        },
    })
}

/* `executeTask` shows Promise concept by creating, then polling an server-side task */

export const executeTask => {

    // Utility to parse JSON and throw exceptions for non-200 responses
    let handleJSONResponse = response => {
        let { status } = response

        if (status >= 200 && status < 300) {
            return response.json()
        }
        else {
            throw new Error('Bad response code:  ' + response.status)
        }
    }

    // Execute the task
    return fetch('/execute-task/', {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        }
    }).then(handleJSONResponse).then(json => {
        let { uuid } = json  // Server returns a JSON response with the new task UUID

        return new Promise(resolve => {  // The promise will resolve when the entire task is complete
            let pollStatus = () => {  // pollStatus is called 1s after the last poll completes
                get('/task-status/' + uuid + '/').then(handleJSONResponse).then(json => {
                    let { status } = json

                    if (status === 'success') {
                        // At this point, we know the server has completed the task and we can resolve the promise
                        resolve(json)
                    }
                    else if (status === 'failure') {
                        err = new Error('Job failed')
                        err.json = json
                        throw err
                    }
                    else {
                        setTimeout(pollStatus, 1000)
                    }
                })
            }

            setTimeout(pollStatus, 1000)
        })
    })
}