var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center">Timer</h1>
                <div className="text-center">
                    <Clock totalSeconds={62} />
                </div>
            </div>
        );
    }
});

module.exports = Timer;