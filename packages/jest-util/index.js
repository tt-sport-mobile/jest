/**
 * Copyright (c) 2014, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

const formatMessages = require('./lib/formatMessages');
const path = require('path');

function escapeStrForRegex(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function replacePathSepForRegex(str) {
  if (path.sep === '\\') {
    return str.replace(/(\/|\\)/g, '\\\\');
  }
  return str;
}

function deepCopy(obj) {
  const newObj = {};
  let value;
  for (const key in obj) {
    value = obj[key];
    if (typeof value === 'object' && value !== null) {
      value = deepCopy(value);
    }
    newObj[key] = value;
  }
  return newObj;
}

exports.cleanStackTrace = formatMessages.cleanStackTrace;
exports.deepCopy = deepCopy;
exports.escapeStrForRegex = escapeStrForRegex;
exports.formatFailureMessage = formatMessages.formatFailureMessage;
exports.replacePathSepForRegex = replacePathSepForRegex;
