
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.7279 23.9285L36.8995 21.1C34.274 18.4745 30.713 16.9995 27 16.9995C23.287 16.9995 19.726 18.4745 17.1005 21.1C14.475 23.7255 13 27.2865 13 30.9995C13 34.7125 14.475 38.2735 17.1005 40.899L31.1813 54.9798C31.2016 55.0003 31.222 55.0208 31.2425 55.0413L38.3136 62.1124C38.7 62.4989 39.2054 62.6941 39.7119 62.6981"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.7279 23.9283L42.5562 21.1C45.1817 18.4745 48.7426 16.9995 52.4557 16.9995C56.1687 16.9995 59.7297 18.4745 62.3552 21.1C64.9807 23.7255 66.4557 27.2865 66.4557 30.9995C66.4557 34.7125 64.9807 38.2735 62.3552 40.899L41.142 62.1122C40.7474 62.5068 40.229 62.702 39.7119 62.6979"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.2104 43.0084H24.1727C24.5544 43.0084 24.9028 42.7911 25.0707 42.4483L27.6847 37.1127C28.0745 36.3172 29.2296 36.3838 29.5254 37.2188L34.679 51.7704C34.9881 52.6432 36.2152 52.6634 36.5528 51.8011L46.4739 26.4616C46.7957 25.6398 47.9466 25.6073 48.3142 26.4097L55.6509 42.4249C55.8138 42.7804 56.169 43.0084 56.5601 43.0084H60.2449"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4288 31.6716C15.4288 28.1366 16.8368 24.7464 19.3431 22.2467C21.8494 19.7471 25.2486 18.3428 28.793 18.3428C32.3374 18.3428 35.7366 19.7471 38.2429 22.2467L40.2832 24.2817C40.6478 24.6453 41.2379 24.6453 41.6025 24.2817L43.6429 22.2467C46.1491 19.7471 49.5484 18.3428 53.0928 18.3428C56.6372 18.3428 60.0364 19.7471 62.5427 22.2467C65.0489 24.7464 66.4569 28.1366 66.4569 31.6716C66.4569 35.2066 65.0489 38.5968 62.5427 41.0964L48.5172 55.0847L48.514 55.0879L42.3552 61.2303C41.5746 62.0088 40.3112 62.0088 39.5306 61.2303L33.3718 55.0879L19.3431 41.0964C16.8369 38.5968 15.4288 35.2066 15.4288 31.6716ZM61.9432 40.885C62.189 40.885 62.4265 40.9204 62.6508 40.9865C62.6149 41.0231 62.5788 41.0596 62.5425 41.0958L57.7406 45.885H56.7792C55.4117 45.885 54.1695 45.0885 53.5987 43.8459L48.123 31.9249L40.0233 52.5574C38.8402 55.5714 34.5507 55.5009 33.4672 52.4496L32.924 50.9201L29.8147 42.164L28.9481 43.9281L26.9089 42.9264L28.9481 43.9281C28.3597 45.126 27.1413 45.885 25.8067 45.885H24.1449L19.343 41.0958C19.3066 41.0595 19.2704 41.023 19.2345 40.9864C19.4587 40.9204 19.696 40.885 19.9415 40.885H24.8723L26.0638 38.4594L26.8959 36.7655C28.2615 33.9855 32.2992 34.2187 33.3356 37.1374L36.8358 46.9942L43.9476 28.8782L44.7568 26.8167C45.8844 23.9443 49.9073 23.8306 51.1953 26.6347L57.7409 40.885H61.9432Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.1286 21.5753C15.6224 24.0749 14.2143 27.4651 14.2143 31.0001C14.2143 34.5351 15.6224 37.9253 18.1286 40.4249L32.1573 54.4164L38.3161 60.5588C39.0967 61.3374 40.3601 61.3374 41.1407 60.5588L47.2995 54.4164C47.3005 54.4154 47.3016 54.4143 47.3027 54.4132L61.3282 40.4249C63.8344 37.9253 65.2424 34.5351 65.2424 31.0001C65.2424 27.4651 63.8344 24.0749 61.3282 21.5753C58.8219 19.0757 55.4227 17.6714 51.8783 17.6714C48.3339 17.6714 44.9346 19.0757 42.4284 21.5753L40.388 23.6102C40.0234 23.9738 39.4334 23.9738 39.0688 23.6102L37.0284 21.5753C34.5222 19.0757 31.1229 17.6714 27.5785 17.6714C24.0341 17.6714 20.6349 19.0757 18.1286 21.5753Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.0172 40.7344C60.923 40.7207 60.8266 40.7137 60.7286 40.7137H56.2058L49.5264 26.1721C48.4224 23.7686 44.9742 23.8661 44.0077 26.3281L43.1984 28.3896L35.5977 47.751L31.6498 36.6334C30.7615 34.1317 27.3006 33.9318 26.1301 36.3146L25.298 38.0086L23.9692 40.7137H18.7269C18.6291 40.7137 18.533 40.7207 18.439 40.7343L22.429 44.7137H24.5921C25.736 44.7137 26.7804 44.0631 27.2848 43.0364L28.6743 40.2076L32.1806 50.0815L32.7238 51.6111C33.6525 54.2264 37.3292 54.2868 38.3433 51.7034L46.8723 29.9772L52.8385 42.9659C53.3277 44.031 54.3925 44.7137 55.5646 44.7137H57.0273L61.0172 40.7344Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M17.373 20.8056C14.7475 23.4311 13.2725 26.992 13.2725 30.7051C13.2725 34.4181 14.7475 37.9791 17.373 40.6046L38.5862 61.8178C39.3672 62.5988 40.6335 62.5988 41.4146 61.8178L62.6278 40.6046C65.2533 37.9791 66.7283 34.4181 66.7283 30.7051C66.7283 26.992 65.2533 23.4311 62.6278 20.8056C60.0023 18.1801 56.4413 16.7051 52.7283 16.7051C49.0153 16.7051 45.4543 18.1801 42.8288 20.8056L40.6914 22.943C40.3098 23.3246 39.691 23.3246 39.3094 22.943L37.172 20.8056C34.5464 18.1801 30.9855 16.7051 27.2725 16.7051C23.5594 16.7051 19.9985 18.1801 17.373 20.8056Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.7773 43.0084H24.1729C24.5546 43.0084 24.903 42.7911 25.071 42.4484L27.685 37.1128C28.0747 36.3173 29.2299 36.3839 29.5257 37.2189L34.6793 51.7704C34.9884 52.6433 36.2155 52.6634 36.5531 51.8012L46.4742 26.4616C46.7959 25.6398 47.9469 25.6074 48.3145 26.4097L55.6512 42.4249C55.8141 42.7804 56.1693 43.0084 56.5604 43.0084H60.2231M13.2725 30.7051C13.2725 26.992 14.7475 23.4311 17.373 20.8056C19.9985 18.1801 23.5594 16.7051 27.2725 16.7051C30.9855 16.7051 34.5464 18.1801 37.172 20.8056L39.3094 22.943C39.691 23.3246 40.3098 23.3246 40.6914 22.943L42.8288 20.8056C45.4543 18.1801 49.0153 16.7051 52.7283 16.7051C56.4413 16.7051 60.0023 18.1801 62.6278 20.8056C65.2533 23.4311 66.7283 26.992 66.7283 30.7051C66.7283 34.4181 65.2533 37.9791 62.6278 40.6046L41.4146 61.8178C40.6335 62.5988 39.3672 62.5988 38.5862 61.8178L17.373 40.6046C14.7475 37.9791 13.2725 34.4181 13.2725 30.7051Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.272 15.1509C23.0285 15.1509 18.9588 16.8366 15.9583 19.8372C12.9577 22.8378 11.272 26.9074 11.272 31.1509C11.272 35.3943 12.9577 39.464 15.9583 42.4646L30.0315 56.5378L30.1002 56.6069L37.1713 63.678C38.7334 65.2401 41.2661 65.2401 42.8282 63.678L64.0414 42.4648C67.0419 39.4642 68.7277 35.3945 68.7277 31.1511C68.7277 26.9076 67.0419 22.8379 64.0414 19.8373C61.0408 16.8368 56.9711 15.1511 52.7277 15.1511C48.4842 15.1511 44.4145 16.8368 41.4139 19.8373L39.9999 21.2514L38.5857 19.8372C35.5851 16.8366 31.5154 15.1509 27.272 15.1509ZM27.272 19.1509C24.0894 19.1509 21.0371 20.4152 18.7867 22.6656C16.5363 24.916 15.272 27.9683 15.272 31.1509C15.272 34.3335 16.5363 37.3857 18.7867 39.6362L20.3104 41.1599H23.8211L26.1607 36.3843C27.3299 33.9979 30.7955 34.1977 31.6827 36.7027L35.9406 48.7253L44.8836 25.884C45.8489 23.4185 49.3018 23.3212 50.4045 25.7283L57.474 41.1599H59.6894L61.2129 39.6363C63.4634 37.3859 64.7277 34.3336 64.7277 31.1511C64.7277 27.9685 63.4634 24.9162 61.2129 22.6658C58.9625 20.4153 55.9103 19.1511 52.7277 19.1511C49.5451 19.1511 46.4928 20.4153 44.2424 22.6658L41.4141 25.494C41.039 25.8691 40.5303 26.0798 39.9999 26.0798C39.4695 26.0798 38.9608 25.8691 38.5857 25.494L35.7573 22.6656C33.5068 20.4152 30.4546 19.1509 27.272 19.1509ZM55.8534 44.9959C55.0913 44.7327 54.4521 44.1678 54.1047 43.4094L47.7493 29.5363L38.6872 52.6818C37.6744 55.2685 33.9932 55.2082 33.0658 52.5896L28.7063 40.2803L27.1388 43.4798C26.635 44.5081 25.5898 45.1599 24.4447 45.1599H24.3104L32.875 53.7244L32.9287 53.7785L39.9997 60.8495L55.8534 44.9959Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHeartbeat = forwardRef((props, ref) => {
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

CoreHeartbeat.displayName = 'CoreHeartbeat'

export default CoreHeartbeat