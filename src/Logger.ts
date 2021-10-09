class _Logger {
    private formatMessage(message: string) {
        return "Trunks-core : " + message + "\n"
    }

    public debug(message: string, additionnal?: object){
        if (window.TRUNKS.debugMode)
            console.log(this.formatMessage(message), JSON.stringify(additionnal));
    }

    public log(message: string, additionnal?: object) {
        console.log(this.formatMessage(message), JSON.stringify(additionnal));
    }

    public warn(message: string, additionnal?: object) {
        console.warn(this.formatMessage(message), JSON.stringify(additionnal));
    }

    public error(message: string, additionnal?: object){
        console.error(this.formatMessage(message), JSON.stringify(additionnal));
        const err = new Error();
        const stackTrace = err.stack;

        window.TRUNKS.sendEvent("error", JSON.stringify({message, additionnal, stackTrace}))
    }
}

export const Logger = new _Logger();
