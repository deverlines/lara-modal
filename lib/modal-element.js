class ModalElement {

    /**
     * @param {string} name
     * @param {HTMLElement} body
     */
    constructor(name, body) {

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
            header: document.createElement('div'),
            content: document.createElement('div'),
            footer: document.createElement('div'),
            background: document.createElement('div'),
        };

        this.element.modal.style.display = 'none';

        this.element.modal.setAttribute('type', 'modal');
        this.element.wrapper.setAttribute('type', 'wrapper');
        this.element.box.setAttribute('type', 'box');
        this.element.body.setAttribute('type', 'body');
        this.element.bodyWrapper.setAttribute('type', 'bodyWrapper');
        this.element.bodyContent.setAttribute('type', 'bodyContent');
        this.element.header.setAttribute('type', 'header');
        this.element.content.setAttribute('type', 'content');
        this.element.footer.setAttribute('type', 'footer');
        this.element.background.setAttribute('type', 'background');

        this.element.modal.classList.add('lara-modal');
        this.element.wrapper.classList.add('lara-modal_wrapper');
        this.element.box.classList.add('lara-modal_box');
        this.element.body.classList.add('lara-modal_body');
        this.element.bodyWrapper.classList.add('lara-modal_body_wrapper');
        this.element.bodyContent.classList.add('lara-modal_body_content');
        this.element.header.classList.add('lara-modal_header');
        this.element.content.classList.add('lara-modal_content');
        this.element.footer.classList.add('lara-modal_footer');
        this.element.background.classList.add('lara-modal_background');

        this.element.modal.appendChild(this.element.wrapper);
        this.element.wrapper.appendChild(this.element.box);
        this.element.box.appendChild(this.element.body);
        this.element.body.appendChild(this.element.bodyWrapper);
        this.element.bodyWrapper.appendChild(this.element.bodyContent);
        this.element.bodyContent.appendChild(this.element.header);
        this.element.bodyContent.appendChild(this.element.content);
        this.element.bodyContent.appendChild(this.element.footer);

        this.element.modal.classList.add(`lara-modal--${this.name}`);

        this.element.wrapper.appendChild(this.element.background);

        if (this.content instanceof Element)
            this.element.content.appendChild(this.content);

        this.body.appendChild(this.element.modal);

    }

}

export default ModalElement