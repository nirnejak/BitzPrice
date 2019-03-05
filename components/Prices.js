class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let list = '';

        if (this.state.currency === 'USD') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.USD.description}
            <strong className="float-right">&nbsp;&nbsp;{this.props.bpi.USD.rate}</strong>
            <span className="badge badge-primary float-right">{this.props.bpi.USD.code}</span>
            </li>
        } else if (this.state.currency === 'GBP') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.GBP.description}
            <strong className="float-right">&nbsp;&nbsp;{this.props.bpi.GBP.rate}</strong>
            <span className="badge badge-primary float-right">{this.props.bpi.GBP.code}</span>
            </li>
        } else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.EUR.description}
            <strong className="float-right">&nbsp;&nbsp;{this.props.bpi.EUR.rate}</strong>
            <span className="badge badge-primary float-right">{this.props.bpi.EUR.code}</span>
            </li>
        }
        return (
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br/>
                <select className="form-control" onChange={e => this.setState({currency: e.target.value})}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Prices;