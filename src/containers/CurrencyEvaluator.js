import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Auth from '../hoc/Auth0/Auth0';

import {
    getCotationThresholds,
    filterByMax,
    sortByDate
} from '../utils/cotations';
import OptionsList from '../components/OptionsList/OptionsList';
import ResultTable from '../components/ResultTable/ResultTable';
import RangeFilter from '../components/RangeFilter/RangeFilter';

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
        const filteredCotations = sortByDate(filterByMax(this.props.cotations, this.props.selectedMaxCotation));

        return(
            <div>
                <h1>Cryptocurrency Threshold Evaluator</h1>
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

                <RangeFilter
                    cotationThresholds={cotationThresholds}
                    selectMaxCotation={this.props.selectMaxCotation}
                />

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
