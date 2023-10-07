// Write your code here
import {Component} from 'react'

import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateValue} = props

  const {value} = denominationsDetails

  const onClickDenominations = () => {
    updateValue(value)
  }

  return (
    <li>
      <button type="button" onClick={onClickDenominations} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
