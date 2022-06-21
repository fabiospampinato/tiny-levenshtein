
/* IMPORT */

import benchmark from 'benchloop';
import {distance as fastestLevenshtein} from 'fastest-levenshtein';
import tinyLevenshtein from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  log: 'compact'
});

for ( const [name, fn] of [['tiny-levenshtein', tinyLevenshtein], ['fastest-levenshtein', fastestLevenshtein]] ) {

  benchmark.group ( name, () => {

    benchmark ({
      name: 'short',
      iterations: 100000,
      fn: () => {
       fn ( 'distance', 'difference' );
      }
    });

    benchmark ({
      name: 'long',
      iterations: 10,
      fn: () => {
       fn ( 'distance'.repeat ( 100 ), 'difference'.repeat ( 100 ) );
      }
    });

  });

}
