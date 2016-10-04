'use strict';

import LexiconSticker from '../src/LexiconSticker';

let sticker;

describe('LexiconSticker', function() {
	afterEach(() => {
		if (sticker) {
			sticker.dispose();
		}
	});

	it('should generate default sticker markup defined by Lexicon', function() {
		sticker = new LexiconSticker(
			{
				label: '123'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testDefaultLexiconSticker.html']);
	});

	it('should render is updated when sticker´s STATE is changed', function(done) {
		sticker = new LexiconSticker(
			{
				label: '123'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testDefaultLexiconSticker.html']);

		sticker.setState({
			label: '321',
			level: 'primary'
		});

		setTimeout(function() {
			assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerUpdated.html']);
			done();
		}, 500);

	});

});
