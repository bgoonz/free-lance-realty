/*
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v3.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
 */
!((e, t) => {
  if ( 'object' == typeof exports && 'undefined' != typeof module ) {
    module.exports = t();
  } else {
    if ( 'function' == typeof define && define.amd ) {
      define( t );
    } else {
      ( e = 'undefined' != typeof globalThis ? globalThis : e || self ).noframe = t();
    };
  };
})(this, () => {
  function t(...args) {
    for ( var e = 0, t = 0, o = args.length; t < o; t++ ) e += args[ t ].length;
    for ( var n = Array( e ), i = 0, t = 0; t < o; t++ )
      for ( let f = args[ t ], r = 0, d = f.length; r < d; r++, i++ ) n[ i ] = f[ r ];
    return n;
  }
  return (e, a) => {
    return ( 'string' == typeof e ? t( document.querySelectorAll( e ) ) : 'length' in e ? t( e ) : [ e ] ).forEach( e => {
      let t;
      let o;
      let n;
      const i = void 0 !== a && document.querySelector( a );
      const f = i ? document.querySelector( a ) : e.parentElement;
      const r = e.offsetHeight;
      const d = e.offsetWidth;
      const l = e.style;
      i
        ?
        ( ( t = window.getComputedStyle( f, null ).getPropertyValue( 'max-width' ) ),
          ( l.width = '100%' ),
          ( l.maxHeight = `calc(${t} * ${r} / ${d})` ) ) :
        ( ( l.display = 'block' ),
          ( l.marginLeft = 'auto' ),
          ( l.marginRight = 'auto' ),
          ( o = d > f.offsetWidth ? f.offsetWidth : d ),
          ( n = d > f.offsetWidth ? ( o * r ) / d : d * ( r / d ) ),
          ( l.maxHeight = `${n}px` ),
          ( l.width = `${o}px` ) );
      const u = ( 100 * r ) / d;
      ( l.height = `${u}vw` ), ( l.maxWidth = '100%' );
    } );
  };
});
