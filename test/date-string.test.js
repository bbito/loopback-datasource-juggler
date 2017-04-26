// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-datasource-juggler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/* global describe,it */
/* jshint expr:true */

'use strict';

require('should');

var DateString = require('../lib/date-string');

describe('DateString', function() {
  describe('constructor', function() {
    it('should support a valid date string', function() {
      var date = new DateString('2015-01-01');
      date.should.not.eql(null);
      date.value.should.eql('2015-01-01');
      var d = new Date('2015-01-01');
      date.toDate().toString().should.eql(d.toString());
    });

    it('should throw on invalid input', function() {
      var fn = () => {
        var date = new DateString('notadate');
      };
      fn.should.throw(new Error('Invalid date'));

      fn = () => {
        var date = new DateString(20150101);
      };
      fn.should.throw(new Error('Input must be a string'));
    });
  });
});
