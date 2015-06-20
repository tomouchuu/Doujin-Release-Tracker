module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({

		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ['node_modules/bootstrap/dist/fonts/*'], dest: 'public/assets/fonts/', filter: 'isFile'},
					{expand: true, flatten: true, src: ['node_modules/datatables/media/images/*'], dest: 'public/assets/images/', filter: 'isFile'},
				],
			},
		},

		webpack: {
			intro: {
				// webpack options
				entry: './resources/assets/js/app.js',
				output: {
					path: './public/assets/js',
					filename: 'app.js'
				},
				module: {
					loaders: [
						{
							test: /\.jsx?$/,
							exclude: /node_modules/,
							loader: 'babel-loader'
						}
					]
				},

				failOnError: true
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('lost'),
					require('postcss-nested'),
					require('postcss-import'),
					require('postcss-brand-colors'),
					require('autoprefixer-core')({browsers: 'last 1 version'}),
					require('csswring')
				]
			},
			dist: {
				src: 'resources/assets/css/app.css',
				dest: 'public/assets/css/app.css'
			}
		},

		watch: {
			javascript: {
				files: [
					'resources/assets/js/**/*.js'
				],
				tasks: ['webpack']
			},
			styles: {
				files: ['resources/assets/css/app.css'],
				tasks: ['postcss']
			}
		}

	});

	grunt.registerTask('default', ['watch']);
}
