class ModalElement {

    /**
     * @param {string} name
     * @param {HTMLElement} body
     */
    constructor(name, body) {

        /**
         *
         * @type {{bodyWrapper: HTMLDivElement, closeButtonLine1: HTMLDivElement, closeButtonLine2: HTMLDivElement,
         *     background: HTMLDivElement, closeButton: HTMLDivElement, wrapper: HTMLDivElement, box: HTMLDivElement,
         *     bodyContent: HTMLDivElement, body: HTMLDivElement, modal: HTMLDivElement, content: HTMLDivElement}}
         */
        this.element = {};

        this.name = name;
        this.content = null;
        this.body = body;

    }

    getElement() {
        return this.element.modal;
    }

    /**
     *
     * @param {HTMLElement|string}content
     */
    setContent(content) {

        if (content instanceof HTMLElement) {
            this.content = content;
            return this;
        }

        let element = document.createElement('div');
        element.innerHTML = content;

        this.content = element.firstElementChild;

        if (this.element.content.firstElementChild !== null)
            this.element.content.firstElementChild.remove();

        this.element.content.appendChild(this.content);

    }

    show() {
        this.element.modal.style.display = '';
    }

    hide() {
        this.element.modal.style.display = 'none';
    }

    create() {

        this.element = {
            modal: document.createElement('div'),
            wrapper: document.createElement('div'),
            box: document.createElement('div'),
            body: document.createElement('div'),
            bodyWrapper: document.createElement('div'),
            bodyContent: document.createElement('div'),
            content: document.createElement('div'),
            background: document.createElement('div'),
            closeButton: document.createElement('div'),
            closeButtonBox: document.createElement('div'),
            closeButtonLine1: document.createElement('div'),
            closeButtonLine2: document.createElement('div')
        };

        this.element.modal.style.display = 'none';

        this.element.modal.setAttribute('type', 'modal');
        this.element.wrapper.setAttribute('type', 'wrapper');
        this.element.box.setAttribute('type', 'box');
        this.element.body.setAttribute('type', 'body');
        this.element.bodyWrapper.setAttribute('type', 'body-wrapper');
        this.element.bodyContent.setAttribute('type', 'body-content');
        this.element.content.setAttribute('type', 'content');
        this.element.background.setAttribute('type', 'background');
        this.element.closeButton.setAttribute('type', 'close-button');
        this.element.closeButtonBox.setAttribute('type', 'close-button_box');
        this.element.closeButtonLine1.setAttribute('type', 'close-button-line');
        this.element.closeButtonLine2.setAttribute('type', 'close-button-line');

        this.element.modal.classList.add('lara-modal');
        this.element.wrapper.classList.add('lara-modal_wrapper');
        this.element.box.classList.add('lara-modal_box');
        this.element.body.classList.add('lara-modal_body');
        this.element.bodyWrapper.classList.add('lara-modal_body_wrapper');
        this.element.bodyContent.classList.add('lara-modal_body_content');
        this.element.content.classList.add('lara-modal_content');
        this.element.background.classList.add('lara-modal_background');
        this.element.closeButton.classList.add('lara-modal_close-button');
        this.element.closeButtonBox.classList.add('lara-modal_close-button_box');
        this.element.closeButtonLine1.classList.add('_line');
        this.element.closeButtonLine1.classList.add('_line--1');
        this.element.closeButtonLine2.classList.add('_line');
        this.element.closeButtonLine2.classList.add('_line--2');

        this.element.modal.appendChild(this.element.wrapper);
        this.element.wrapper.appendChild(this.element.box);
        this.element.box.appendChild(this.element.body);
        this.element.box.appendChild(this.element.closeButton);
        this.element.body.appendChild(this.element.bodyWrapper);
        this.element.bodyWrapper.appendChild(this.element.bodyContent);
        this.element.bodyContent.appendChild(this.element.content);

        this.element.closeButton.appendChild(this.element.closeButtonBox);
        this.element.closeButtonBox.appendChild(this.element.closeButtonLine1);
        this.element.closeButtonBox.appendChild(this.element.closeButtonLine2);

        this.element.modal.classList.add(`lara-modal--${this.name}`);

        this.element.wrapper.appendChild(this.element.background);

        if (this.content instanceof Element)
            this.element.content.appendChild(this.content);

        this.body.appendChild(this.element.modal);

    }

}

export default ModalElement;