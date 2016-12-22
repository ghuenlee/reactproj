var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    setCountdown: function (seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <h1 className="text-center">
                    Countdown
                </h1>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.setCountdown} />
            </div>
        );
    }
});

module.exports = Countdown;