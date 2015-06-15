# dump-lib

This is a helper library that replaces console.log() adding some more flair to it

Easy to hack and customize, dump-lib is very small and intuitive


## How to

include `dump-lib.js` in the head then use `dump()` instead of `console.log()`

```
dump.blue('dump.blue');
dump.red('dump.red');
dump.green('dump.green');
dump.white('dump.white');
dump.black('dump.black');
dump.turq('dump.turq');
dump.yellow('dump.yellow');
dump.danger('dump.danger');
dump.warning('dump.warning');
dump.info('dump.info');
dump.success('dump.success');
dump.primary('dump.primary');
dump.primary2x('dump.primary2x');
dump.primary3x('dump.primary3x');
dump.primary4x('dump.primary4x');
dump.primary5x('dump.primary5x');
dump.primary6x('dump.primary6x');
```

![Image of Yaktocat](https://github.com/patrioticcow/dump-lib/blob/master/img/screen_a.png)

![Image of Yaktocat](https://github.com/patrioticcow/dump-lib/blob/master/img/screen_b.png)

## How to change the colors

The colors are represented by an object: `{name: 'blue', value: {background: 'none', color: '#170591'}}` 

Same for the different sizes: `{name: '2x', value: '14'}` 

## Hack away

## MIT licence
