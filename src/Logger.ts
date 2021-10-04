
class _Logger {
    private formatMessage(message: string) {
        return "Trunks-core : " + message + "\n"
    }

    debug(message: string, additionnal?: object){
        console.debug(this.formatMessage(message), JSON.stringify(additionnal));
        // TODO: CallJS Hook
    }

    error(message: string, additionnal?: object){
        console.error(this.formatMessage(message), JSON.stringify(additionnal));
        // const err = new Error();
        // const stackTrace = err.stack;
        // TODO: CallJS Hook
    }

}

export const Logger = new _Logger();
