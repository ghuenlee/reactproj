var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={52} />);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actual = $el.find('.clock-text').text();

            expect(actual).toBe('00:52');
        });
    });
    describe('formatSeconds', () => {
        it('should format seconds > than 10 minutes', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 645;
            var expected = '10:45';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
        it('should format seconds < than 10 minutes', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 45;
            var expected = '00:45';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});