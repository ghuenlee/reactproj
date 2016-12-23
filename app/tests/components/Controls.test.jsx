var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    describe('render buttons', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'} />);
            var $el = $(ReactDOM.findDOMNode(controls));
            var pauseButton = $el.find('button:contains(Pause)');

            expect(pauseButton.length).toBe(1);
            // this kind of test ensures that one (1) button was found
            // if no button was found, the result would be 0. if two buttons, 2. 
            // Easy.
        });
        it('should render resume when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'} />);
            var $el = $(ReactDOM.findDOMNode(controls));
            var resumeButton = $el.find('button:contains(Resume)');

            expect(resumeButton.length).toBe(1);
            // this kind of test ensures that one (1) button was found
            // if no button was found, the result would be 0. if two buttons, 2. 
            // Easy.
        });
    });

});