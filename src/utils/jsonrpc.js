export default class Jsonrpc {
    constructor() {
        messageId: 0
    }

    static toPayload(method, params) {
        if (!method) {
            console.error('jsonrpc method should be specified')
        }
        Jsonrpc.messageId++;
        return {
            jsonrpc: '2.0',
            id: Jsonrpc.messageId,
            method: method,
            params: params || []
        };
    }

    static isValidResponse(response) {
        return Array.isArray(response) ? response.every(validateSingleMessage) : this.validateSingleMessage(response);
    }

    static validateSingleMessage(message) {
        return !!message &&
            !message.error &&
            message.jsonrpc === '2.0' &&
            typeof message.id === 'number' &&
            message.result !== undefined;
    }

    static toBatchPayload(message) {
        return message.map((message) => {
            return toPayload(message.method, message.params);
        });
    }
}