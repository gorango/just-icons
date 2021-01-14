
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsEtherium = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "color" && svg`
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="#6481E7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.0202 41.302L40.3742 49.7876V17.4844L26.0202 41.302Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.3754 17.4844V49.7876L54.7294 41.302L40.3754 17.4844Z"
            fill="#C1CCF5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.3752 34.7781L26.0202 41.3018L40.3742 49.7873L54.7292 41.3027L40.3752 34.7781Z"
            fill="#8299EC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.3752 34.7781L26.0202 41.3018L40.3742 49.7873L40.3752 34.7781Z"
            fill="#C1CCF5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.0202 44.0242L40.3742 64.2524V52.505L26.0202 44.0242Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.3754 52.505V64.2533L54.7389 44.0242L40.3754 52.505Z"
            fill="#C1CCF5"
          />
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72 40C72 57.6731 57.6731 72 40 72C22.3269 72 8 57.6731 8 40C8 22.3269 22.3269 8 40 8C57.6731 8 72 22.3269 72 40ZM26.0202 41.302L40.3743 49.7876L40.3753 49.7867L54.7292 41.3028L40.3753 17.4844V34.7782L40.3743 34.7786V17.4844L26.0202 41.302ZM26.0202 44.0241L40.3743 64.2523V52.5049L26.0202 44.0241ZM40.3753 64.2533V52.5049L54.7389 44.0241L40.3753 64.2533Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72 40C72 57.6731 57.6731 72 40 72C22.3269 72 8 57.6731 8 40C8 22.3269 22.3269 8 40 8C57.6731 8 72 22.3269 72 40ZM26.0202 41.302L40.3743 49.7876L40.3753 49.7867L54.7292 41.3028L40.3753 17.4844V34.7782L40.3743 34.7786V17.4844L26.0202 41.302ZM26.0202 44.0241L40.3743 64.2523V52.5049L26.0202 44.0241ZM40.3753 64.2533V52.5049L54.7389 44.0241L40.3753 64.2533Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-etherium', BrandsEtherium)
export default BrandsEtherium