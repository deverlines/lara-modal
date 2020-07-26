import Axios from "axios";

class ModalRequest {

    constructor(url) {

        this.url = url;

        this.request();

        /**
         *
         * @type {{headers: Object, request: XMLHttpRequest, data: Object|string, statusText: string, config: Object, status: int}}
         */
        this.response = {};

        this.onResponseCallables = [];

    }

    request() {

        (async () => {
            try {

                this.response = await Axios.get(this.url);

                this.onResponseCallables.forEach(callable => {
                    callable();
                });

            } catch (e) {

                console.error(e.stack);

            }
        })();

    }

    onResponse(callable) {
        this.onResponseCallables.push(callable);
    }

}

export default ModalRequest;
