
# event-splitter

  Split Backbone-style event strings 'click .foo &gt; ul'

## Installation

    $ component install anthonyshort/event-splitter

## API

    var splitEvent = require('event-splitter');
    var event = splitEvent('click .foo > ul');
    event.name # click
    event.selector # .foo > ul

## License

  MIT
