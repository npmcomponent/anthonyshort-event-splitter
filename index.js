// Cached regex to split keys for `delegate`.
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

// Split a string event like 'click .foo ul'
module.exports = function(str) {
  var match = str.match(delegateEventSplitter);
  return {
    name: match[1],
    selector: match[2]
  };
};