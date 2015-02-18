/**
 *
 */

(function (document) {
	'$:nomunge';

	var name = 'dump',
		global = this,
		old$ = global.$,
		oldN = global[name];

	global.$ = global[name] = $;

	var colors = [
		{name: 'blue', value: {background: 'none', color: '#678CB1'}},
		{name: 'red', value: {background: 'none', color: '#EC7600'}},
		{name: 'green', value: {background: 'none', color: '#93C763'}},
		{name: 'white', value: {background: 'none', color: '#FFFFFF'}}
	];

	for (var i = 0; i < colors.length; i++) {
		var key = colors[i].name;

		global[name][key] = dumpFactory(colors[i]); // eval(key);
	}

	function dumpFactory(obj) {
		var d = obj;
		console.log(d);
		return function (data, d) {
			//console.log('%c ' + data, 'background: none; color: #678CB1');
			console.log(data);
			console.log(d);
			return data;
		};
	}

	function $(data) {
		console.log(data);
		return data;
	}

	function blue(data) {
		console.log('%c ' + data, 'background: none; color: #678CB1');
		return data;
	}

	function red(data) {
		console.log('%c ' + data, 'background: none; color: #EC7600');
		return data;
	}

	function green(data) {
		console.log('%c ' + data, 'background: none; color: #93C763');
		return data;
	}

	function white(data) {
		console.log('%c ' + data, 'background: none; color: #FFFFFF');
		return data;
	}

	$.noConflict = function (all) {
		if (all) {
			global[name] = oldN;
		}
		global.$ = old$;
		return $;
	};

})(document);

dump('some data 1');
dump.red('some data red');
dump.blue('some data blue');
dump.green('some data green');
dump.white('some data green');