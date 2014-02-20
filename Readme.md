*This repository is a mirror of the [component](http://component.io) module [anthonyshort/event-splitter](http://github.com/anthonyshort/event-splitter). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/anthonyshort-event-splitter`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
