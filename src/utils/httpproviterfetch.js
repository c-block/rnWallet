import errors from './errors';

export default class HttpProviter {
    constructor(host, options) {
        this.host = host || 'http://localhost:8889'
        this.timeout = options.timeout || 0;
        this.header = options.header;
    }

    prepareRequest(payload) {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var request = new Request(this.host, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(payload),
            headers: myHeaders
        });
        return request;
    }
    send(payload, callback) {
        var request = this.prepareRequest(payload);
        var error = null;
        try {
            fetch(request)
                .then((res) => callback(error, res))
                .then((error) => callback(error))
        } catch (e) {
            callback(errors.InvalidConnection(this.host))
        }
    }
}


