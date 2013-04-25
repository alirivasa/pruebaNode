"use strict";

module.exports = function(grunt){

	var SRC_DIR ='src/',
		SCRIPTS_DIR = SRC_DIR + 'lib/',
		ALL_STYLES= SRC_DIR + 'css/**/*.css';
	grunt.initConfig({
		csslint:{
			all:{
				files:{
					src:[ALL_STYLES]
				}
			}
		},
		jshint:{
			all:{
				files:{
					src:[SCRIPTS_DIR+'**/*.js','Gruntfile.js']
				}
			}			
		}
		/*concat:{
			options:{
			
			},
			foo:{
				options:{
				},
				files:{
					//Ej:1
					"dist/todo-a.js": ['src/a/*.js','src/a/*.json']
					//Ej:2
					src:['src/*.js','src/*.json'],
					dest:"dist/todo.js",
					filter:function (filepath){
						return true;
					}
					//Ej:3
					src:['a/*.js','a/*.json'],
					dest:"dist/todo-a.js",
					expand: true,
					flatten:true,
					rename:function(destPath, srcPath){
						return newPath;
					},
					ext:"",
					cwd:"src/"
				},
			},
			bar:{
			}
		},
		minification:{
		}*/
	});
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default',['csslint','jshint']);
};