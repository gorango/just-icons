
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowExternal = {
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
        ${variant === "path" && svg`
          <path
            d="M44 16L18 16C16.8954 16 16 16.8954 16 18L16 62C16 63.1046 16.8954 64 18 64L62 64C63.1046 64 64 63.1046 64 62V36"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M61.4849 18.5146L36.0288 43.9707"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66.9712 24.0008L56.0007 13.0303C54.8936 11.9232 55.6777 10.0303 57.2433 10.0303L66.9712 10.0303C68.6281 10.0303 69.9712 11.3734 69.9712 13.0303V22.7582C69.9712 24.3238 68.0783 25.1079 66.9712 24.0008Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M43.9629 19C45.6197 19 46.9629 17.6569 46.9629 16C46.9629 14.3431 45.6197 13 43.9629 13V19ZM66.9629 36C66.9629 34.3431 65.6197 33 63.9629 33C62.306 33 60.9629 34.3431 60.9629 36H66.9629ZM61.9629 61H17.9629V67H61.9629V61ZM18.9629 62V18H12.9629V62H18.9629ZM17.9629 19H43.9629V13H17.9629V19ZM60.9629 36V62H66.9629V36H60.9629ZM18.9629 18C18.9629 18.5523 18.5152 19 17.9629 19V13C15.2015 13 12.9629 15.2386 12.9629 18H18.9629ZM17.9629 61C18.5152 61 18.9629 61.4477 18.9629 62H12.9629C12.9629 64.7614 15.2015 67 17.9629 67V61ZM61.9629 67C64.7243 67 66.9629 64.7614 66.9629 62H60.9629C60.9629 61.4477 61.4106 61 61.9629 61V67Z"
            fill="currentColor"
          />
          <path
            d="M63.5695 20.6357C64.7411 19.4642 64.7411 17.5647 63.5695 16.3931C62.3979 15.2215 60.4984 15.2215 59.3268 16.3931L63.5695 20.6357ZM33.8708 41.8492C32.6992 43.0207 32.6992 44.9202 33.8708 46.0918C35.0424 47.2634 36.9419 47.2634 38.1134 46.0918L33.8708 41.8492ZM59.3268 16.3931L33.8708 41.8492L38.1134 46.0918L63.5695 20.6357L59.3268 16.3931Z"
            fill="currentColor"
          />
          <path
            d="M65.1613 22.2276L57.7367 14.8029C56.6441 13.7104 57.2678 11.8395 58.7973 11.621L65.9745 10.5957C67.9544 10.3128 69.6514 12.0099 69.3686 13.9898L68.3433 21.1669C68.1248 22.6965 66.2538 23.3201 65.1613 22.2276Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M20 64.334H60C62.2091 64.334 64 62.5431 64 60.334V20.334C64 18.1248 62.2091 16.334 60 16.334H20C17.7909 16.334 16 18.1248 16 20.334V60.334C16 62.5431 17.7909 64.334 20 64.334Z"
            fill="#56CCF2"
          />
          <path
            d="M62.8995 20.2626C63.6805 19.4816 63.6805 18.2152 62.8995 17.4342C62.1184 16.6532 60.8521 16.6532 60.0711 17.4342L62.8995 20.2626ZM34.615 42.8902C33.834 43.6713 33.834 44.9376 34.615 45.7187C35.3961 46.4997 36.6624 46.4997 37.4434 45.7187L34.615 42.8902ZM60.0711 17.4342L34.615 42.8902L37.4434 45.7187L62.8995 20.2626L60.0711 17.4342Z"
            fill="#F2F2F2"
          />
          <path
            d="M65.1984 22.5616L57.7738 15.1369C56.6813 14.0444 57.3049 12.1735 58.8345 11.955L66.0116 10.9296C67.9915 10.6468 69.6885 12.3439 69.4057 14.3238L68.3804 21.5009C68.1619 23.0305 66.291 23.6541 65.1984 22.5616Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M65.1984 22.2278L57.7738 14.8032C56.6813 13.7106 57.3049 11.8397 58.8344 11.6212L66.0116 10.5959C67.9915 10.3131 69.6885 12.0101 69.4057 13.99L68.3804 21.1671C68.1619 22.6967 66.291 23.3203 65.1984 22.2278Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44 16.0002H18C16.8954 16.0002 16 16.8957 16 18.0002V62.0002C16 63.1048 16.8954 64.0002 18 64.0002H62C63.1046 64.0002 64 63.1048 64 62.0002V36.0002M61.4853 18.5147L36.0292 43.9707M57.7738 14.8032L65.1984 22.2278C66.291 23.3203 68.1619 22.6967 68.3804 21.1671L69.4057 13.99C69.6885 12.0101 67.9915 10.3131 66.0116 10.5959L58.8344 11.6212C57.3049 11.8397 56.6813 13.7106 57.7738 14.8032Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M63.2533 16.7463L67.4714 20.9643V13.0293C67.4714 12.7532 67.2475 12.5293 66.9714 12.5293L59.0364 12.5293L63.2522 16.7452C63.2524 16.7453 63.2532 16.7461 63.2533 16.7463ZM63.2533 16.7463C63.2532 16.7461 63.2535 16.7465 63.2533 16.7463ZM57.9495 18.5135L54.2331 14.7971C51.5511 12.1151 53.4506 7.5293 57.2435 7.5293L66.9714 7.5293C70.009 7.5293 72.4714 9.99174 72.4714 13.0293V22.7572C72.4714 26.5501 67.8856 28.4496 65.2036 25.7676L61.485 22.049L37.7967 45.7373C36.8204 46.7136 35.2375 46.7136 34.2612 45.7373C33.2849 44.761 33.2849 43.1781 34.2612 42.2018L57.9495 18.5135ZM44 18.4993L18.5 18.4993L18.5 61.4993L61.5 61.4993V35.9993C61.5 34.6186 62.6193 33.4993 64 33.4993C65.3807 33.4993 66.5 34.6186 66.5 35.9993V61.9993C66.5 64.4846 64.4853 66.4993 62 66.4993H18C15.5147 66.4993 13.5 64.4846 13.5 61.9993L13.5 17.9993C13.5 15.514 15.5147 13.4993 18 13.4993L44 13.4993C45.3807 13.4993 46.5 14.6186 46.5 15.9993C46.5 17.38 45.3807 18.4993 44 18.4993Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-external', CoreArrowExternal)
export default CoreArrowExternal