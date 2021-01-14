
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#0769AD"
          />
          <path
            d="M56.6433 33.5529C59.7856 33.5529 62.6629 32.5048 64.8876 30.7666C62.5781 33.8096 58.7518 35.7991 54.4223 35.7991C47.3693 35.7991 41.6517 30.5193 41.6517 24.0064C41.6517 20.3952 43.4094 17.1632 46.178 15C44.7252 16.9142 43.8727 19.2453 43.8727 21.7602C43.8727 28.2731 49.5903 33.5529 56.6433 33.5529Z"
            fill="#78CFF5"
          />
          <path
            d="M64.7659 41.6465C61.378 44.3041 56.9921 45.9071 52.2013 45.9071C41.4685 45.9071 32.7678 37.8617 32.7678 27.9373C32.7678 24.088 34.0766 20.5215 36.3053 17.5974C32.1032 20.8936 29.4363 25.8121 29.4363 31.3066C29.4363 41.2311 38.137 49.2764 48.8699 49.2764C55.4399 49.2764 61.2485 46.2616 64.7659 41.6465Z"
            fill="#78CFF5"
          />
          <path
            d="M65 51.9252C60.1723 56.5321 53.4843 59.3844 46.0936 59.3844C31.3743 59.3844 19.4419 48.0707 19.4419 34.1144C19.4419 29.692 20.6401 25.535 22.7453 21.9192C17.958 26.4875 15 32.7812 15 39.73C15 53.6862 26.9324 65 41.6517 65C51.7068 65 60.4614 59.7203 65 51.9252Z"
            fill="#78CFF5"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM56.6433 33.5529C59.7856 33.5529 62.6629 32.5048 64.8876 30.7666C62.5781 33.8096 58.7518 35.7991 54.4223 35.7991C47.3693 35.7991 41.6517 30.5193 41.6517 24.0064C41.6517 20.3952 43.4094 17.1632 46.178 15C44.7252 16.9142 43.8727 19.2453 43.8727 21.7602C43.8727 28.2731 49.5903 33.5529 56.6433 33.5529ZM64.7659 41.6465C61.378 44.3041 56.9921 45.9071 52.2013 45.9071C41.4685 45.9071 32.7678 37.8617 32.7678 27.9373C32.7678 24.088 34.0766 20.5215 36.3053 17.5974C32.1032 20.8936 29.4363 25.8121 29.4363 31.3066C29.4363 41.2311 38.137 49.2764 48.8699 49.2764C55.4399 49.2764 61.2485 46.2616 64.7659 41.6465ZM46.0936 59.3844C53.4843 59.3844 60.1723 56.5321 65 51.9252C60.4614 59.7203 51.7068 65 41.6517 65C26.9324 65 15 53.6862 15 39.73C15 32.7812 17.958 26.4875 22.7453 21.9192C20.6401 25.535 19.4419 29.692 19.4419 34.1144C19.4419 48.0707 31.3743 59.3844 46.0936 59.3844Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56.6433 33.5529C59.7856 33.5529 62.6629 32.5048 64.8876 30.7666C62.5781 33.8096 58.7518 35.7991 54.4223 35.7991C47.3693 35.7991 41.6517 30.5193 41.6517 24.0064C41.6517 20.3952 43.4094 17.1632 46.178 15C44.7252 16.9142 43.8727 19.2452 43.8727 21.7602C43.8727 28.2731 49.5903 33.5529 56.6433 33.5529Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.7659 41.6465C61.378 44.3041 56.9921 45.9071 52.2013 45.9071C41.4685 45.9071 32.7678 37.8617 32.7678 27.9373C32.7678 24.088 34.0766 20.5215 36.3053 17.5974C32.1032 20.8936 29.4363 25.8121 29.4363 31.3066C29.4363 41.2311 38.137 49.2764 48.8699 49.2764C55.4399 49.2764 61.2485 46.2616 64.7659 41.6465Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65 51.9252C60.1723 56.5321 53.4843 59.3844 46.0936 59.3844C31.3743 59.3844 19.4419 48.0707 19.4419 34.1144C19.4419 29.692 20.6401 25.535 22.7453 21.9192C17.958 26.4875 15 32.7812 15 39.73C15 53.6862 26.9324 65 41.6517 65C51.7068 65 60.4614 59.7203 65 51.9252Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJquery = forwardRef((props, ref) => {
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

BrandsJquery.displayName = 'BrandsJquery'

export default BrandsJquery