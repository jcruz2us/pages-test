// Generated on 2013-10-07 using generator-webapp 0.4.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// configurable paths
		pkg: grunt.file.readJSON('package.json'),
		yeoman: {
			app: 'app',
			dist: 'dist'
		},
		clean: {
			dist: 'dist',
			docs: 'docs'
		},
		coffee: {
			dist: {
				options: {
					join: true
				},
				files: [
				{
					expand: true,
					cwd: 'scripts',
					src: ['{,*/}*.coffee'],
					dest: 'dist',
					ext: '.js'
				}]
			}
		},
		docco: {
			plugin: {
				options: {
					//layout: 'linear',
					output: 'docs/<%= pkg.version %>/'
				},
				files: {
					src: ['scripts/*.coffee']
				}
			}
		}
	});

	grunt.registerTask('build', [
		'docco'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};
