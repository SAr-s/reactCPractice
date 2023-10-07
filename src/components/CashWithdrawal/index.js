// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state

    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="icon-container">
            <h1>S</h1>
          </div>
          <h1>Sarah Williams</h1>
        </div>
        <div>
          <h1>Your Balance</h1>
          <div>
            <h1>{count}</h1>
            <p>in rupees</p>
          </div>
        </div>
        <div>
          <h1>Withdraw</h1>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationsDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
