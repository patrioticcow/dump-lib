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

		global[name][key] = dumpFactory(i); // eval(key);
	}

	function dumpFactory(i) {
		var color = colors[i];
		return function (data) {
			console.log('%c ' + data, 'background: ' + color.value.background + '; color: ' + color.value.color);
			return data;
		};
	}

	function $(data) {
		console.log(data);
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
dump.blue('some data blue');
dump.blue('some data blue');
dump.green('some data green');
dump.white('some data green');
dump.white('some data green');
dump.white('some data green');