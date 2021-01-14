
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 40V67.9999"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 40V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L40 40Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 40V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L40 40Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 40V68L16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858L40 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.8285 68H66C67.1046 68 68 67.1046 68 66V16.8285C68 15.0467 65.8458 14.1543 64.5858 15.4143L15.4143 64.5858M16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858M16.8285 68L40 68V40L15.4143 64.5858"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M14 63.1714L38.5857 38.5857C38.5877 38.5836 38.5898 38.5816 38.5918 38.5795L63.1715 13.9999C65.6913 11.48 69.9999 13.2647 69.9999 16.8283V65.9999C69.9999 68.209 68.209 69.9999 65.9999 69.9999H16.8283C13.9573 69.9999 12.241 67.2034 12.9999 64.7987C13.183 64.2186 13.5102 63.6612 14 63.1714ZM14 63.1714C14 63.1714 13.9999 63.1714 14 63.1714ZM41.9999 65.9999H65.9999V16.8283L41.9999 40.8284V65.9999ZM37.9999 44.8283L16.8284 65.9998L37.9999 65.9998V44.8283Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSignal50 = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreSignal50.displayName = 'CoreSignal50'

export default CoreSignal50