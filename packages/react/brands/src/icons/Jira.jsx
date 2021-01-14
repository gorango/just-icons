
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M74.1618 38.0412L43.0188 7.91975L40 5L16.5567 27.6742L5.83815 38.0412C4.72062 39.1234 4.72062 40.8766 5.83815 41.9588L27.2562 62.6742L40 75L63.4433 52.3258L63.8063 51.9747L74.1618 41.9588C75.2794 40.8766 75.2794 39.1234 74.1618 38.0412ZM40 50.3485L29.3005 40L40 29.6515L50.6995 40L40 50.3485Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9998 29.6514C32.9946 22.8752 32.9605 11.8999 39.9234 5.08301L16.5088 27.7203L29.2526 40.046L39.9998 29.6514Z"
            fill="url(#paint0_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.7281 39.9731L40 50.3493C43.3812 53.6177 45.2809 58.0516 45.2809 62.6751C45.2809 67.2986 43.3812 71.7325 40 75.0009L63.4719 52.2989L50.7281 39.9731Z"
            fill="url(#paint1_linear)"
          />
          <defs><linearGradient id="paint0_linear" x1="38.0892" y1="19.1828" x2="20.2411" y2="26.9756" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient><linearGradient id="paint1_linear" x1="42.0444" y1="60.6978" x2="59.8603" y2="52.9603" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M74.1618 38.0412L40 5L5.83815 38.0412C4.72062 39.1234 4.72062 40.8766 5.83815 41.9588L40 75L74.1618 41.9588C75.2794 40.8766 75.2794 39.1234 74.1618 38.0412ZM40 50.3485L29.3005 40L40 29.6515L50.6995 40L40 50.3485Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 29.6515C32.9948 22.8753 32.9605 11.8999 39.9234 5.08301L16.5088 27.7203L29.2526 40.046L40 29.6515Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.7281 39.9731L40 50.3485C43.3812 53.6168 45.2809 58.0516 45.2809 62.6751C45.2809 67.2986 43.3812 71.7317 40 75L63.4719 52.2989L50.7281 39.9731Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40 75C43.3812 71.7317 45.2809 67.2986 45.2809 62.6751C45.2809 58.0516 43.3812 53.6168 40 50.3485M40 75L63.4719 52.2989L50.7281 39.9731L40 50.3485M40 75L5.83815 41.9588C4.72062 40.8766 4.72062 39.1234 5.83815 38.0412L40 5L74.1618 38.0412C75.2794 39.1234 75.2794 40.8766 74.1618 41.9588L40 75ZM40 50.3485L29.3005 40L40 29.6515M40 50.3485L50.6995 40L40 29.6515M40 29.6515C32.9948 22.8753 32.9605 11.8999 39.9234 5.08301L16.5088 27.7203L29.2526 40.046L40 29.6515Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJira = forwardRef((props, ref) => {
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

BrandsJira.displayName = 'BrandsJira'

export default BrandsJira