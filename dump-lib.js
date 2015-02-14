(function( document ) {
    '$:nomunge';

    var name = 'dump',
        global = this,
        old$ = global.$,
        oldN = global[name];

    global.$ = global[name] = $;

    global[name]['blue'] = blue;
    global[name]['red']  = red;
    
    function $( data ) {
        console.log(data);
        return data;
    }

    function blue( data ) {
        console.log('%c ' + data, 'background: blue; color: #bada55');
        return data;
    }

    function red( data ) {
        console.log('%c ' + data, 'background: red; color: #bada55');
        return data;
    }

    $.noConflict = function( all ) {
        if ( all ) {
            global[name] = oldN;
        }
        global.$ = old$;
        return $;
    };

})(document);

dump('some data 1');
dump.red('some data red');
dump.blue('some data blue');