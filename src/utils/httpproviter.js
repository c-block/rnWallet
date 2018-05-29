import errors from './errors';

export default class HttpProviter {

    constructor(host, options) {
        options = options || {};
        this.host = host || 'http://localhost:8080'
        this.timeout = options.timeout || 0;
        this.headers = options.headers;
        this.connected = false;
    }

_prepareRequest() {
    var request = new XMLHttpRequest();
    request.timeout = this.timeout && this.timeout !== 1 ? this.timeout : 0;
    request.open('POST', this.host, true);
    request.setRequestHeader('Content-Type', 'application/json');
    if (this.headers) {
        this.headers.forEach(header => {
            request.setRequestHeader(header.name, header.value);
        });
    }
    return request;
}

send(payload, callback) {
    _this = this;
    var request = this._prepareRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.timeout !== 1) {
            console.log('response--:',result);
            var result = request.responseText;
            var error = null;
            try {
                result = JSON.parse(result);
            } catch (e) {
                error = errors.InvalidResponse(result.responseText);
            }
            _this.connected = true;
            callback(error, result);
        }
    };
    request.ontimeout = () => {
        _this.connected = false;
        callback(errors.ConnectionTimeout(this.timeout));
    }
    try {
        request.send(JSON.stringify(payload));
    } catch (e) {
        callback(errors.InvalidConnection(this.host));
    }
}

}