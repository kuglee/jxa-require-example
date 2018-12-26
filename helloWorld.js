#!/usr/bin/env osascript -l JavaScript

eval(Library("JXAReader.js").read("Require.js"))

say = require("Say")
say.helloWorld()
