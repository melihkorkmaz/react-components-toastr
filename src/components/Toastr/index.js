import React, { useMemo, useState } from 'react';
import cx from 'classnames';

import './toastr.css';


const Toastr = ({
  title,
  message,
  children,
  color = 'info',
  position = 'top-right',
  duration = 3000,
}) => {
  
  const [visible, setVisible] = useState(false);
  
  const onShow = () => {
    setVisible(true)
    
    if (duration > 0) {
      setTimeout(() => {
        setVisible(false)
      }, duration)
    }
  }
  
  const onHide = () => {
    setVisible(false)
  }
  
  const containerClass = useMemo(() => (
    cx('toastr-container', {
      'toastr-tr': position === 'top-right',
      'toastr-tl': position === 'top-left',
      'toastr-tc': position === 'top-center',
      'toastr-br': position === 'bottom-right',
      'toastr-bl': position === 'bottom-left',
      'toastr-bc': position === 'bottom-center',
      'toastr-hidden': !visible
    })
  ), [position, visible])
  
  const colorClass = useMemo(() => (
    cx('toastr-content', {
      'toastr-info': color === 'info',
      'toastr-success': color === 'success',
      'toastr-warning': color === 'warning',
      'toastr-error': color === 'error',
    })
  ), [color])
  
  return (
    <React.Fragment>
      <div className={containerClass}>
        <div className={colorClass}>
          <div className="toast-title">
            {title}
          </div>
          <div className="toast-message">
            {message}
          </div>
        </div>
      </div>
      {children({
        onShow,
        onHide,
        state: visible
      })}
    </React.Fragment>
  )
}


export default Toastr;