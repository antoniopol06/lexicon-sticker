import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './LexiconSticker.soy';

/**
 * Implementation of the Lexicon Sticker Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/badges-and-labels/|Lexicon Definition}
 */
class LexiconSticker extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconSticker.STATE = {
	/**
	 * Label of the Sticker
	 * @default undefined
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	label: {
		validator: core.isString
	},

	/**
	 * Level of the Sticker
	 * @default default
	 * @description Values are allowed: 'default', 'primary', 'success, 'info', 'warning' and 'danger'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	level: {
		validator: core.isString,
		value: 'default'
	},

	/**
	 * Outside of the Sticker
	 * @default false
	 * @instance
	 * @memberof LexiconSticker
	 * @type {boolean}
	 */
	outside: {
		validator: core.isBoolean,
		value: false
	},

	/**
	 * Position of the sticker
	 * @default undefined
	 * @description Values are allowed: 'top-left', 'top-right', 'bottom-left' and 'bottom-right'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	position: {
		validator: core.isString
	},

	/**
	 * Shape of the Sticker
	 * @default square
	 * @description Values are allowed: 'square', 'circle' and 'rounded'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	shape: {
		validator: core.isString,
		value: 'square'
	},

	/**
	 * Size of the Sticker
	 * @default undefined
	 * @description Values are allowed: 'sm' and 'lg'
	 * @instance
	 * @memberof LexiconSticker
	 * @type {string}
	 */
	size: {
		validator: core.isString
	},

	/**
	 * Static of the Sticker
	 * @default false
	 * @instance
	 * @memberof LexiconSticker
	 * @type {boolean}
	 */
	static: {
		validator: core.isBoolean,
		value: false
	}
};

// Register component
Soy.register(LexiconSticker, templates);

export default LexiconSticker;