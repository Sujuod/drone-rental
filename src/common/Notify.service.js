class NotifyService {
    constructor() {
        this.notify = null;
    }
    register = (notify) => {
        this.notify = notify;
    }

    show = (msg, type) => {
        this.notify.show(true, msg, type);
    }
    hide = () => {
        this.notify.show(false);

    }
}

const notify = new NotifyService();
export { notify };