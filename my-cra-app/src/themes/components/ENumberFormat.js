import React from 'react'
import NumberFormat from 'react-number-format'

const ENumberFormat = ({ value, currency, ...rest }) => {
  return (
    <NumberFormat
      displayType="text"
      value={Number(value)?.toFixed(2)}
      prefix={`${currency}${currency === 'CNY' ? '¥' : '$'}`}
      thousandSeparator
      decimalScale={2}
      thousandsGroupStyle={currency === 'CNY' ? 'wan' : 'thousand'}
      style={{
        whiteSpace: 'nowrap',
      }}
      {...rest}
    />
  )
}

export default ENumberFormat
