
/* IMPORT */

import Matrix from './matrix';

/* MAIN */

//URL: https://en.wikipedia.org/wiki/Levenshtein_distance

const levenshtein = ( a: string, b: string ): number => {

  /* EQUALITY CHECK */

  if ( a === b ) return 0;

  /* COMMON PREFIX TRIM */

  let start = 0;
  let aEnd = a.length - 1;
  let bEnd = b.length - 1;

  while ( start <= aEnd && start <= bEnd ) {

    if ( a.charCodeAt ( start ) !== b.charCodeAt ( start ) ) break;

    start += 1;

  }

  /* COMMON SUFFIX TRIM */

  while ( aEnd >= start && bEnd >= start ) {

    if ( a.charCodeAt ( aEnd ) !== b.charCodeAt ( bEnd ) ) break;

    aEnd -= 1;
    bEnd -= 1;

  }

  /* LENGTHS CALCULATION */

  const aLength = aEnd - start + 1;
  const bLength = bEnd - start + 1;

  /* ZERO-WIDTH CHECK */

  if ( !aLength ) return bLength;

  if ( !bLength ) return aLength;

  /* POPULATING MATRIX */

  const maxDistance = Math.max ( aLength, bLength );
  const Buffer = ( maxDistance < 255 ? Uint8Array : ( maxDistance < 65535 ? Uint16Array : Uint32Array ) );
  const matrix = new Matrix ( aLength + 1, bLength + 1, Buffer );

  for ( let i = 1, l = aLength; i <= l; i++ ) {

    matrix.set ( i, 0, i );

  }

  for ( let i = 1, l = bLength; i <= l; i++ ) {

    matrix.set ( 0, i, i );

  }

  for ( let i = 1; i <= aLength; i++ ) {

    for ( let j = 1; j <= bLength; j++ ) {

      const cost = ( a.charCodeAt ( start + i - 1 ) === b.charCodeAt ( start + j - 1 ) ) ? 0 : 1;
      const deletion = matrix.get ( i - 1, j ) + 1;
      const insertion = matrix.get ( i, j - 1 ) + 1;
      const substitution = matrix.get ( i - 1, j - 1 ) + cost;
      const value = Math.min ( deletion, insertion, substitution );

      matrix.set ( i, j, value );

    }

  }

  /* RETURN */

  const distance = matrix.get ( aLength, bLength );

  return distance;

};

export default levenshtein;
