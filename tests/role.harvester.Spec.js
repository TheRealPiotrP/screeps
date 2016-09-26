require('./helpers/chai');
var any = require('./helpers/any');
var harvester = require('../roles/role.harvester');
var chai = require('chai');
var should = require('chai').should();
var faker = require('faker');

describe('role.harvester', function() {
  describe('hasCapacity()', function() {
    it('is true when energy < capacity', function() {
      var creepCapacity = any.number(0);

      var creep = {
        carry: {
          energy: any.number(0, creepCapacity)
        },
        carryCapacity: creepCapacity
      };

      var hasCapacity = harvester.hasCapacity(creep);

      hasCapacity.should.be.true;
    });
  });
}); 

