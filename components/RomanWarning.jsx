var React = require('react');

var Warning = React.createClass({
    render: function() {
        var warning = this.props.type == 'roman'
            ? 'Uh oh, please try a valid roman numeral from the conversion table below 3999.'
            : 'Woops, please try a valid integer value of 3999 or below.';

        return (
            <div className="alert alert-danger" role="alert">
                {warning}
            </div>
        );
    }
});

module.exports = Warning;