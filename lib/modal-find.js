class ModalFind {

    /**
     *
     * @param {HTMLElement} element
     * @param {function} modalClass
     * @returns {void}
     */
    constructor(element, modalClass) {

        /**
         *
         * @type {NodeListOf<HTMLElementTagNameMap[string]> | NodeListOf<Element>}
         */
        let modalsElements = element.querySelectorAll('[lara-modal]');

        /**
         *
         * @type {Object.<string, Modal>}
         */
        this.modals = {};

        for (let modalElement of modalsElements) {

            if (modalElement.getAttribute('discover') === null)
                continue;

            /**
             *
             * @type {string}
             */
            let name = modalElement.getAttribute('lara-modal');

            /**
             *
             * @type {string}
             */
            let mode = modalElement.getAttribute('mode');

            switch (mode) {

                case 'html':

                    this.modals[name] = new modalClass({
                        name: name,
                        mode: mode,
                        element: modalElement
                    });

                    break;

                case 'preload':

                    this.modals[name] = new modalClass({
                        name: name,
                        mode: mode,
                        element: modalElement
                    });

                    break;

            }

        }

    }

}

export default ModalFind;
