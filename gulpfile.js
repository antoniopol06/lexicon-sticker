'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'sticker.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-sticker',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
