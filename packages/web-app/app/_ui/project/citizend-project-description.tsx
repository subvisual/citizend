import Image from 'next/image';
import fractal from '../../../public/fractal.png';
import outlier from '../../../public/outlier.png';

const StepOne = () => (
  <svg
    width="79"
    height="79"
    viewBox="0 0 79 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_5335_33222)">
      <path
        d="M49.6295 13.4355H28.9349C28.5898 13.4355 28.2577 13.5723 28.0135 13.8164L13.3809 28.4502C13.1367 28.6944 13 29.0265 13 29.3716V50.0656C13 50.4107 13.1367 50.7427 13.3809 50.9869L28.0135 65.6191C28.2577 65.8632 28.5898 66 28.9349 66H49.6295C49.9746 66 50.3067 65.8632 50.5509 65.6191L65.1835 50.9869C65.4277 50.7427 65.5644 50.4107 65.5644 50.0656V29.3716C65.5644 29.0265 65.4277 28.6944 65.1835 28.4502L50.5509 13.8164C50.3067 13.5723 49.9746 13.4355 49.6295 13.4355Z"
        fill="#3865FD"
      />
    </g>
    <g filter="url(#filter1_d_5335_33222)">
      <path
        d="M49.6295 10H28.9349C28.5898 10 28.2577 10.1367 28.0135 10.3809L13.3809 25.0147C13.1367 25.2589 13 25.5909 13 25.936V46.63C13 46.9751 13.1367 47.3072 13.3809 47.5514L28.0135 62.1835C28.2577 62.4277 28.5898 62.5644 28.9349 62.5644H49.6295C49.9746 62.5644 50.3067 62.4277 50.5509 62.1835L65.1835 47.5514C65.4277 47.3072 65.5644 46.9751 65.5644 46.63V25.936C65.5644 25.5909 65.4277 25.2589 65.1835 25.0147L50.5509 10.3809C50.3067 10.1367 49.9746 10 49.6295 10Z"
        fill="#3865FD"
      />
    </g>
    <path
      d="M28.0301 36.85C28.0301 36.11 28.1001 35.4133 28.2401 34.76C28.3801 34.1033 28.5801 33.5 28.8401 32.95C29.1034 32.3967 29.4234 31.9017 29.8001 31.465C30.1767 31.025 30.6017 30.6533 31.0751 30.35C31.5517 30.0433 32.0717 29.8083 32.6351 29.645C33.1984 29.4817 33.7967 29.4 34.4301 29.4C35.0667 29.4 35.6651 29.4817 36.2251 29.645C36.7884 29.8083 37.3067 30.0433 37.7801 30.35C38.2567 30.6533 38.6834 31.025 39.0601 31.465C39.4367 31.9017 39.7551 32.3967 40.0151 32.95C40.2784 33.5 40.4801 34.1033 40.6201 34.76C40.7601 35.4133 40.8301 36.11 40.8301 36.85C40.8301 37.5867 40.7601 38.2833 40.6201 38.94C40.4801 39.5967 40.2784 40.2017 40.0151 40.755C39.7551 41.305 39.4367 41.8 39.0601 42.24C38.6834 42.6767 38.2567 43.0483 37.7801 43.355C37.3067 43.6583 36.7884 43.8917 36.2251 44.055C35.6617 44.2183 35.0634 44.3 34.4301 44.3C33.7967 44.3 33.1984 44.2183 32.6351 44.055C32.0717 43.8917 31.5517 43.6583 31.0751 43.355C30.6017 43.0483 30.1767 42.6767 29.8001 42.24C29.4234 41.8 29.1034 41.305 28.8401 40.755C28.5801 40.2017 28.3801 39.5967 28.2401 38.94C28.1001 38.2833 28.0301 37.5867 28.0301 36.85ZM30.1301 36.85C30.1301 37.71 30.2284 38.48 30.4251 39.16C30.6217 39.84 30.9051 40.4167 31.2751 40.89C31.6451 41.36 32.0951 41.7217 32.6251 41.975C33.1584 42.225 33.7601 42.35 34.4301 42.35C35.1001 42.35 35.7001 42.225 36.2301 41.975C36.7634 41.7217 37.2151 41.36 37.5851 40.89C37.9551 40.4167 38.2384 39.84 38.4351 39.16C38.6317 38.48 38.7301 37.71 38.7301 36.85C38.7301 35.99 38.6317 35.22 38.4351 34.54C38.2384 33.86 37.9551 33.285 37.5851 32.815C37.2151 32.3417 36.7634 31.98 36.2301 31.73C35.7001 31.4767 35.1001 31.35 34.4301 31.35C33.7601 31.35 33.1584 31.4767 32.6251 31.73C32.0951 31.98 31.6451 32.3417 31.2751 32.815C30.9051 33.285 30.6217 33.86 30.4251 34.54C30.2284 35.22 30.1301 35.99 30.1301 36.85ZM47.2993 42.05H49.8293V44H42.6693V42.05H45.1993V33.69H42.0793V31.89H43.3643C43.7476 31.89 44.0693 31.8517 44.3293 31.775C44.5893 31.695 44.7976 31.56 44.9543 31.37C45.1143 31.18 45.2276 30.925 45.2943 30.605C45.3643 30.2817 45.3993 29.8783 45.3993 29.395H47.2993V42.05Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_5335_33222"
        x="0.275687"
        y="0.711234"
        width="78.0131"
        height="78.0131"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="6.36216"
          result="effect1_foregroundBlur_5335_33222"
        />
      </filter>
      <filter
        id="filter1_d_5335_33222"
        x="10.8793"
        y="10"
        width="56.8059"
        height="57.23"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.54486" />
        <feGaussianBlur stdDeviation="1.06036" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0431373 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5335_33222"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5335_33222"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const StepTwo = () => (
  <svg
    width="82"
    height="82"
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_5335_33232)">
      <path
        d="M52.0236 12.8301H29.9764C29.6087 12.8301 29.2549 12.9757 28.9948 13.2359L13.4058 28.8261C13.1457 29.0862 13 29.44 13 29.8077V51.8542C13 52.2219 13.1457 52.5756 13.4058 52.8358L28.9948 68.4243C29.2549 68.6844 29.6087 68.8301 29.9764 68.8301H52.0236C52.3913 68.8301 52.7451 68.6844 53.0052 68.4243L68.5942 52.8358C68.8543 52.5756 69 52.2219 69 51.8542V29.8077C69 29.44 68.8543 29.0862 68.5942 28.8261L53.0052 13.2359C52.7451 12.9757 52.3913 12.8301 52.0236 12.8301Z"
        fill="#3865FD"
      />
    </g>
    <g filter="url(#filter1_d_5335_33232)">
      <path
        d="M52.0236 9.16992H29.9764C29.6087 9.16992 29.2549 9.31559 28.9948 9.57572L13.4058 25.166C13.1457 25.4261 13 25.7799 13 26.1475V48.1941C13 48.5617 13.1457 48.9155 13.4058 49.1756L28.9948 64.7641C29.2549 65.0242 29.6087 65.1699 29.9764 65.1699H52.0236C52.3913 65.1699 52.7451 65.0242 53.0052 64.7641L68.5942 49.1756C68.8543 48.9155 69 48.5617 69 48.1941V26.1475C69 25.7799 68.8543 25.4261 68.5942 25.166L53.0052 9.57572C52.7451 9.31559 52.3913 9.16992 52.0236 9.16992Z"
        fill="#3865FD"
      />
    </g>
    <path
      d="M28.1746 37.85C28.1746 37.11 28.2446 36.4133 28.3846 35.76C28.5246 35.1033 28.7246 34.5 28.9846 33.95C29.2479 33.3967 29.5679 32.9017 29.9446 32.465C30.3213 32.025 30.7463 31.6533 31.2196 31.35C31.6963 31.0433 32.2163 30.8083 32.7796 30.645C33.3429 30.4817 33.9413 30.4 34.5746 30.4C35.2113 30.4 35.8096 30.4817 36.3696 30.645C36.9329 30.8083 37.4513 31.0433 37.9246 31.35C38.4013 31.6533 38.8279 32.025 39.2046 32.465C39.5813 32.9017 39.8996 33.3967 40.1596 33.95C40.4229 34.5 40.6246 35.1033 40.7646 35.76C40.9046 36.4133 40.9746 37.11 40.9746 37.85C40.9746 38.5867 40.9046 39.2833 40.7646 39.94C40.6246 40.5967 40.4229 41.2017 40.1596 41.755C39.8996 42.305 39.5813 42.8 39.2046 43.24C38.8279 43.6767 38.4013 44.0483 37.9246 44.355C37.4513 44.6583 36.9329 44.8917 36.3696 45.055C35.8063 45.2183 35.2079 45.3 34.5746 45.3C33.9413 45.3 33.3429 45.2183 32.7796 45.055C32.2163 44.8917 31.6963 44.6583 31.2196 44.355C30.7463 44.0483 30.3213 43.6767 29.9446 43.24C29.5679 42.8 29.2479 42.305 28.9846 41.755C28.7246 41.2017 28.5246 40.5967 28.3846 39.94C28.2446 39.2833 28.1746 38.5867 28.1746 37.85ZM30.2746 37.85C30.2746 38.71 30.3729 39.48 30.5696 40.16C30.7663 40.84 31.0496 41.4167 31.4196 41.89C31.7896 42.36 32.2396 42.7217 32.7696 42.975C33.3029 43.225 33.9046 43.35 34.5746 43.35C35.2446 43.35 35.8446 43.225 36.3746 42.975C36.9079 42.7217 37.3596 42.36 37.7296 41.89C38.0996 41.4167 38.3829 40.84 38.5796 40.16C38.7763 39.48 38.8746 38.71 38.8746 37.85C38.8746 36.99 38.7763 36.22 38.5796 35.54C38.3829 34.86 38.0996 34.285 37.7296 33.815C37.3596 33.3417 36.9079 32.98 36.3746 32.73C35.8446 32.4767 35.2446 32.35 34.5746 32.35C33.9046 32.35 33.3029 32.4767 32.7696 32.73C32.2396 32.98 31.7896 33.3417 31.4196 33.815C31.0496 34.285 30.7663 34.86 30.5696 35.54C30.3729 36.22 30.2746 36.99 30.2746 37.85ZM42.4262 45V43.135C42.4262 42.575 42.4978 42.0817 42.6412 41.655C42.7845 41.225 42.9795 40.8483 43.2262 40.525C43.4728 40.2017 43.7595 39.9233 44.0862 39.69C44.4128 39.4567 44.7578 39.255 45.1212 39.085C45.4845 38.9117 45.8578 38.7617 46.2412 38.635C46.6245 38.5083 46.9945 38.3917 47.3512 38.285L48.0212 38.085C48.3578 37.9817 48.6778 37.8817 48.9812 37.785C49.2878 37.6883 49.5728 37.5833 49.8362 37.47C50.0995 37.3567 50.3378 37.2317 50.5512 37.095C50.7678 36.955 50.9512 36.795 51.1012 36.615C51.2545 36.435 51.3712 36.2283 51.4512 35.995C51.5345 35.7617 51.5762 35.4933 51.5762 35.19C51.5762 34.8 51.4945 34.4333 51.3312 34.09C51.1678 33.7467 50.9362 33.4467 50.6362 33.19C50.3362 32.93 49.9745 32.7267 49.5512 32.58C49.1278 32.43 48.6545 32.355 48.1312 32.355C47.5945 32.355 47.1078 32.4367 46.6712 32.6C46.2345 32.76 45.8612 32.9867 45.5512 33.28C45.2445 33.5733 45.0078 33.9267 44.8412 34.34C44.6745 34.75 44.5912 35.2033 44.5912 35.7V35.965H42.4912V35.655C42.4912 34.8517 42.6228 34.1267 42.8862 33.48C43.1528 32.83 43.5345 32.2783 44.0312 31.825C44.5312 31.3683 45.1362 31.0167 45.8462 30.77C46.5562 30.5233 47.3562 30.4 48.2462 30.4C49.1095 30.4 49.8778 30.515 50.5512 30.745C51.2245 30.9717 51.7928 31.295 52.2562 31.715C52.7195 32.1317 53.0712 32.6333 53.3112 33.22C53.5545 33.8033 53.6762 34.4517 53.6762 35.165C53.6762 35.715 53.6062 36.1983 53.4662 36.615C53.3295 37.0317 53.1428 37.3967 52.9062 37.71C52.6728 38.02 52.3995 38.2867 52.0862 38.51C51.7762 38.73 51.4462 38.92 51.0962 39.08C50.7495 39.2367 50.3945 39.3717 50.0312 39.485C49.6678 39.5983 49.3178 39.7033 48.9812 39.8L48.0962 40.055C47.8262 40.1317 47.5495 40.2133 47.2662 40.3C46.9862 40.3833 46.7145 40.4817 46.4512 40.595C46.1878 40.705 45.9395 40.8333 45.7062 40.98C45.4728 41.1233 45.2678 41.2933 45.0912 41.49C44.9178 41.6867 44.7778 41.9133 44.6712 42.17C44.5678 42.4267 44.5112 42.72 44.5012 43.05H53.6312V45H42.4262Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_5335_33232"
        x="0.275687"
        y="0.105765"
        width="81.4486"
        height="81.4486"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="6.36216"
          result="effect1_foregroundBlur_5335_33232"
        />
      </filter>
      <filter
        id="filter1_d_5335_33232"
        x="10.8793"
        y="9.16992"
        width="60.2414"
        height="60.6656"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.54486" />
        <feGaussianBlur stdDeviation="1.06036" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0431373 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5335_33232"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5335_33232"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const StepThree = () => (
  <svg
    width="79"
    height="79"
    viewBox="0 0 79 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_5335_33242)">
      <path
        d="M49.6297 13.4355H28.9349C28.5898 13.4355 28.2578 13.5723 28.0136 13.8164L13.3809 28.4503C13.1367 28.6945 13 29.0265 13 29.3716V50.0657C13 50.4108 13.1367 50.7429 13.3809 50.9871L28.0136 65.6193C28.2578 65.8634 28.5898 66.0002 28.9349 66.0002H49.6297C49.9748 66.0002 50.3069 65.8634 50.5511 65.6193L65.1837 50.9871C65.4279 50.7429 65.5646 50.4108 65.5646 50.0657V29.3716C65.5646 29.0265 65.4279 28.6945 65.1837 28.4503L50.5511 13.8164C50.3069 13.5723 49.9748 13.4355 49.6297 13.4355Z"
        fill="#3865FD"
      />
    </g>
    <g filter="url(#filter1_d_5335_33242)">
      <path
        d="M49.6297 10H28.9349C28.5898 10 28.2578 10.1367 28.0136 10.3809L13.3809 25.0147C13.1367 25.2589 13 25.591 13 25.9361V46.6302C13 46.9753 13.1367 47.3073 13.3809 47.5515L28.0136 62.1837C28.2578 62.4279 28.5898 62.5646 28.9349 62.5646H49.6297C49.9748 62.5646 50.3069 62.4279 50.5511 62.1837L65.1837 47.5515C65.4279 47.3073 65.5646 46.9753 65.5646 46.6302V25.9361C65.5646 25.591 65.4279 25.2589 65.1837 25.0147L50.5511 10.3809C50.3069 10.1367 49.9748 10 49.6297 10Z"
        fill="#3865FD"
      />
    </g>
    <path
      d="M25.8719 36.85C25.8719 36.11 25.9419 35.4133 26.0819 34.76C26.2219 34.1033 26.4219 33.5 26.6819 32.95C26.9452 32.3967 27.2652 31.9017 27.6419 31.465C28.0185 31.025 28.4435 30.6533 28.9169 30.35C29.3935 30.0433 29.9135 29.8083 30.4769 29.645C31.0402 29.4817 31.6385 29.4 32.2719 29.4C32.9085 29.4 33.5069 29.4817 34.0669 29.645C34.6302 29.8083 35.1485 30.0433 35.6219 30.35C36.0985 30.6533 36.5252 31.025 36.9019 31.465C37.2785 31.9017 37.5969 32.3967 37.8569 32.95C38.1202 33.5 38.3219 34.1033 38.4619 34.76C38.6019 35.4133 38.6719 36.11 38.6719 36.85C38.6719 37.5867 38.6019 38.2833 38.4619 38.94C38.3219 39.5967 38.1202 40.2017 37.8569 40.755C37.5969 41.305 37.2785 41.8 36.9019 42.24C36.5252 42.6767 36.0985 43.0483 35.6219 43.355C35.1485 43.6583 34.6302 43.8917 34.0669 44.055C33.5035 44.2183 32.9052 44.3 32.2719 44.3C31.6385 44.3 31.0402 44.2183 30.4769 44.055C29.9135 43.8917 29.3935 43.6583 28.9169 43.355C28.4435 43.0483 28.0185 42.6767 27.6419 42.24C27.2652 41.8 26.9452 41.305 26.6819 40.755C26.4219 40.2017 26.2219 39.5967 26.0819 38.94C25.9419 38.2833 25.8719 37.5867 25.8719 36.85ZM27.9719 36.85C27.9719 37.71 28.0702 38.48 28.2669 39.16C28.4635 39.84 28.7469 40.4167 29.1169 40.89C29.4869 41.36 29.9369 41.7217 30.4669 41.975C31.0002 42.225 31.6019 42.35 32.2719 42.35C32.9419 42.35 33.5419 42.225 34.0719 41.975C34.6052 41.7217 35.0569 41.36 35.4269 40.89C35.7969 40.4167 36.0802 39.84 36.2769 39.16C36.4735 38.48 36.5719 37.71 36.5719 36.85C36.5719 35.99 36.4735 35.22 36.2769 34.54C36.0802 33.86 35.7969 33.285 35.4269 32.815C35.0569 32.3417 34.6052 31.98 34.0719 31.73C33.5419 31.4767 32.9419 31.35 32.2719 31.35C31.6019 31.35 31.0002 31.4767 30.4669 31.73C29.9369 31.98 29.4869 32.3417 29.1169 32.815C28.7469 33.285 28.4635 33.86 28.2669 34.54C28.0702 35.22 27.9719 35.99 27.9719 36.85ZM40.0711 34.13C40.0711 33.3867 40.1994 32.7217 40.4561 32.135C40.7161 31.5483 41.0911 31.0533 41.5811 30.65C42.0711 30.2433 42.6694 29.9333 43.3761 29.72C44.0828 29.5067 44.8861 29.4 45.7861 29.4C46.6361 29.4 47.4078 29.495 48.1011 29.685C48.7978 29.8717 49.3928 30.1383 49.8861 30.485C50.3794 30.8283 50.7611 31.2433 51.0311 31.73C51.3011 32.2133 51.4361 32.7533 51.4361 33.35C51.4361 33.7933 51.3611 34.2033 51.2111 34.58C51.0644 34.9567 50.8561 35.2883 50.5861 35.575C50.3194 35.8583 49.9978 36.09 49.6211 36.27C49.2478 36.4467 48.8361 36.5583 48.3861 36.605C48.9728 36.6383 49.4961 36.74 49.9561 36.91C50.4194 37.08 50.8111 37.3117 51.1311 37.605C51.4544 37.895 51.7011 38.2417 51.8711 38.645C52.0411 39.045 52.1261 39.495 52.1261 39.995C52.1261 40.645 51.9844 41.235 51.7011 41.765C51.4178 42.2917 51.0161 42.7433 50.4961 43.12C49.9761 43.4967 49.3511 43.7883 48.6211 43.995C47.8911 44.1983 47.0794 44.3 46.1861 44.3C45.2428 44.3 44.3928 44.185 43.6361 43.955C42.8794 43.7217 42.2378 43.39 41.7111 42.96C41.1844 42.53 40.7794 42.0067 40.4961 41.39C40.2128 40.7733 40.0711 40.08 40.0711 39.31V39.285H42.1711V39.435C42.1711 39.875 42.2628 40.275 42.4461 40.635C42.6294 40.9917 42.8878 41.2983 43.2211 41.555C43.5578 41.8083 43.9628 42.005 44.4361 42.145C44.9094 42.2817 45.4361 42.35 46.0161 42.35C46.5961 42.35 47.1311 42.2817 47.6211 42.145C48.1111 42.0083 48.5344 41.82 48.8911 41.58C49.2478 41.3367 49.5261 41.0483 49.7261 40.715C49.9261 40.3783 50.0261 40.0133 50.0261 39.62C50.0261 38.9567 49.7244 38.465 49.1211 38.145C48.5178 37.825 47.5928 37.665 46.3461 37.665H44.5411V35.815H46.3461C46.8061 35.815 47.2211 35.7667 47.5911 35.67C47.9611 35.57 48.2761 35.43 48.5361 35.25C48.7961 35.07 48.9961 34.8533 49.1361 34.6C49.2794 34.3433 49.3511 34.0567 49.3511 33.74C49.3511 33.3833 49.2611 33.0583 49.0811 32.765C48.9044 32.4717 48.6528 32.22 48.3261 32.01C48.0028 31.8 47.6128 31.6383 47.1561 31.525C46.7028 31.4083 46.1994 31.35 45.6461 31.35C45.0861 31.35 44.5894 31.4117 44.1561 31.535C43.7261 31.655 43.3628 31.8333 43.0661 32.07C42.7728 32.3033 42.5494 32.5933 42.3961 32.94C42.2461 33.2833 42.1711 33.6783 42.1711 34.125V34.155H40.0711V34.13Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_5335_33242"
        x="0.275687"
        y="0.711234"
        width="78.0131"
        height="78.0131"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="6.36216"
          result="effect1_foregroundBlur_5335_33242"
        />
      </filter>
      <filter
        id="filter1_d_5335_33242"
        x="10.8793"
        y="10"
        width="56.8059"
        height="57.23"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.54486" />
        <feGaussianBlur stdDeviation="1.06036" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0431373 0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5335_33242"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5335_33242"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Arbitrum = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5335_33274)">
      <path
        d="M5.24414 17.0227V38.9769C5.24414 40.3786 5.99369 41.6746 7.20769 42.3732L26.2316 53.3526C27.4456 54.0512 28.9401 54.0512 30.1541 53.3526L49.178 42.3732C50.392 41.6746 51.1416 40.3786 51.1416 38.9769V17.0227C51.1416 15.621 50.392 14.3249 49.178 13.6264L30.1541 2.64697C28.9401 1.94841 27.4456 1.94841 26.2316 2.64697L7.20309 13.6264C5.98909 14.3249 5.24414 15.621 5.24414 17.0227Z"
        fill="#213147"
      />
      <path
        d="M32.3445 32.2579L29.6314 39.694C29.5578 39.9008 29.5578 40.126 29.6314 40.3328L34.2988 53.1275L39.6974 50.0116L33.2182 32.2579C33.071 31.8489 32.4916 31.8489 32.3445 32.2579Z"
        fill="#12AAFF"
      />
      <path
        d="M37.7846 19.7526C37.6374 19.3435 37.058 19.3435 36.9109 19.7526L34.1978 27.1886C34.1242 27.3954 34.1242 27.6206 34.1978 27.8274L41.845 48.7751L47.2437 45.6592L37.7846 19.7526Z"
        fill="#12AAFF"
      />
      <path
        d="M28.1912 3.46984C28.3245 3.46984 28.4579 3.50661 28.5775 3.57095L49.1649 15.4511C49.404 15.589 49.5511 15.8464 49.5511 16.1175V39.8733C49.5511 40.149 49.404 40.4018 49.1649 40.5397L28.5775 52.4199C28.4625 52.4888 28.3245 52.521 28.1912 52.521C28.0578 52.521 27.9245 52.4842 27.8049 52.4199L7.2175 40.5489C6.97838 40.411 6.83123 40.1536 6.83123 39.8825V16.1221C6.83123 15.8464 6.97838 15.5936 7.2175 15.4557L27.8049 3.57554C27.9245 3.50661 28.0578 3.46984 28.1912 3.46984ZM28.1912 0C27.46 0 26.7243 0.188428 26.0667 0.569881L5.48387 12.4455C4.16871 13.2038 3.35938 14.6055 3.35938 16.1221V39.8779C3.35938 41.3945 4.16871 42.7962 5.48387 43.5545L26.0713 55.4347C26.7289 55.8116 27.46 56.0046 28.1958 56.0046C28.9269 56.0046 29.6627 55.8162 30.3203 55.4347L50.9077 43.5545C52.2228 42.7962 53.0322 41.3945 53.0322 39.8779V16.1221C53.0322 14.6055 52.2228 13.2038 50.9077 12.4455L30.3157 0.569881C29.6581 0.188428 28.9223 0 28.1912 0Z"
        fill="#9DCCED"
      />
      <path
        d="M14.5742 48.8027L16.4688 43.6187L20.2809 46.7852L16.7171 50.039L14.5742 48.8027Z"
        fill="#213147"
      />
      <path
        d="M26.4569 14.4219H21.2376C20.8467 14.4219 20.4972 14.6655 20.3639 15.0331L9.17578 45.6872L14.5744 48.8032L26.8937 15.0469C27.0087 14.7436 26.7834 14.4219 26.4569 14.4219Z"
        fill="white"
      />
      <path
        d="M35.5902 14.4219H30.371C29.9801 14.4219 29.6306 14.6655 29.4972 15.0331L16.7227 50.0348L22.1213 53.1508L36.0271 15.0469C36.1374 14.7436 35.9121 14.4219 35.5902 14.4219Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_5335_33274">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CitizendProjectDescription = () => {
  return (
    <div className="max-w-2xl text-mono-50">
      <h3 className="hidden md:block">Description</h3>
      <p className="text-mono-400">
        Citizend provides a community-curated filter mechanism that is able to
        identify high-quality projects at their earliest stages, and aligning
        incentives between projects and web3 users enabling both Community Sales
        and Public token launches.
      </p>
      <br />
      <p className="text-mono-400">
        Citizend is not just another token launch platform; it is a movement
        towards a more democratic, transparent, and community-focused web3
        ecosystem. By empowering its community to curate and select projects,
        citizend is breaking new ground, fostering a space where innovation
        thrives on the merits of consensus and shared values. Created by the
        community, for the community.highest potential.
      </p>
      <h3 className="mt-16">How does it work</h3>
      <p className="text-mono-400">
        Projects hoping to secure community contributions must garner the
        greatest number of votes from the community to win a slot, with each
        member of the community being able to cast only one vote, among multiple
        competing projects in each batch. To do so, projects must convince the
        community of their worth, as community members only receive allocations
        if their chosen project is elected, they are incentivized to research
        and select the projects with the highest potential.
      </p>
      <div className="mt-6 flex flex-col gap-6 py-8">
        <div className="flex items-center">
          <div className="-ml-4 flex-grow">
            <StepOne />
          </div>
          <div className="flex flex-col gap-3 pl-4">
            <h4 className="text-xl text-mono-50">Explore</h4>
            <p className="text-sm text-mono-400">
              Explore projects, sign up, and start your KYC process to prepare
              for voting.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="-ml-4 flex-grow">
            <StepTwo />
          </div>
          <div className="flex flex-col gap-3 pl-4">
            <h4 className="text-xl text-mono-50">Vote</h4>
            <p className="text-sm text-mono-400">
              Cast your single vote for your favorite project to help determine
              the winner of the contribution slot.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="-ml-4 flex-grow">
            <StepThree />
          </div>
          <div className="flex flex-col gap-3 pl-4">
            <h4 className="text-xl text-mono-50">Contribute</h4>
            <p className="text-sm text-mono-400">
              Contribute to the winning project using the Two-pool contribution
              system, ensuring fair allocation.
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-8">Key partners and Backers</h3>
      <p className="text-mono-400">
        We built citizend to match great projects with web3-native verified
        users. List of our partners and backers include Fractal ID, Outlier
        Ventures, Arbitrum and more.
      </p>
      <div className="mt-6 flex flex-col gap-6">
        <div className="flex">
          <div className="min-w-14">
            <Image alt="fractal logo" src={fractal} placeholder="blur" />
          </div>
          <div className="flex flex-col gap-3 pl-6">
            <h4 className="text-xl text-mono-50">Fractal ID</h4>
            <p className="text-sm text-mono-400">
              Fractal ID is one of the leading KYC and compliance providers for
              web3 with more than 1.1m users verified and 250 projects supported
              since 2017. Fractal ID develops decentralized identity solutions
              for dApps and ecosystems to ensure a safer, privacy-preserving
              web3.
            </p>
            <p className="text-xl text-blue-500">+1.1m users verified</p>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-14">
            <Image
              alt="fractal logo"
              src={outlier}
              placeholder="blur"
              className="h-14 w-14"
            />
          </div>
          <div className="flex flex-col gap-3 pl-6">
            <h4 className="text-xl text-mono-50">Outlier Ventures</h4>
            <p className="text-sm text-mono-400">
              Outlier Ventures, founded in 2014, is the largest web3-focused
              accelerator, with more than 270 projects accelerated and a network
              of 500+ investors and top VCs.{' '}
            </p>
            <p className="text-xl text-blue-500">+140 projects every year</p>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-14 flex-grow">
            <Arbitrum />
          </div>
          <div className="flex flex-col gap-3 pl-6">
            <h4 className="text-xl text-mono-50">Arbitrum</h4>
            <p className="text-sm text-mono-400">
              Arbitrum is the leading Layer 2 ecosystem for scaling and
              empowering Ethereum with more than +600k weekly active addresses
              and +800 projects deployed and a strong focus on DeFi.
            </p>
            <p className="text-xl text-blue-500">+15bn Total Value Locked</p>
          </div>
        </div>
      </div>
      <h3 className="mt-16">The rising tide mechanism</h3>
      <p className="text-mono-400">
        A standout feature of citizend’s approach is the Rising Tide Mechanism,
        a cleverly designed system that optimizes for community distribution,
        while enabling price discovery. This mechanism ensures that resources
        are allocated fairly among contributors, facilitating a transparent and
        equitable funding process. It’s a testament to citizend’s commitment to
        fairness, ensuring that all community members, regardless of their
        contribution size, have an opportunity to participate in the success of
        the projects they support.
      </p>
      <br />
      <p className="text-mono-400">
        The Rising Tide Mechanism embodies citizend’s vision of a token launch
        platform that values community engagement and contribution equally,
        paving the way for a more inclusive and balanced web3 ecosystem.
      </p>
      <h3 className="mt-16">Privacy and Compliance with idOS</h3>
      <p className="text-mono-400">
        Citizend places a strong emphasis on ensuring the confidentiality and
        security of its users’ information. Leveraging idOS, a state-of-the-art
        solution for identity verification, citizend enables users to manage
        their credentials in a self-sovereign, privacy-preserving manner. This
        not only improves user trust but also aligns with the broader web3
        vision of decentralization and user control.
      </p>
    </div>
  );
};
