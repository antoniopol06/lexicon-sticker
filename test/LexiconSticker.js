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

	it('should generate sticker with level as primary', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				level: 'primary'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerLevel.html']);
	});

	it('should generate sticker with outside', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				outside: true,
				position: 'top-right'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerOutside.html']);
	});

	it('should generate sticker with position', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				position: 'bottom-right'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerPosition.html']);
	});

	it('should generate sticker with shape', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				shape: 'rounded'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerShape.html']);
	});

	it('should generate sticker with size', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				size: 'lg'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerSize.html']);
	});

	it('should generate static sticker', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				static: true
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerStatic.html']);
	});

	it('should generate sticker with custom css', function() {
		sticker = new LexiconSticker(
			{
				label: '123',
				elementClasses: 'my-custom-css'
			}
		);

		assert.strictEqual(sticker.element.outerHTML, __html__['test/fixture/testLexiconStickerCustomCss.html']);
	});

});
