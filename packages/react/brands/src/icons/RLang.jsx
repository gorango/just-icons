
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.2 59.9705C14.8768 57.9421 2.5 48.1735 2.5 36.4286C2.5 23.2132 18.17 12.5 37.5 12.5C56.83 12.5 72.5 23.2132 72.5 36.4286C72.5 43.1113 68.493 49.1543 62.0319 53.4956C61.3826 52.5278 60.5542 51.7024 59.5967 51.0642C64.938 48.4878 68.3 44.2645 68.3 38.0356C68.3 26.4285 56.6258 21.7856 42.225 21.7856C27.8242 21.7856 16.15 29.061 16.15 38.0356C16.15 44.5547 22.3098 50.1771 31.2 52.7658V59.9705ZM43.1 60.0525C46.099 59.7228 48.9705 59.1326 51.6634 58.3169L50.1788 55.4386C49.8935 54.8855 49.5527 54.3657 49.1627 53.8872C47.223 54.1236 45.1927 54.252 43.1 54.2798V60.0525Z"
            fill="url(#paint0_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.75 49.2857H55.7L58.0616 50.2496C59.9299 51.0122 61.4835 52.4085 62.4608 54.2035L69.7 67.5H56.4L50.1789 55.4386C49.6643 54.4409 48.9691 53.5517 48.1302 52.818L47.7364 52.4735C47.2289 52.0296 46.5826 51.7857 45.9142 51.7857H43.1V67.5H31.2V27.3214L56.75 27.1899C61.3 27.1899 66.2 32.0115 66.2 38.2378C66.2 44.4642 61.3 49.2857 56.75 49.2857ZM43.45 36.0714L50.8 36.076C52.555 36.1689 53.95 37.6504 53.95 39.4643C53.95 41.2782 52.555 42.7643 50.8 42.8571H43.45V36.0714Z"
            fill="url(#paint1_linear)"
          />
          <defs><linearGradient id="paint0_linear" x1="9.675" y1="22.7912" x2="72.6884" y2="44.6038" gradientUnits="userSpaceOnUse"><stop stop-color="#C8CBCD"/><stop offset="1" stop-color="#88888F"/></linearGradient><linearGradient id="paint1_linear" x1="69.7" y1="67.5" x2="24.4947" y2="29.6521" gradientUnits="userSpaceOnUse"><stop stop-color="#185DAC"/><stop offset="1" stop-color="#2F72C4"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M43.1 60.0525C41.2766 60.253 39.4061 60.3571 37.5 60.3571C35.3492 60.3571 33.2436 60.2245 31.2 59.9705V52.7658C34.5487 53.7409 38.2848 54.2856 42.225 54.2856C42.5178 54.2856 42.8095 54.2837 43.1 54.2798V60.0525Z"
            fill="currentColor"
          />
          <path
            d="M29.2 59.6803C13.8764 57.1325 2.5 47.6888 2.5 36.4286C2.5 23.2132 18.17 12.5 37.5 12.5C56.83 12.5 72.5 23.2132 72.5 36.4286C72.5 42.5317 69.158 48.1011 63.6568 52.3281C63.0606 51.4507 62.3426 50.6687 61.5274 50.0057C61.9378 49.7503 62.3326 49.4825 62.7108 49.2023C62.8972 49.0662 63.0802 48.9245 63.2595 48.7776C66.4284 46.2141 68.3 42.6831 68.3 38.0356C68.3 26.4285 56.6258 21.7856 42.225 21.7856C27.8242 21.7856 16.15 29.061 16.15 38.0356C16.15 44.0536 21.3992 49.3075 29.2 52.1161V59.6803Z"
            fill="currentColor"
          />
          <path
            d="M59.5967 51.0642C56.6453 52.4879 53.0895 53.4087 49.1627 53.8872C49.5527 54.3657 49.8935 54.8855 50.1788 55.4386L51.6634 58.3169C55.541 57.1424 59.0481 55.5005 62.0319 53.4956C61.3826 52.5278 60.5542 51.7024 59.5967 51.0642Z"
            fill="currentColor"
          />
          <path
            d="M49.6955 58.8645C48.2088 59.2424 46.6743 59.5531 45.1 59.7915V54.2215C45.6034 54.1985 46.1025 54.1694 46.5969 54.134L46.8135 54.3234C47.4618 54.8904 48.0011 55.5795 48.4014 56.3554L49.6955 58.8645Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.75 49.2857H55.7L58.0616 50.2496C59.9299 51.0122 61.4835 52.4085 62.4608 54.2035L69.7 67.5H56.4L50.1788 55.4386C49.6642 54.4409 48.9691 53.5517 48.1302 52.818L47.7364 52.4735C47.2289 52.0296 46.5826 51.7857 45.9142 51.7857H43.1V67.5H31.2V27.3214L56.75 27.1899C61.3 27.1899 66.2 32.0115 66.2 38.2378C66.2 44.4642 61.3 49.2857 56.75 49.2857ZM43.45 36.0714L50.8 36.076C52.555 36.1689 53.95 37.6504 53.95 39.4643C53.95 41.2782 52.555 42.7643 50.8 42.8571H43.45V36.0714Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M50.1788 55.4386L51.6634 58.3169C48.9705 59.1326 46.099 59.7228 43.1 60.0525V54.2798C45.1927 54.252 47.223 54.1236 49.1627 53.8872C49.5527 54.3657 49.8935 54.8855 50.1788 55.4386ZM50.1788 55.4386L56.4 67.5H69.7L62.4608 54.2035C61.4835 52.4085 59.9299 51.0122 58.0616 50.2496L55.7 49.2857H56.75C61.3 49.2857 66.2 44.4642 66.2 38.2378C66.2 32.0115 61.3 27.1899 56.75 27.1899L31.2 27.3214V67.5H43.1V51.7857H45.9142C46.5826 51.7857 47.2289 52.0296 47.7364 52.4735L48.1302 52.818C48.9691 53.5517 49.6643 54.4409 50.1788 55.4386ZM2.5 36.4286C2.5 48.1735 14.8768 57.9421 31.2 59.9705V52.7658C22.3098 50.1771 16.15 44.5547 16.15 38.0356C16.15 29.061 27.8242 21.7856 42.225 21.7856C56.6258 21.7856 68.3 26.4285 68.3 38.0356C68.3 44.2645 64.938 48.4878 59.5967 51.0642C60.5542 51.7024 61.3826 52.5278 62.0319 53.4956C68.493 49.1543 72.5 43.1113 72.5 36.4286C72.5 23.2132 56.83 12.5 37.5 12.5C18.17 12.5 2.5 23.2132 2.5 36.4286ZM50.8 36.076L43.45 36.0714V42.8571H50.8C52.555 42.7643 53.95 41.2782 53.95 39.4643C53.95 37.6504 52.555 36.1689 50.8 36.076Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsRLang = forwardRef((props, ref) => {
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

BrandsRLang.displayName = 'BrandsRLang'

export default BrandsRLang