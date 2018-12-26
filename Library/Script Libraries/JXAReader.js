//
//  JXAReader.js
//
//  Created by uchcode on 2016/05/28.
//  Copyright © 2016 uchcode. All rights reserved.
//

function read(fname) {
  function LibPath(fname, resourcePath) {
    return $(resourcePath + '/Script Libraries/' + fname).stringByStandardizingPath.js
  }
  const Finder = Application('Finder')
  var f
  f = LibPath(fname, $.NSBundle.mainBundle.resourcePath.js)
  if ( !Finder.exists( Path(f) ) ) {
    f = LibPath(fname, '~/Library')
    if ( !Finder.exists( Path(f) ) ) {
      f = LibPath(fname, '/Library')
      if ( !Finder.exists( Path(f) ) ) {
        throw `read('${fname}'): File not found.`
      }
    }
  }
  const p = $(f)
  const u = $.NSUTF8StringEncoding
  var   e = $()
  const c = $.NSString.stringWithContentsOfFileEncodingError(p, u, e).js
  if (e.js) throw $.NSString.stringWithFormat('%@', e).js
  return c
}
