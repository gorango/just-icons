
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCarBump = {
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
            d="M63.8969 57.2498C61.4854 55.8575 58.5142 55.8575 56.1027 57.2498C53.6911 58.6421 52.2056 61.2152 52.2056 63.9998C52.2056 64.684 52.2953 65.3555 52.4664 65.9998H67.5332C67.7043 65.3555 67.794 64.684 67.794 63.9998C67.794 61.2152 66.3085 58.6421 63.8969 57.2498Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M11.9999 52.7845C9.79075 48.9582 11.1018 44.0655 14.9281 41.8563L46.105 23.8563C49.9313 21.6472 54.8241 22.9582 57.0332 26.7845L60.0332 31.9807C61.1378 33.8939 60.4823 36.3402 58.5691 37.4448L20.464 59.4448C18.5508 60.5494 16.1045 59.8939 14.9999 57.9807L11.9999 52.7845Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M19.5352 59.8357L22.2837 64.5963C22.836 65.5529 24.0592 65.8807 25.0158 65.3284L30.2119 62.3284C31.1685 61.7761 31.4962 60.5529 30.944 59.5963L28.2584 54.9448L20.4642 59.4448C20.1652 59.6175 19.8531 59.7471 19.5352 59.8357Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50.7749 41.9451L53.4604 46.5966C54.0127 47.5532 55.2359 47.8809 56.1925 47.3286L61.3886 44.3286C62.3452 43.7763 62.673 42.5532 62.1207 41.5966L59.3721 36.8359C59.1365 37.067 58.8682 37.2724 58.5691 37.4451L50.7749 41.9451Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.7338 22.916L13.2992 42.7967L11.7222 32.4896C11.2236 29.2308 12.7751 25.9998 15.6302 24.3515L30.5942 15.712C33.4493 14.0636 37.0231 14.3354 39.596 16.3967L47.7338 22.916Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M18.7476 50.4722C17.9192 49.0373 18.4108 47.2025 19.8457 46.3741C21.2806 45.5457 23.1154 46.0373 23.9438 47.4722C24.7722 48.9071 24.2806 50.7418 22.8457 51.5703C21.4108 52.3987 19.5761 51.9071 18.7476 50.4722Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.6567 31.4722C50.8283 30.0373 48.9935 29.5457 47.5586 30.3741C46.1237 31.2025 45.6321 33.0373 46.4605 34.4722C47.289 35.9071 49.1237 36.3987 50.5586 35.5703C51.9935 34.7418 52.4851 32.9071 51.6567 31.4722Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M47.7338 22.916L48.9838 25.0811C49.6989 24.6682 50.164 23.9289 50.2266 23.1056C50.2892 22.2823 49.9413 21.4812 49.2969 20.9649L47.7338 22.916ZM13.2993 42.7968L10.8281 43.1749C10.953 43.9911 11.4728 44.693 12.2171 45.0504C12.9614 45.4078 13.8342 45.3747 14.5493 44.9618L13.2993 42.7968ZM11.7223 32.4897L14.1935 32.1116L14.1935 32.1116L11.7223 32.4897ZM15.6303 24.3515L16.8803 26.5166L15.6303 24.3515ZM30.5943 15.712L29.3443 13.547L30.5943 15.712ZM39.5961 16.3967L38.033 18.3478L38.033 18.3478L39.5961 16.3967ZM46.4838 20.751L12.0493 40.6317L14.5493 44.9618L48.9838 25.0811L46.4838 20.751ZM9.25105 32.8678L10.8281 43.1749L15.7706 42.4187L14.1935 32.1116L9.25105 32.8678ZM14.3803 22.1865C10.633 24.3499 8.59662 28.5906 9.25105 32.8678L14.1935 32.1116C13.8507 29.8711 14.9174 27.6498 16.8803 26.5166L14.3803 22.1865ZM29.3443 13.547L14.3803 22.1865L16.8803 26.5166L31.8443 17.8771L29.3443 13.547ZM41.1592 14.4456C37.7823 11.7403 33.0915 11.3835 29.3443 13.547L31.8443 17.8771C33.8071 16.7439 36.2642 16.9307 38.033 18.3478L41.1592 14.4456ZM49.2969 20.9649L41.1592 14.4456L38.033 18.3478L46.1708 24.8671L49.2969 20.9649Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8099 62.044L22.2837 64.5967C22.836 65.5532 24.0592 65.881 25.0157 65.3287L30.2119 62.3287C31.1685 61.7764 31.4962 60.5532 30.9439 59.5967L29.5084 57.1102L21.7142 61.6102C21.4197 61.7803 21.1174 61.9246 20.8099 62.044ZM52.0251 44.1102L53.4606 46.5967C54.0129 47.5532 55.2361 47.881 56.1927 47.3287L61.3888 44.3287C62.3454 43.7764 62.6731 42.5532 62.1209 41.5967L60.6471 39.044C60.39 39.2506 60.1138 39.4402 59.8193 39.6102L52.0251 44.1102ZM57.6857 34.9835C57.5827 35.0982 57.4601 35.1988 57.3193 35.2801L49.861 39.5862C49.9317 39.451 50.0404 39.3337 50.1823 39.2518L57.3992 35.0851C57.4904 35.0324 57.5875 34.999 57.6857 34.9835ZM18.7741 57.4491C18.8366 57.3718 18.9141 57.3045 19.0054 57.2518L26.2223 53.0851C26.3641 53.0032 26.5201 52.9678 26.6725 52.974L19.2142 57.2801C19.0734 57.3614 18.9249 57.4172 18.7741 57.4491Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 52.7846C9.79086 48.9583 11.1019 44.0656 14.9282 41.8564L46.1051 23.8564C49.9315 21.6473 54.8242 22.9583 57.0333 26.7846L60.0333 31.9808C61.1379 33.894 60.4824 36.3403 58.5692 37.4449L20.4641 59.4449C18.5509 60.5495 16.1046 59.894 15 57.9808L12 52.7846ZM18.5622 50.1507C17.7338 48.7158 18.2254 46.881 19.6603 46.0526C21.0951 45.2242 22.9299 45.7158 23.7583 47.1507C24.5868 48.5856 24.0951 50.4203 22.6603 51.2488C21.2254 52.0772 19.3906 51.5856 18.5622 50.1507ZM47.3731 30.0526C48.8079 29.2242 50.6427 29.7158 51.4711 31.1507C52.2996 32.5856 51.8079 34.4203 50.3731 35.2488C48.9382 36.0772 47.1034 35.5856 46.275 34.1507C45.4466 32.7158 45.9382 30.881 47.3731 30.0526Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.8969 57.2498C61.4854 55.8575 58.5142 55.8575 56.1027 57.2498C53.6911 58.6421 52.2056 61.2152 52.2056 63.9998C52.2056 64.684 52.2953 65.3555 52.4664 65.9998H67.5332C67.7043 65.3555 67.794 64.684 67.794 63.9998C67.794 61.2152 66.3085 58.6421 63.8969 57.2498Z"
            fill="currentColor"
          />
          <path
            d="M56.1027 57.2498L55.1027 55.5177L56.1027 57.2498ZM63.8969 57.2498L62.8969 58.9818V58.9818L63.8969 57.2498ZM52.4664 65.9998L50.5334 66.5131C50.7661 67.3896 51.5595 67.9998 52.4664 67.9998V65.9998ZM67.5332 65.9998V67.9998C68.4401 67.9998 69.2335 67.3896 69.4662 66.5131L67.5332 65.9998ZM57.1027 58.9818C58.8954 57.9468 61.1042 57.9468 62.8969 58.9818L64.8969 55.5177C61.8666 53.7682 58.133 53.7682 55.1027 55.5177L57.1027 58.9818ZM54.2056 63.9998C54.2056 61.9297 55.3099 60.0169 57.1027 58.9818L55.1027 55.5177C52.0723 57.2673 50.2056 60.5007 50.2056 63.9998H54.2056ZM54.3994 65.4865C54.2723 65.0079 54.2056 64.509 54.2056 63.9998H50.2056C50.2056 64.8591 50.3183 65.7031 50.5334 66.5131L54.3994 65.4865ZM52.4664 67.9998H67.5332V63.9998H52.4664V67.9998ZM65.794 63.9998C65.794 64.509 65.7273 65.0079 65.6002 65.4865L69.4662 66.5131C69.6813 65.7031 69.794 64.8591 69.794 63.9998H65.794ZM62.8969 58.9818C64.6896 60.0169 65.794 61.9297 65.794 63.9998H69.794C69.794 60.5007 67.9273 57.2673 64.8969 55.5177L62.8969 58.9818Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.7338 22.916L13.2993 42.7968L11.7223 32.4897C11.2237 29.2309 12.7752 25.9999 15.6303 24.3515L30.5943 15.712C33.4493 14.0637 37.0232 14.3355 39.5961 16.3967L47.7338 22.916Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5352 59.8359L22.2837 64.5966C22.836 65.5532 24.0592 65.8809 25.0158 65.3286L30.2119 62.3286C31.1685 61.7763 31.4962 60.5532 30.944 59.5966L28.2584 54.9451L20.4642 59.4451C20.1652 59.6177 19.8531 59.7474 19.5352 59.8359ZM50.7751 41.9451L53.4606 46.5966C54.0129 47.5532 55.2361 47.8809 56.1927 47.3286L61.3888 44.3286C62.3454 43.7763 62.6732 42.5532 62.1209 41.5966L59.3723 36.8359C59.1367 37.067 58.8683 37.2724 58.5693 37.4451L50.7751 41.9451Z"
            fill="#828282"
          />
          <path
            d="M12 52.7846C9.79086 48.9583 11.1019 44.0656 14.9282 41.8564L46.1051 23.8564C49.9315 21.6473 54.8242 22.9583 57.0333 26.7846L60.0333 31.9808C61.1379 33.894 60.4824 36.3403 58.5692 37.4449L20.4641 59.4449C18.5509 60.5495 16.1046 59.894 15 57.9808L12 52.7846Z"
            fill="#EB5757"
          />
          <rect
            x="17.2476"
            y="47.874"
            width="6"
            height="6"
            rx="3"
            transform="rotate(-30 17.2476 47.874)"
            fill="#F2C94C"
          />
          <rect
            width="6"
            height="6"
            rx="3"
            transform="matrix(-0.866025 0.5 0.5 0.866025 50.1567 28.874)"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.8969 57.2498C61.4854 55.8575 58.5142 55.8575 56.1027 57.2498C53.6911 58.6421 52.2056 61.2152 52.2056 63.9998C52.2056 64.684 52.2953 65.3555 52.4664 65.9998H67.5332C67.7043 65.3555 67.794 64.684 67.794 63.9998C67.794 61.2152 66.3085 58.6421 63.8969 57.2498Z"
            fill="#828282"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M47.7337 22.916L13.2992 42.7967L11.7222 32.4896C11.2236 29.2308 12.7751 25.9998 15.6302 24.3515L30.5942 15.712C33.4492 14.0636 37.0231 14.3354 39.596 16.3967L47.7337 22.916Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.535 59.8357L22.2835 64.5963C22.8358 65.5529 24.059 65.8806 25.0156 65.3283L30.2117 62.3283C31.1683 61.7761 31.4961 60.5529 30.9438 59.5963L28.2582 54.9448L20.464 59.4448C20.165 59.6174 19.8529 59.7471 19.535 59.8357Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50.7749 41.9448L53.4604 46.5963C54.0127 47.5529 55.2359 47.8806 56.1925 47.3283L61.3886 44.3283C62.3452 43.7761 62.673 42.5529 62.1207 41.5963L59.3722 36.8357C59.1365 37.0667 58.8682 37.2721 58.5691 37.4448L50.7749 41.9448Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M11.9999 52.7845C9.79075 48.9582 11.1018 44.0654 14.9281 41.8563L46.105 23.8563C49.9313 21.6472 54.8241 22.9582 57.0332 26.7845L60.0332 31.9806C61.1378 33.8938 60.4823 36.3402 58.5691 37.4448L20.464 59.4448C18.5508 60.5494 16.1045 59.8938 14.9999 57.9806L11.9999 52.7845Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M18.7476 50.4719C17.9192 49.037 18.4108 47.2022 19.8457 46.3738C21.2806 45.5454 23.1153 46.037 23.9438 47.4719C24.7722 48.9068 24.2806 50.7415 22.8457 51.57C21.4108 52.3984 19.576 51.9068 18.7476 50.4719Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.6566 31.4719C50.8282 30.037 48.9934 29.5454 47.5585 30.3738C46.1236 31.2022 45.632 33.037 46.4604 34.4719C47.2889 35.9068 49.1236 36.3984 50.5585 35.57C51.9934 34.7415 52.485 32.9068 51.6566 31.4719Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.897 57.2498C61.4855 55.8575 58.5143 55.8575 56.1028 57.2498C53.6912 58.6421 52.2057 61.2152 52.2057 63.9998C52.2057 64.6841 52.2954 65.3556 52.4665 65.9999H67.5333C67.7044 65.3556 67.7941 64.6841 67.7941 63.9998C67.7941 61.2152 66.3085 58.6421 63.897 57.2498Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.464 59.4448L28.2582 54.9448L30.9438 59.5963C31.4961 60.5529 31.1683 61.7761 30.2117 62.3283L25.0156 65.3283C24.059 65.8806 22.8358 65.5529 22.2835 64.5963L19.535 59.8357C19.8529 59.7471 20.165 59.6174 20.464 59.4448ZM20.464 59.4448L58.5691 37.4448M20.464 59.4448C18.5508 60.5494 16.1045 59.8938 14.9999 57.9806L11.9999 52.7845C9.79075 48.9582 11.1018 44.0654 14.9281 41.8563L46.105 23.8563C49.9313 21.6472 54.8241 22.9582 57.0332 26.7845L60.0332 31.9806C61.1378 33.8938 60.4823 36.3402 58.5691 37.4448M58.5691 37.4448C58.8682 37.2721 59.1365 37.0667 59.3722 36.8357L62.1207 41.5963C62.673 42.5529 62.3452 43.7761 61.3886 44.3283L56.1925 47.3283C55.2359 47.8806 54.0127 47.5529 53.4604 46.5963L50.7749 41.9448L58.5691 37.4448ZM47.7337 22.916L13.2992 42.7967L11.7222 32.4896C11.2236 29.2308 12.7751 25.9998 15.6302 24.3515L30.5942 15.712C33.4492 14.0636 37.0231 14.3354 39.596 16.3967L47.7337 22.916ZM22.8457 51.57C21.4108 52.3984 19.576 51.9068 18.7476 50.4719C17.9192 49.037 18.4108 47.2022 19.8457 46.3738C21.2806 45.5454 23.1153 46.037 23.9438 47.4719C24.7722 48.9068 24.2806 50.7415 22.8457 51.57ZM50.5585 35.57C51.9934 34.7415 52.485 32.9068 51.6566 31.4719C50.8282 30.037 48.9934 29.5454 47.5585 30.3738C46.1236 31.2022 45.632 33.037 46.4604 34.4719C47.2889 35.9068 49.1236 36.3984 50.5585 35.57ZM56.1028 57.2498C58.5143 55.8575 61.4855 55.8575 63.897 57.2498C66.3085 58.6421 67.7941 61.2152 67.7941 63.9998C67.7941 64.6841 67.7044 65.3556 67.5333 65.9999H52.4665C52.2954 65.3556 52.2057 64.6841 52.2057 63.9998C52.2057 61.2152 53.6912 58.6421 56.1028 57.2498Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.846 44.6418C16.4546 46.0225 15.6352 49.0804 17.0159 51.4719C18.3966 53.8634 21.4546 54.6827 23.846 53.302C26.2375 51.9213 27.0569 48.8634 25.6762 46.4719C24.2954 44.0804 21.2375 43.2611 18.846 44.6418ZM20.48 49.4719C20.2039 48.9936 20.3677 48.382 20.846 48.1059C21.3243 47.8297 21.9359 47.9936 22.2121 48.4719C22.4882 48.9502 22.3243 49.5618 21.846 49.8379C21.3677 50.1141 20.7561 49.9502 20.48 49.4719Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.389 30.4719C52.0083 28.0804 48.9503 27.2611 46.5588 28.6418C44.1674 30.0225 43.348 33.0804 44.7287 35.4719C46.1094 37.8634 49.1674 38.6827 51.5588 37.302C53.9503 35.9213 54.7697 32.8634 53.389 30.4719ZM48.5588 32.1059C49.0371 31.8297 49.6487 31.9936 49.9249 32.4719C50.201 32.9502 50.0371 33.5618 49.5588 33.8379C49.0805 34.1141 48.469 33.9502 48.1928 33.4719C47.9167 32.9936 48.0805 32.382 48.5588 32.1059Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6305 22.6194C11.0617 24.6799 9.12227 28.7186 9.74553 32.7921L11.2176 42.4129C8.63422 45.5402 8.12091 50.0653 10.2682 53.7845L13.2682 58.9807C14.3786 60.904 16.3931 61.9799 18.4649 61.9817L20.5518 65.5963C21.6564 67.5095 24.1027 68.165 26.0159 67.0604L31.2121 64.0604C33.1252 62.9558 33.7807 60.5095 32.6762 58.5963L30.9906 55.6768L50.0432 44.6768L51.7287 47.5963C52.8333 49.5095 55.2797 50.165 57.1928 49.0604L62.389 46.0604C64.3022 44.9558 64.9577 42.5095 63.8531 40.5963L61.7662 36.9817C62.8006 35.1865 62.876 32.904 61.7656 30.9807L58.7656 25.7845C56.6183 22.0653 52.4426 20.2472 48.4426 20.921L40.8468 14.8358C37.6307 12.2593 33.1633 11.9195 29.5945 13.9799L14.6305 22.6194ZM44.1997 22.6471L14.8339 39.6015L13.6995 32.1871C13.3256 29.743 14.4892 27.3198 16.6305 26.0835L31.5945 17.444C33.7358 16.2078 36.4162 16.4116 38.3459 17.9575L44.1997 22.6471ZM13.7323 51.7845C12.0754 48.9147 13.0587 45.2452 15.9284 43.5884L47.1073 25.5872C49.9768 23.932 53.645 24.9154 55.3015 27.7845L58.3015 32.9807C58.8538 33.9372 58.526 35.1604 57.5694 35.7127L19.4643 57.7127C18.5077 58.265 17.2846 57.9372 16.7323 56.9807L13.7323 51.7845ZM24.0159 63.5963L22.3304 60.6768L27.5265 57.6768L29.2121 60.5963L24.0159 63.5963ZM55.1928 45.5963L53.5073 42.6769L58.7034 39.6769L60.389 42.5963L55.1928 45.5963Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.8973 55.5178C61.867 53.7682 58.1335 53.7682 55.1031 55.5178C52.0728 57.2674 50.206 60.5007 50.206 63.9999C50.206 64.8592 50.3187 65.7032 50.5338 66.5132C50.7665 67.3897 51.5599 67.9999 52.4668 67.9999H67.5337C68.4405 67.9999 69.2339 67.3897 69.4667 66.5132C69.6818 65.7032 69.7945 64.8592 69.7945 63.9999C69.7945 60.5007 67.9277 57.2674 64.8973 55.5178ZM57.1031 58.9819C58.8959 57.9469 61.1046 57.9469 62.8973 58.9819C64.6901 60.0169 65.7945 61.9298 65.7945 63.9999L54.206 63.9999C54.206 61.9298 55.3104 60.0169 57.1031 58.9819Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-car-bump', CoreCarBump)
export default CoreCarBump