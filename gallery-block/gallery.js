'use strict';

class Gallery {
    constructor(options) {
        this._el = options.el;
        this._thumbs = this._el.querySelector('#thumbs');

        this._thumbs.addEventListener('click', this._onImageClick.bind(this));
    }

    _onImageClick(event) {
        event.preventDefault();

        let bigImage = this._el.querySelector('#largeImg');
        let smallImage = event.target.closest('a');
        let newAddressOfBigImg = smallImage.getAttribute('href');
        if (!smallImage) return;

        bigImage.setAttribute('src', newAddressOfBigImg);
    }
}
