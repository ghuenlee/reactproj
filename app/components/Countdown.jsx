var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');
var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                // Notice how we didn't put break; here ? this is so that the code written
                // for paused gets executed for stopped as well!
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    startTimer: function () {
        var that = this;
        this.timer = setInterval(function () {
            if (that.state.count <= 0) {
                that.setState({
                    countdownStatus: 'stopped'
                });
                clearInterval(that.timer);
            } else {
                var newCount = that.state.count - 1;
                that.setState({
                    count: newCount >= 0 ? newCount : 0
                });
            }
        }, 1000);
    },
    setCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        var renderControls = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus} />;
            } else {
                return <CountdownForm onSetCountdown={this.setCountdown} />;
            }
        };
        return (
            <div>
                <h1 className="text-center">
                    Countdown
                </h1>
                <Clock totalSeconds={count} />
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;