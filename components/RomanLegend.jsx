var React = require('react'),
    Roman = require('../libraries/Roman');

var RomanTable = React.createClass({
    getTableBody: function() {
        var tableRows = [];

        for (var romanNumeral in Roman.romanNumeralMapper) {
            tableRows.push(
                <tr key={romanNumeral}>
                    <td>{romanNumeral}</td>
                    <td>{Roman.romanNumeralMapper[romanNumeral]}</td>
                </tr>
            );
        }

        return tableRows;
    },

    getTableHeaders: function() {
        return (
            <tr>
                <th>Roman Numeral</th>
                <th>Integer</th>
            </tr>
        );
    },

    render: function() {
        return (
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        {this.getTableHeaders()}
                    </thead>
                    <tbody>
                        {this.getTableBody()}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = RomanTable;