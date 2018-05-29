import errors from './errors';
import Jsonrpc from './jsonrpc';


export default class requestManage {
    constructor(provider) {
        this.provider = provider;
    }

    send(data,callback) {
    if(!this.provider){
        callback(errors.InvalidProvider());
    }
    var payload = Jsonrpc.toPayload(data.method,data.params);
    var result = this.provider.send(payload,(err,result) => {
        if(err){
            callback(err);
        }
        if(!Jsonrpc.isValidResponse(result)){
            callback(errors.InvalidResponse(result));
        }
        callback(null,result.result);
    });
    }
}