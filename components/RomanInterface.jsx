var React = require('react'),
    ReactDOM = require('react-dom'),
    RomanLegend = require('./RomanLegend'),
    Roman = require('../libraries/Roman'),
    RomanWarning = require('./RomanWarning');

var RomanForm = React.createClass({

    getInitialState() {
        return {
            userInput: '',
            result: '',
            selection: 'roman',
            showWarning: false
        };
    },

    handleSelection: function(event) {
        this.setState({
            userInput: '',
            result: '',
            showWarning: false,
            selection: event.target.value
        });
    },

    /**
     * `setRomanConversion` handles this.state for
     *  converting roman numerals to integers
     *
     *  @param  {event} event Used in this
     *  instance to target element values
     */
    setRomanConversion: function(event) {
        var reg = new RegExp('^[iIvVxXlLcCdDmM]+$|^$');

        if (reg.test(event.target.value)) {
            this.setState({
                showWarning: false
            });

            var result = '';
            if (event.target.value !== '') {
                var result = Roman.getIntegerFromRoman(
                    event.target.value.toUpperCase()
                );
            }

            if (result > 3999) {
                this.setState({
                    showWarning: 'roman'
                });
            } else {
                this.setState({
                    result,
                    userInput: event.target.value.toUpperCase()
                });
            }
        } else {
            this.setState({
                showWarning: 'roman'
            });
        }
    },

    /**
     * `setIntegerConversion` handles this.state for
     *  converting integers to roman numerals
     *
     *  @param  {event} event Used in this
     *  instance to target element values
     */
    setIntegerConversion: function(event) {
        var reg = new RegExp('^[0-9]+$|^$');

        if (reg.test(event.target.value)
            && event.target.value <= 3999
        ) {
            var result = '';
            if (event.target.value !== '') {
                var result = Roman.getRomanFromInteger(
                    event.target.value
                );
            }

            this.setState({
                result,
                userInput: event.target.value,
                showWarning: false
            });
        } else {
            this.setState({
                showWarning: 'integer'
            });
        }
    },

    /**
     * `handleInput` will handle the users selection
     *  of roman numeral or integer, and give an
     *  output using the `Roman` library limited
     *  to values of 3999
     *
     *  @param  {event} event Used in this
     *  instance to target element values
     */
    handleInput: function(event) {
        if (this.state.selection === 'integer') {
            this.setIntegerConversion(event);
        } else {
            this.setRomanConversion(event);
        }
    },

    getInputField: function() {
        return (
            <div className="col-md-6">
                <div className="form-group">
                    <input type="text"
                    placeholder="Give me data!"
                    className="form-control"
                    onChange={this.handleInput}
                    value={this.state.userInput} />
                </div>
            </div>
        );
    },

    getResultField: function() {
        return (
            <div className="col-md-12">
                <div className="form-group">
                    <input className="form-control"
                    type="text"
                    placeholder="Results"
                    value={this.state.result}
                    readOnly />
                </div>
            </div>
        );
    },

    getSelectionField: function() {
        return (
            <div className="col-md-6">
                <div className="form-group">
                    <select className="form-control" onChange={this.handleSelection}>
                        <option value="roman">Roman Numeral</option>
                        <option value="integer">Integer</option>
                    </select>
                </div>
            </div>
        );
    },

    render: function() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <RomanLegend />
                <p>You are restricted to a conversion value of up to `3999`.</p>
                {this.state.showWarning == 'roman' ? <Warning type="roman" /> : null}
                {this.state.showWarning == 'integer' ? <Warning type="integer" /> : null}
                {this.getInputField()}
                {this.getSelectionField()}
                {this.getResultField()}
            </div>
        );
    }
});

ReactDOM.render(
    <RomanForm />,
    document.getElementById('content')
);
