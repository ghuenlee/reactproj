var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', function () {
    it('should exist', function () {
        expect(Countdown).toExist();
    });
    describe('setCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.setCountdown(10);

            expect(countdown.state.countdownStatus).toBe('started');
            expect(countdown.state.count).toBe(10);

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });
        it('count should not go below 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.setCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

    });
});