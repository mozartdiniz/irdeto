import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Auth from '../hoc/Auth0/Auth0';

import { getCotationThresholds } from '../utils/cotations';
import OptionsList from '../components/OptionsList/OptionsList';
import ResultTable from '../components/ResultTable/ResultTable';

class CurrencyEvaluator extends Component {
    currencies = [{
        value: 'BTC_BCH',
        text: 'Bitcoin Cash'
    }, {
        value: 'BTC_LSK',
        text: 'Lisk'
    }, {
        value: 'BTC_ETH',
        text: 'Etherium'
    }, {
        value: 'BTC_XMR',
        text: 'Monero'
    }, {
        value: 'BTC_STRAT',
        text: 'Stratis'
    }];

    timeInterval = [{
        value: '86400',
        text: 'Last 24 hours'
    }, {
        value: '172800',
        text: 'Last 48 hours'
    }, {
        value: '259200',
        text: 'Last 72 hours'
    }];

    state = {
        selectedCurrency: this.currencies[0].value,
        selectedTimeInterval: this.timeInterval[0].value,
    }

    componentDidMount() {
        this.props.loadCotations(
            this.state.selectedCurrency,
            this.state.selectedTimeInterval
        );
    }

    selectCurrency = (e) => {
        this.setState({
            selectedCurrency: e.target.value,
        });
    }

    selectTimeInterval = (e) => {
        this.setState({
            selectedTimeInterval: e.target.value,
        });
    }

    loadByCurrency = (e) => {
        this.props.loadCotations(e.target.value, this.state.selectedTimeInterval);
    }

    loadByTimeInterval = (e) => {
        this.props.loadCotations(this.state.selectedCurrency, e.target.value);
    }

    render() {
        const cotationThresholds = getCotationThresholds(this.props.cotations);
        return(
            <div>
                <OptionsList
                    items={this.currencies}
                    onChange={(e) => { this.selectCurrency(e); this.loadByCurrency(e); }}
                    selecteItem={this.state.selectedCurrency}
                />
                <OptionsList
                    items={this.timeInterval}
                    onChange={(e) => { this.selectTimeInterval(e); this.loadByTimeInterval(e); }}
                    selecteItem={this.state.selectedTimeInterval}
                />

                Value range for the period
                Min: {cotationThresholds.min} <input type="range" min={cotationThresholds.min} max={cotationThresholds.max} step="0.00001" /> Max: {cotationThresholds.max}
                <ResultTable items={this.props.cotations} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cotations: state.cotations.list,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCotations: (currency, timeInterval) => dispatch(actions.loadCotation(currency, timeInterval)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth(CurrencyEvaluator));
