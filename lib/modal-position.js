class ModalPosition {

    /**
     *
     * @param {HTMLElement} html
     * @param {HTMLElement} body
     * @param {ModalElement} modalElement
     */
    constructor(html, body, modalElement) {

        this.html = html;
        this.body = body;
        this.modalElement = modalElement;

    }

    /**
     *
     * @returns {NodeListOf<Element>}
     */
    getFixedElements() {
        return document.querySelectorAll('[fixed-element]');
    }

    onUpdateSize() {

        if (!this.html.classList.contains('lara-modals-container-fixed'))
            return;

        const needScrollHeight = this.modalElement.element.wrapper.scrollHeight >= this.modalElement.element.wrapper.clientHeight;
        const needScrollWidth = this.modalElement.element.wrapper.scrollWidth >= this.modalElement.element.wrapper.clientWidth;

        if (needScrollHeight) {
            this.html.classList.remove('lara-modals-container-fixed--scroll-y');
        } else {
            if (this.html.clientHeight < this.body.clientHeight) {
                this.html.classList.add('lara-modals-container-fixed--scroll-y');
            } else {
                this.html.classList.remove('lara-modals-container-fixed--scroll-y');
            }
        }

        if (needScrollWidth) {
            this.html.classList.remove('lara-modals-container-fixed--scroll-x');
        } else {
            if (this.html.clientWidth < this.body.clientWidth) {
                this.html.classList.add('lara-modals-container-fixed--scroll-x');
            } else {
                this.html.classList.remove('lara-modals-container-fixed--scroll-x');
            }
        }

        setTimeout(() => {

            this.fixFixedElements(this.html.clientWidth, needScrollHeight);

            if (this.modalElement.element.box.clientHeight > this.html.clientHeight) {
                this.modalElement.element.box.classList.add('lara-modal_box--top');
            } else {
                this.modalElement.element.box.classList.remove('lara-modal_box--top');
            }

            if (this.modalElement.element.box.clientWidth > this.html.clientWidth) {
                this.modalElement.element.box.classList.add('lara-modal_box--left');
            } else {
                this.modalElement.element.box.classList.remove('lara-modal_box--left');
            }

        }, 0);

    }

    fixFixedElements(htmlWidth, needScrollHeight) {

        const fixedElements = this.getFixedElements();

        let diff = this.html.clientWidth - this.html.clientWidth;

        if (fixedElements.length === 0)
            return;

        if (!needScrollHeight) {

            for (let element of fixedElements) {
                element.style.left = ``;
            }

            return;
        }

        if (diff < 0) {

            diff = Math.abs(diff);

            for (let element of fixedElements) {
                element.style.left = `-${diff}px`;
            }

        }

    }

    fixedHtml() {

        this.onUpdateSize();

        if (this.windowHasEvent === undefined) {

            this.windowHasEvent = true;

            window.addEventListener('resize', () => {
                this.onUpdateSize();
            });

        }

    }

}

export default ModalPosition;