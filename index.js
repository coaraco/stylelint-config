'use strict';

module.exports = {
	rules: {
		'annotation-no-unknown': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return', 'use', 'forward'],
			},
		],
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'custom-property-no-missing-var-function': true,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: ['const', 'math.div'],
			},
		],
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'media-feature-name-no-unknown': true,
		'named-grid-areas-no-invalid': true,
		'no-descending-specificity': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: ['use', 'forward'],
			},
		],
		'no-irregular-whitespace': true,
		'property-no-unknown': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements'],
				ignoreTypes: ['icon', '/^[a-zA-Z]([a-zA-Z0-9]*-[a-zA-Z0-9]+)+/'],
			},
		],
		'string-no-newline': true,
		'unit-no-unknown': true,
	},
};
