import { TClassNameProps } from '@/app/_types';
import clsx from 'clsx';
import Link from 'next/link';
import { Twitter } from './svg/Twitter';

const resources = [
  {
    name: 'Website',
    href: '#',
    icon: () => (
      <svg
        width="52"
        height="40"
        viewBox="0 0 52 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="51"
          height="39"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.0001 10.0276C20.4924 10.0276 16.0276 14.4924 16.0276 20.0001C16.0276 25.5077 20.4924 29.9726 26.0001 29.9726C31.5077 29.9726 35.9726 25.5077 35.9726 20.0001C35.9726 14.4924 31.5077 10.0276 26.0001 10.0276ZM14.9902 20.0001C14.9902 13.9195 19.9195 8.99023 26.0001 8.99023C32.0806 8.99023 37.0099 13.9195 37.0099 20.0001C37.0099 26.0806 32.0806 31.0099 26.0001 31.0099C19.9195 31.0099 14.9902 26.0806 14.9902 20.0001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3096 12.7854C22.5325 14.6053 22.0393 17.1558 22.0393 20.0001C22.0393 22.8443 22.5325 25.3948 23.3096 27.2148C23.6985 28.1257 24.1484 28.8297 24.6214 29.2983C25.0923 29.7648 25.5576 29.9726 26 29.9726C26.4424 29.9726 26.9077 29.7648 27.3785 29.2983C27.8516 28.8297 28.3014 28.1257 28.6904 27.2148C29.4675 25.3948 29.9607 22.8443 29.9607 20.0001C29.9607 17.1558 29.4675 14.6053 28.6904 12.7854C28.3014 11.8744 27.8516 11.1704 27.3785 10.7018C26.9077 10.2353 26.4424 10.0276 26 10.0276C25.5576 10.0276 25.0923 10.2353 24.6214 10.7018C24.1484 11.1704 23.6985 11.8744 23.3096 12.7854ZM23.8914 9.96487C24.4923 9.36958 25.2054 8.99023 26 8.99023C26.7946 8.99023 27.5077 9.36958 28.1086 9.96487C28.7073 10.558 29.2227 11.3904 29.6444 12.378C30.4885 14.3551 30.998 17.0502 30.998 20.0001C30.998 22.9499 30.4885 25.645 29.6444 27.6221C29.2227 28.6097 28.7073 29.4421 28.1086 30.0352C27.5077 30.6305 26.7946 31.0099 26 31.0099C25.2054 31.0099 24.4923 30.6305 23.8914 30.0352C23.2927 29.4421 22.7773 28.6097 22.3556 27.6221C21.5115 25.645 21.002 22.9499 21.002 20.0001C21.002 17.0502 21.5115 14.3551 22.3556 12.378C22.7773 11.3904 23.2927 10.558 23.8914 9.96487Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.4773 16.0158H16.5225V14.9785H35.4773V16.0158Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.4773 25.0217H16.5225V23.9844H35.4773V25.0217Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: '#',
    icon: () => (
      <svg
        width="51"
        height="40"
        viewBox="0 0 51 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="50"
          height="39"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          d="M29.4984 26.1883C30.0812 25.9081 30.6482 25.6354 31.2206 25.3602C31.0025 25.0219 30.8562 24.9693 30.5575 25.0975C28.5136 25.9733 26.3882 26.3283 24.1717 26.0906C22.8887 25.9532 21.6586 25.6141 20.4721 25.1104C20.1407 24.9697 20.0401 25.0014 19.7848 25.3364C19.9318 25.4178 20.0714 25.5055 20.2193 25.5757C20.5962 25.7548 20.9747 25.9315 21.3578 26.0969C21.4886 26.1533 21.5375 26.2055 21.4539 26.3391C21.1305 26.8587 20.8109 27.3803 20.4921 27.9023C20.4303 28.0034 20.3584 28.018 20.2469 27.9825C18.4273 27.4032 16.7448 26.5534 15.2035 25.4274C15.1325 25.3756 15.0744 25.2629 15.0665 25.1735C14.7878 22.1035 15.2269 19.1437 16.5234 16.3393C16.9688 15.3762 17.5382 14.4708 18.0471 13.5369C18.1641 13.3219 18.3396 13.1819 18.5652 13.111C19.4271 12.8387 20.2895 12.5668 21.156 12.3087C21.5224 12.1997 21.9022 12.137 22.2695 12.0297C22.4809 11.9679 22.5899 12.028 22.6731 12.2214C22.7775 12.464 22.915 12.6921 23.0165 12.9355C23.0763 13.0788 23.1515 13.1135 23.3002 13.0922C24.379 12.9381 25.4628 12.8942 26.5495 12.9735C26.9451 13.0024 27.3396 13.0479 27.7331 13.0951C27.8547 13.1097 27.9182 13.0842 27.9713 12.9648C28.0958 12.6854 28.2454 12.4177 28.3753 12.1408C28.433 12.0184 28.5094 11.9758 28.6394 12.013C29.8631 12.3621 31.0881 12.7079 32.3115 13.0587C32.6332 13.151 32.8492 13.3603 33.0322 13.6476C34.1995 15.4835 35.089 17.4356 35.5783 19.5613C36.0049 21.4156 36.1089 23.2908 35.9338 25.1827C35.9255 25.2712 35.8632 25.3815 35.791 25.4337C34.2534 26.5525 32.5793 27.4041 30.7631 27.9712C30.6958 27.9921 30.5646 27.9704 30.5349 27.9236C30.1848 27.3719 29.8481 26.8119 29.5088 26.2535C29.4992 26.2376 29.5025 26.2138 29.4988 26.1879L29.4984 26.1883ZM23.896 20.9625C23.8981 20.3172 23.7702 19.8887 23.5154 19.5137C22.8782 18.5765 21.6532 18.4141 20.8285 19.157C19.86 20.0299 19.9059 21.7017 20.9208 22.519C21.5813 23.0511 22.4792 23.0486 23.1285 22.5031C23.6583 22.0584 23.8839 21.4716 23.896 20.9621V20.9625ZM30.8738 20.8673C30.8725 20.4087 30.7814 20.0274 30.5826 19.6745C29.8944 18.4538 28.3335 18.3485 27.5205 19.4669C26.9172 20.2972 26.9736 21.5204 27.6512 22.291C28.3352 23.069 29.4395 23.1288 30.1944 22.4188C30.6544 21.9861 30.8579 21.4369 30.8742 20.8668L30.8738 20.8673Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Telegram',
    href: '#',
    icon: () => (
      <svg
        width="52"
        height="40"
        viewBox="0 0 52 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="51"
          height="39"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          d="M36.9802 9.89258C37.0152 9.89258 37.0506 9.89258 37.0855 9.89258C37.0966 9.89534 37.1076 9.89993 37.1186 9.90085C37.5687 9.93856 37.8299 10.1546 37.9434 10.5914C37.9697 10.6926 37.9811 10.7974 37.9995 10.9009V11.2526C37.9857 11.3606 37.9775 11.4696 37.9568 11.5758C37.8915 11.9128 37.8234 12.2494 37.7531 12.5855C37.4906 13.8402 37.2271 15.0949 36.9637 16.3496C36.6607 17.7933 36.3568 19.2369 36.0538 20.6806C35.8294 21.7482 35.6051 22.8158 35.3811 23.8834C35.0469 25.4742 34.7126 27.065 34.3789 28.6558C34.3136 28.9661 34.2326 29.2714 34.0731 29.5491C33.9117 29.8305 33.6929 30.0383 33.3572 30.0912C33.3228 30.0967 33.2883 30.1018 33.2538 30.1073H33.1485C33.1356 30.1041 33.1228 30.099 33.1099 30.0976C32.7568 30.0627 32.434 29.9326 32.154 29.7266C31.3191 29.1119 30.4952 28.4825 29.6667 27.859C28.7306 27.1542 27.7945 26.4498 26.8598 25.7441C26.8248 25.7174 26.8064 25.722 26.7775 25.7505C26.6887 25.8383 26.5968 25.9229 26.5062 26.0094C25.5701 26.9004 24.6359 27.7933 23.6961 28.6806C23.4731 28.8912 23.2028 28.9726 22.9007 28.8746C22.6708 28.8002 22.5209 28.6301 22.4032 28.4264C22.3756 28.3786 22.3651 28.3317 22.3701 28.2765C22.4202 27.6852 22.469 27.0935 22.5172 26.5022C22.5839 25.6852 22.6506 24.8678 22.7154 24.0503C22.7191 24.0057 22.7352 23.9753 22.7678 23.9459C23.8947 22.9215 25.0207 21.8963 26.1467 20.8714C27.8616 19.3101 29.577 17.7487 31.292 16.1873C32.2202 15.3422 33.1494 14.4976 34.0759 13.6507C34.1453 13.5873 34.2078 13.5105 34.2561 13.4296C34.3338 13.299 34.2768 13.1896 34.1251 13.1772C34.0354 13.1698 33.9416 13.1781 33.8529 13.196C33.6133 13.2448 33.4101 13.3726 33.2051 13.5004C31.8405 14.3519 30.4731 15.1997 29.1067 16.0489C27.3972 17.111 25.6874 18.1735 23.9775 19.2356C22.6809 20.0415 21.3839 20.8471 20.0878 21.6535C20.0538 21.6746 20.0248 21.682 19.9848 21.6691C18.2064 21.0999 16.4271 20.534 14.6497 19.9606C14.3398 19.8609 14.0855 19.6825 14 19.3386V19.1864C14.029 19.0746 14.0671 18.9675 14.1356 18.8723C14.3131 18.6264 14.5545 18.4636 14.8317 18.356C16.7848 17.596 18.7398 16.8397 20.6938 16.082C23.1848 15.1165 25.6754 14.151 28.1664 13.185C30.7609 12.179 33.3559 11.173 35.9499 10.1661C36.212 10.0645 36.4749 9.96476 36.7549 9.922C36.8299 9.91051 36.9053 9.90269 36.9807 9.89304L36.9802 9.89258Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

type TNavigationItem = {
  name: string;
  href: string;
  icon: () => JSX.Element;
};

const NavigationItem = ({ name, href, icon: Icon }: TNavigationItem) => {
  return (
    <li key={name}>
      <Link
        href={href}
        className="font-medium text-mono-200 hover:text-blue-500"
      >
        <span className="sr-only">{name}</span>
        <Icon />
      </Link>
    </li>
  );
};

export const SocialResources = ({ className }: TClassNameProps) => {
  return (
    <div>
      <ul
        role="list"
        className={clsx('flex flex-row items-start gap-8', className)}
      >
        {resources.map((item) => (
          <NavigationItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
};
