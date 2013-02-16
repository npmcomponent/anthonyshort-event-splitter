describe('Event Splitter', function(){
  var splitEvent = require('event-splitter');
  var assert = require('component-assert');

  it('should split event strings', function(){
    var data;
    data = splitEvent('click .foo > ul');
    assert(data.name === 'click');
    assert(data.selector === '.foo > ul');
    data = splitEvent('click');
    assert(data.name === 'click');
    assert(data.selector === '');
  });

});