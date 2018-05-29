export default errors = {
    InvalidNumberOfRPCParams: () => {
        return new Error('Invalid number of input parameters to RPC method');
    },
    InvalidConnection: (host) => {
        return new Error('CONNECTION ERROR: Couldn\'t connect to node ' + host + '.');
    },
    InvalidProvider: () => {
        return new Error('Provider not set or invalid');
    },
    InvalidResponse: (result) => {
        var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
        return new Error(message);
    },
    ConnectionTimeout:(ms) => {
        return new Error('CONNECTION TIMEOUT: timeout of ' + ms + 'ms achived');
    }
}