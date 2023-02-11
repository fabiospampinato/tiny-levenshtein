
/* IMPORT */

import benchmark from 'benchloop';
import levenshtein from '../dist/index.js';

/* MAIN */

benchmark ({
  name: 'short',
  iterations: 100000,
  fn: () => {
    levenshtein ( 'distance', 'difference' );
  }
});

benchmark ({
  name: 'long',
  iterations: 10,
  fn: () => {
    levenshtein ( 'distance'.repeat ( 100 ), 'difference'.repeat ( 100 ) );
  }
});

benchmark.summary ();
