/**
 * name: dump-lib
 * version: 0.0.7
 * developer: Cristi Catea
 * website: massinflux.com
 * github: https://github.com/patrioticcow/dump-lib
 */

(function (document) {
	'$:nomunge';

	var name = 'dump',
		global = this,
		old$ = global.$,
		oldN = global[name];

	global.$ = global[name] = $;

	var colors = [
		{name: 'blue', value: {background: 'none', color: '#170591'}},
		{name: 'red', value: {background: 'none', color: '#7F0055'}},
		{name: 'green', value: {background: 'none', color: '#47A447'}},
		{name: 'white', value: {background: 'none', color: '#FFFFFF'}},
		{name: 'black', value: {background: 'none', color: '#000000'}},
		{name: 'turq', value: {background: 'none', color: '#00D0D0'}},
		{name: 'yellow', value: {background: 'none', color: '#FFFF00'}},
		{name: 'danger', value: {background: 'none', color: '#D9534F'}},
		{name: 'warning', value: {background: 'none', color: '#F0AD4E'}},
		{name: 'info', value: {background: 'none', color: '#5BC0DE'}},
		{name: 'success', value: {background: 'none', color: '#5CB85C'}},
		{name: 'primary', value: {background: 'none', color: '#337AB7'}}
	];

	var sizes = [
		{name: '2x', value: '14'},
		{name: '3x', value: '18'},
		{name: '4x', value: '24'},
		{name: '5x', value: '30'},
		{name: '6x', value: '36'}
	];

	for (var i = 0; i < colors.length; i++) {
		var key = colors[i].name;

		global[name][key] = dumpFactory(i);

		for (var j = 0; j < sizes.length; j++) {
			global[name][key + sizes[j].name] = dumpFactorySize(i, sizes[j].value);
		}
	}

	function dumpFactory(i) {
		var color = colors[i];
		return function (data) {
			console.log('%c ' + data, 'background: ' + color.value.background + '; color: ' + color.value.color);
			return data;
		};
	}

	function dumpFactorySize(i, j) {
		var color = colors[i];

		return function (data) {
			console.log('%c ' + data, 'background: ' + color.value.background + '; color: ' + color.value.color + ';font-size:' + j + 'px');
			return data;
		};
	}

	function $(data) {
		console.log(data);
		return data;
	}

	$.noConflict = function (all) {
		if (all) global[name] = oldN;
		global.$ = old$;
		return $;
	};

})(document);