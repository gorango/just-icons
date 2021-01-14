
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M31.6388 49.9614H56.1916L42.9194 64.5014H18.4988L31.6388 49.9614Z"
            fill="black"
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2707H58.588L71.853 32.731Z"
            fill="black"
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            fill="black"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
            fill="currentColor"
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
            fill="currentColor"
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsStencil = forwardRef((props, ref) => {
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

BrandsStencil.displayName = 'BrandsStencil'

export default BrandsStencil