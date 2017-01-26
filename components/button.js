'use strict'

import React from 'react'
import Link from 'next/link'

export default ({ btnText, linkTo, linkage }) => {
  return (
    <div>
      <Link href={linkTo} as={linkage}>
        <a className="btn">{btnText}</a>
      </Link>

      <style jsx>{`
        .btn {
          display: inline-block;
          margin-bottom: 0;
          font-weight: bold;
          text-align: center;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          background-image: none;
          border: 1px solid transparent;
          white-space: nowrap;
          padding: 13px 20px;
          font-size: 14px;
          line-height: 1.42857143;
          border-radius: 3px;
          user-select: none;
          background: red;
        }
      `}</style>
    </div>
  )
}
