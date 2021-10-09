class _Logger {
    private formatMessage(message: string) {
        return "Trunks-core : " + message + "\n"
    }

    debug(message: string, additionnal?: object){
        console.log(this.formatMessage(message), JSON.stringify(additionnal));
        // TODO: CallJS Hook
    }

    error(message: string, additionnal?: object){
        console.error(this.formatMessage(message), JSON.stringify(additionnal));
        const err = new Error();
        const stackTrace = err.stack;

        window.TRUNKS.sendEvent("error", JSON.stringify({message, additionnal, stackTrace}))
    }

}

export const Logger = new _Logger();
