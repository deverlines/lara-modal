import ModalFind from './modal-find';
import ModalElement from './modal-element';
import ModalPosition from './modal-position';
import ModalRequest from './modal-request';

window.LaraModals = {};

class Modal {

    /**
     * @typedef modalParams
     * @type {object}
     * @property {string} name
     * @property {string} mode
     * @property {HTMLElement} element
     * @property {HTMLElement|undefined|string} content
     */

    /**
     *
     * @param {modalParams} params
     * @returns {Modal}
     */
    constructor(params) {

        /**
         *
         * @type {modalParams}
         */
        this.params = params;

        /**
         *
         * @type {string}
         */
        this.name = params.name;

        if (params.name === undefined) {
            console.error(new Error('lara-modal doesn\'t have name').stack);
            return this;
        }

        if (window.LaraModals[this.name] !== undefined) {
            console.warn(new Error(`lara-modal ${this.name} already isset`).stack);
            return window.LaraModals[this.name];
        }

        window.LaraModals[this.name] = this;

        /**
         *
         * @type {HTMLElement}
         */
        this.element = params.element;

        /**
         *
         * @type {boolean}
         */
        this.isShow = false;

        /**
         *
         * @type {Element|HTMLElement|string|null}
         */
        this.content = params.content !== undefined ? params.content : null;

        /**
         *
         * @type {HTMLElement}
         */
        this.body = document.body;

        /**
         *
         * @type {HTMLElement}
         */
        this.html = document.documentElement;

        /**
         * @type {string} html, ajax, preload, script
         */
        this.mode = this.params.mode !== undefined ? this.params.mode : 'script';

        this.initialize();

    }

    /**
     *
     * @returns {function}
     */
    static getClass() {
        return Modal;
    }

    /**
     *
     * @param {HTMLElement} element
     * @returns {ModalFind}
     */
    static find(element = null) {
        return new ModalFind(element, this.getClass());
    }

    setPosition() {
        /**
         *
         * @type {ModalPosition}
         */
        this.position = new ModalPosition(this.html, this.body, this.modalElement);
    }

    initialize() {

        switch (this.mode) {

            case 'html':
                this.initializeModeHtml();
                break;
            case 'preload':
                this.initializeModePreload();
                break;
            case 'ajax':
                this.initializeModeAjax();
                break;
            case 'script':
                this.initializeModeScript();
                break;
            default:
                return console.error(new Error(`lara-modal mode ${this.mode} doesn\'t has`).stack);

        }

        this.createModalElement();

        this.setPosition();

        this.onInitialized();

    }

    /**
     *
     * @param {HTMLElement} element
     */
    findOpenButtons(element) {

        let buttons = element.querySelectorAll(`[lara-modal-open-button="${this.name}"]`);

        for (let button of buttons) {
            this.setOpenButton(button);
        }

    }

    /**
     *
     * @param {HTMLElement} button
     */
    setOpenButton(button) {

        if (button.getAttribute('initialized'))
            return;

        button.setAttribute('initialized', 'true');

        button.addEventListener('click', e => {
            e.preventDefault();

            this.show();

        });

    }

    createModalElement() {

        this.modalElement = new ModalElement(this.name, this.body);

        if (this.content != null) {
            this.modalElement.setContent(this.content);
        }

        this.modalElement.create();

        this.modalElement.element.modal.addEventListener('click', (e) => {
            if (e.target === this.modalElement.element.wrapper) {
                this.setHide();
            }
        });

        document.addEventListener('keydown', (e) => {

            if (this.isShow && e.code === 'Escape') {
                this.setHide();
            }

        });

        this.findOpenButtons(document.documentElement);

        this.onCreated();

    }

    initializeModeHtml() {

        this.content = this.element.firstElementChild;

    }

    setRequest() {

        /**
         * @type {ModalRequest}
         */
        this.request = new ModalRequest(this.url);

    }

    initializeModePreload() {

        this.url = this.element.getAttribute('url');

        this.setRequest();

        this.request.onResponse(() => {
            this.modalElement.setContent(this.request.response.data);

            this.onResponse(this.request.response.data);

        });

    }

    initializeModeScript() {

        /**
         *
         * @type {HTMLElement}
         */
        this.content = this.params.content !== undefined ? this.params.content : '';
    }

    initializeModeAjax() {

    }

    onShow() {

    }

    onHide() {

    }

    onCreated() {

    }

    onInitialized() {

    }

    onResponse(data) {

    }

    show(content = null) {

        switch (this.mode) {

            case 'html':
                this.setVisible();
                break;
            case 'preload':
                this.setVisible();
                break;
            case 'ajax':

                break;
            case 'script':

                if (content !== null) {

                    this.modalElement.content.innerHTML = '';

                    if (content instanceof Element) {
                        this.modalElement.content.appendChild(content);
                    } else if (typeof content === 'string') {
                        this.modalElement.content.innerHTML = content;
                    }

                }

                break;

        }

    }

    setVisible() {

        this.modalElement.show();

        this.scrollTop = this.html.scrollTop;
        this.html.style.top = `-${this.scrollTop}px`;
        this.html.classList.add('lara-modals-container-fixed');

        this.position.fixedHtml();

        this.modalElement.element.modal.classList.add('lara-modal--pre-show');

        setTimeout(() => {
            this.modalElement.element.modal.classList.add('lara-modal--show');

            setTimeout(() => {
                this.position.fixedHtml();

                this.isShow = true;
                this.onShow();

            }, 0);

        }, 0);

    }

    setHide() {

        this.modalElement.element.modal.classList.remove('lara-modal--show');

        setTimeout(() => {
            this.modalElement.element.modal.classList.remove('lara-modal--pre-show');

            for (let fixedElement of this.position.getFixedElements()) {
                fixedElement.style.left = ``;
            }

            this.html.classList.remove('lara-modals-container-fixed');
            this.html.classList.remove('lara-modals-container-fixed--scroll-y');
            this.modalElement.element.modal.classList.remove('lara-modal--show');

            this.html.style.top = ``;
            this.html.scrollTop = this.scrollTop;

            this.modalElement.hide();

            this.isShow = false;
            this.onHide();

        }, 250);

    }

}

export default Modal;
