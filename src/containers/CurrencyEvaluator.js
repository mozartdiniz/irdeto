import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Auth from '../hoc/Auth0/Auth0';

import {
    getCotationThresholds,
    filterByMax
} from '../utils/cotations';
import OptionsList from '../components/OptionsList/OptionsList';
import ResultTable from '../components/ResultTable/ResultTable';

class CurrencyEvaluator extends Component {
    componentDidMount() {
        this.props.loadCotations(
            this.props.selectedCurrency,
            this.props.selectedTimeInterval
        );
    }

    loadByCurrency = (e) => {
        this.props.loadCotations(e.target.value, this.props.selectedTimeInterval);
    }

    loadByTimeInterval = (e) => {
        this.props.loadCotations(this.props.selectedCurrency, e.target.value);
    }

    render() {
        const cotationThresholds = getCotationThresholds(this.props.cotations);
        const filteredCotations = filterByMax(this.props.cotations, this.props.selectedMaxCotation);

        return(
            <div>
                <OptionsList
                    items={this.props.currencies}
                    onChange={(e) => { this.props.selectCurrency(e); this.loadByCurrency(e); }}
                    selecteItem={this.props.selectedCurrency}
                />
                <OptionsList
                    items={this.props.timeInterval}
                    onChange={(e) => { this.props.selectTimeInterval(e); this.loadByTimeInterval(e); }}
                    selecteItem={this.props.selectedTimeInterval}
                />

                Value range for the period
                Min: {cotationThresholds.min}
                <input
                    type="range"
                    min={cotationThresholds.min}
                    max={cotationThresholds.max}
                    step="any"
                    onChange={this.props.selectMaxCotation}
                />
                Max: {cotationThresholds.max}
                <ResultTable items={filteredCotations} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cotations: state.cotations.list,
        currencies: state.ui.currencies,
        timeInterval: state.ui.timeInterval,
        selectedCurrency: state.ui.selectedCurrency,
        selectedTimeInterval: state.ui.selectedTimeInterval,
        selectedMaxCotation: state.ui.selectedMaxCotation,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCotations: (currency, timeInterval) => dispatch(actions.loadCotation(currency, timeInterval)),
        selectCurrency: (e) => dispatch(actions.selectCurrency(e.target.value)),
        selectTimeInterval: (e) => dispatch(actions.selectTimeInterval(e.target.value)),
        selectMaxCotation: (e) => dispatch(actions.selectMaxCotation(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth(CurrencyEvaluator));
