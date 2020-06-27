import React, { Fragment } from 'react'
import { string, func, bool, oneOfType } from 'prop-types'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress';

const PrimaryButton = ({ label, onClick, extraClass, disabled, ...props, isLoading  }) => {
  let disabledClass = disabled ? 'a_disabled' : ''

  return (
    <Fragment>
      <a
        href="#"
        className={classNames('pri_btn', extraClass, disabledClass)}
        onClick={onClick}
        {...props}
      >
      {
        isLoading ? <CircularProgress size={'1em'} /> :
        (typeof label == 'function' ? label() : label)

      }
      </a>
    </Fragment>
  )
}

PrimaryButton.defaultProps = {
  label: '',
  disabled: false,
  extraClass: '',
}

PrimaryButton.propTypes = {
  label: oneOfType([string, func]).isRequired,
  onClick: func.isRequired,
  extraClass: string,
  disabled: bool,
}

export default PrimaryButton
