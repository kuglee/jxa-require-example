//
//  Require.js
//
//  Created by uchcode on 2016/05/28.
//  Copyright © 2016 uchcode. All rights reserved.
//

function require(fname) {
  function LibPath(fname, resourcePath) {
    const l = '/Script Libraries/'
    const n = resourcePath + l + fname
    const p = $(n).pathExtension.js ? n : n+'.js'
    return $(p).stringByStandardizingPath.js
  }
  const Finder = Application('Finder')
  var f
  f = LibPath(fname, $.NSBundle.mainBundle.resourcePath.js)
  if ( !Finder.exists( Path(f) ) ) {
    f = LibPath(fname, '~/Library')
    if ( !Finder.exists( Path(f) ) ) {
      f = LibPath(fname, '/Library')
      if ( !Finder.exists( Path(f) ) ) {
        throw `File '${fname}.js' not found in libs.`
      }
    }
  }
  const p = $(f)
  const u = $.NSUTF8StringEncoding
  var   e = $()
  const c = $.NSString.stringWithContentsOfFileEncodingError(p, u, e).js
  if (e.js) throw $.NSString.stringWithFormat('%@', e).js
  const module   = {exports: {}}
  const exports  = module.exports
  eval(c)
  return module.exports
}
