module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({

		webpack: {
			intro: {
				// webpack options
				entry: './resources/assets/components/app.jsx',
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
				src: 'src/styles/app.css',
				dest: 'assets/styles/app.css'
			}
		},

		watch: {
			javascript: {
				files: [
					'resources/assets/components/**/*.js',
					'resources/assets/components/**/*.jsx'
				],
				tasks: ['webpack']
			},
			styles: {
				files: ['resources/assets/styles/app.css'],
				tasks: ['postcss']
			}
		}

	});

	grunt.registerTask('default', ['watch']);
}
