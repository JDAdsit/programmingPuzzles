// this file is used by Jasmine in standalone test runs
require.config({
	// app dir, relative to the SpecRunner file
	deps: ['SpecMain'],

	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module

	use: {
		'jquery': {
			attach: '$'
		},

		jasmine: {
			attach: 'jasmine'
		},

		'jasmine-html': {
			deps: ['jasmine'],
			attach: 'jasmine'
		}
	},

	//Define paths to dependencies
	paths: {
		// Libraries
		jquery: '../lib/jquery-1.7.1.min',
		jasmine: '../lib/jasmine-1.3.1/jasmine',
		'jasmine-html': '../lib/jasmine-1.3.1/jasmine-html',

		// Shim plugin
		use: '../lib/use'
	}
});
