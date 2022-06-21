
/* MAIN */

//TODO: Maybe publish this as uint-matrix or typed-matrix or something

class Matrix {

  /* VARIABLES */

  private rows: number;
  private columns: number;
  private buffer: Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

  /* CONSTRUCTOR */

  constructor ( rows: number, columns: number, Buffer: Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor = Uint32Array ) {

    this.rows = rows;
    this.columns = columns;
    this.buffer = new Buffer ( this.rows * this.columns );

  }

  /* API */

  get ( row: number, column: number ): number {

    const index = ( row * this.columns ) + column;

    return this.buffer[index];

  }

  set ( row: number, column: number, value: number ): number {

    const index = ( row * this.columns ) + column;

    return this.buffer[index] = value;

  }

  reset (): void {

    this.buffer.fill ( 0 );

  }

}

/* EXPORT */

export default Matrix;
