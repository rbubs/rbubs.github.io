import React, { useCallback, useEffect, useState } from 'react';
import './NavMenu.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../redux/actions';

const NavMenu = ({ handler, handleIsShowBottomContent, isBottomContent, isLandscape }) => {
  const [address, setAddress] = useState(null);
  const providerOptions = {
    injected: {
      display: {
        name: 'Injected',
        description: 'Metamask',
      },
      package: null,
    },
  };

  let web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    providerOptions, // required
    cachedProvider: true,
  });

  const dispatch = useDispatch();

  const connect = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      setAddress(accounts[0]);
      dispatch(fetchUser({ address: accounts[0] }));
    }
  };

  useEffect(() => {
    dispatch(fetchUser({ address: address }));
  }, []);

  const disconnect = async () => {
    const provider = await web3Modal.connect();
    provider.on('disconnect', (res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    connect();
  }, [address]);

  const [isShow, setIsShow] = useState(isBottomContent);
  const [isShowMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    var navButton = document.querySelector('button[aria-expanded]');
    var navMenu = document.querySelector('#nav-menu');
    var htmlElement = document.documentElement;

    function closeNav() {
      navButton.setAttribute('aria-expanded', false);
      navButton.style.display = 'block';
      navButton.addEventListener('click', openNav);
    }

    function closeNavOnBodyClick(event) {
      const path = event.composedPath();
      if (path.some((elem) => elem.id === 'nav-menu' || elem.id === 'nav-menu-button')) {
        return;
      }
      htmlElement.removeEventListener('click', closeNavOnBodyClick);
      closeNav();
    }

    function openNav() {
      navButton.setAttribute('aria-expanded', true);
      navButton.style.display = 'block';
      navButton.removeEventListener('click', openNav);
      htmlElement.addEventListener('click', closeNavOnBodyClick);
      handler('close');
    }

    navButton.addEventListener('click', openNav);

    // clean up function
    return () => {
      navButton.removeEventListener('click', openNav);
      htmlElement.removeEventListener('click', closeNavOnBodyClick);
    };
  }, []);

  // simulate a click on body to close menu
  const triggerBodyClick = () => {
    var eventClickBody = document.createEvent('HTMLEvents');
    eventClickBody.initEvent('click', true, false);
    document.documentElement.dispatchEvent(eventClickBody);
  };

  const menuSelect = (event) => {
    event.preventDefault();
    triggerBodyClick();
    handler(event.currentTarget.id);
    isShowMenu ? setOpenMenu(!isShowMenu) : '';
  };

  const toggleShow = () => {
    setIsShow(!isShow);
    isShowMenu ? setOpenMenu(!isShowMenu) : '';
    handleIsShowBottomContent();
  };
  const openMenu = () => {
    setOpenMenu(!isShowMenu);
  };

  return (
    <div className="d-flex">
      {/* <button onClick={disconnect}>disconnect</button> */}
      <button
        onClick={connect}
        style={{
          position: 'absolute',
          right: '274px',
          top: '12px',
          marginRight: 0,
          display: isShowMenu ? 'none' : 'block',
        }}
        className="connectBtn displayNone"
        type="button"
      >
        {address !== null ? <>{address.substring(0, 6)}...</> : <>Connect</>}
      </button>
      <div
        className="eyeIconContainer cursor-pointer displayNone"
        style={{ right: isLandscape ? '22px' : '162px', display: isShowMenu ? 'none' : 'block' }}
      >
        {!isShow ? (
          <FontAwesomeIcon onClick={toggleShow} className="eyeIcon" icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon onClick={toggleShow} className="eyeIcon" icon={faEye} />
        )}
      </div>

      <div style={{ display: isLandscape ? 'none' : 'block' }} onClick={openMenu}>
        <button
          type="button"
          aria-expanded="false"
          aria-controls="nav-menu-list"
          id="nav-menu-button"
          className="cursor-pointer"
        >
          <div className="nav-icon nav-open">
            <svg
              width="33"
              height="21"
              viewBox="0 0 33 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect width="32" height="4" rx="2" fill="white" />
                <rect y="8" width="32" height="4" rx="2" fill="white" />
                <rect y="16" width="32" height="4" rx="2" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="33"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="1" dy="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </button>
        <nav id="nav-menu" role="menu" className={`${isShowMenu ? 'width-250' : ''}`}>
          <ol id="nav-menu-list" hidden>
            <li className="primaryLi">
              <button onClick={connect} className="connectBtn" type="button">
                {address !== null ? <>{address.substring(0, 6)}...</> : <>Connect</>}
              </button>
              {!isShow ? (
                <FontAwesomeIcon
                  onClick={toggleShow}
                  className="eyeIcon primaryLiEyeBtn"
                  icon={faEyeSlash}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={toggleShow}
                  className="eyeIcon primaryLiEyeBtn"
                  icon={faEye}
                />
              )}
              <a
                className="nav-item primaryCloseBtn"
                role="menuitem"
                id="close"
                onClick={menuSelect}
              >
                close
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693254 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 13.8988 31.5861 11.8183 30.7821 9.87706C29.978 7.93585 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM20.336 18.064C20.486 18.2127 20.605 18.3897 20.6862 18.5847C20.7675 18.7796 20.8093 18.9888 20.8093 19.2C20.8093 19.4112 20.7675 19.6203 20.6862 19.8153C20.605 20.0103 20.486 20.1873 20.336 20.336C20.1873 20.486 20.0103 20.605 19.8153 20.6862C19.6204 20.7675 19.4112 20.8093 19.2 20.8093C18.9888 20.8093 18.7797 20.7675 18.5847 20.6862C18.3897 20.605 18.2127 20.486 18.064 20.336L16 18.256L13.936 20.336C13.7873 20.486 13.6103 20.605 13.4153 20.6862C13.2204 20.7675 13.0112 20.8093 12.8 20.8093C12.5888 20.8093 12.3797 20.7675 12.1847 20.6862C11.9897 20.605 11.8127 20.486 11.664 20.336C11.514 20.1873 11.395 20.0103 11.3138 19.8153C11.2325 19.6203 11.1907 19.4112 11.1907 19.2C11.1907 18.9888 11.2325 18.7796 11.3138 18.5847C11.395 18.3897 11.514 18.2127 11.664 18.064L13.744 16L11.664 13.936C11.3627 13.6347 11.1935 13.2261 11.1935 12.8C11.1935 12.3739 11.3627 11.9653 11.664 11.664C11.9653 11.3627 12.3739 11.1935 12.8 11.1935C13.2261 11.1935 13.6347 11.3627 13.936 11.664L16 13.744L18.064 11.664C18.3653 11.3627 18.7739 11.1935 19.2 11.1935C19.6261 11.1935 20.0347 11.3627 20.336 11.664C20.6373 11.9653 20.8065 12.3739 20.8065 12.8C20.8065 13.2261 20.6373 13.6347 20.336 13.936L18.256 16L20.336 18.064Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-rule">
              <hr />
            </li>
            <li>
              <a className="nav-item" role="menuitem" id="search" onClick={menuSelect}>
                <span>search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM9.2733 14.5493C9.2733 9.82753 12.8688 6 17.3036 6C21.7384 6 25.3333 9.82753 25.3333 14.5493C25.3333 19.2711 21.7385 23.0993 17.3036 23.0993C15.9616 23.0993 14.6963 22.7487 13.5843 22.1289C13.5855 22.1343 13.5869 22.1398 13.588 22.1452L9.96809 26L7 22.8399L10.4941 19.1203C10.4998 19.1175 10.5055 19.1151 10.5112 19.1125C9.72704 17.792 9.2733 16.227 9.2733 14.5493ZM21.7656 14.5493C21.7656 11.9253 19.7682 9.79795 17.3036 9.79795C14.8391 9.79795 12.841 11.9253 12.841 14.5493C12.841 17.1733 14.8391 19.3007 17.3036 19.3007C19.7682 19.3007 21.7656 17.1733 21.7656 14.5493Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="nav-item" role="menuitem" id="about" onClick={menuSelect}>
                <span>about</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM20.6846 21.6001L23.7066 18.5777C23.7993 18.4857 23.8729 18.3762 23.9233 18.2557C23.9736 18.1351 23.9997 18.0058 24 17.8752C24.0003 17.7446 23.9749 17.6151 23.9251 17.4944C23.8753 17.3736 23.8022 17.2638 23.71 17.1713L21.2003 14.6582L22.6942 13.1615C22.8908 12.9644 23.0012 12.6975 23.0012 12.4192C23.0012 12.1408 22.8908 11.8739 22.6942 11.6769L21.2096 10.1923C21.0127 9.99553 20.7457 9.885 20.4673 9.885C20.1889 9.885 19.9219 9.99553 19.7249 10.1923L18.231 11.6891L15.7208 9.17946C15.5332 8.99301 15.2792 8.88853 15.0147 8.8889C14.8841 8.88845 14.7547 8.9139 14.634 8.96378C14.5133 9.01365 14.4036 9.08696 14.3114 9.17946L11.2889 12.2018C11.1029 12.3892 10.9985 12.6425 10.9985 12.9065C10.9985 13.1705 11.1029 13.4239 11.2889 13.6112L13.7986 16.1242L13.4924 16.4305C12.6604 16.0527 11.7527 15.8715 10.8395 15.9008C9.92622 15.9301 9.03197 16.1692 8.22591 16.5994C7.96022 16.743 7.92604 17.1117 8.13847 17.3246L11.4985 20.6844L10.9422 21.2407C10.9253 21.2361 10.9088 21.2313 10.8923 21.2265C10.8292 21.2082 10.7678 21.1904 10.6985 21.1904C10.5007 21.1904 10.3073 21.249 10.1429 21.3589C9.97839 21.4688 9.8502 21.625 9.7745 21.8078C9.69881 21.9906 9.67901 22.1916 9.7176 22.3857C9.7562 22.5797 9.85145 22.7579 9.99133 22.8977C10.1312 23.0376 10.3094 23.1329 10.5034 23.1715C10.6974 23.21 10.8985 23.1902 11.0813 23.1145C11.264 23.0388 11.4202 22.9106 11.5301 22.7462C11.64 22.5817 11.6987 22.3883 11.6987 22.1905C11.6987 22.1212 11.6809 22.0599 11.6625 21.9968C11.6578 21.9803 11.6529 21.9637 11.6484 21.9468L12.2046 21.3906L15.5646 24.7504C15.7775 24.9629 16.1492 24.9286 16.2898 24.663C16.7201 23.857 16.9591 22.9628 16.9884 22.0495C17.0177 21.1363 16.8365 20.2286 16.4588 19.3967L16.7679 19.087L19.2781 21.6001C19.4648 21.7862 19.7177 21.8906 19.9813 21.8906C20.245 21.8906 20.4979 21.7862 20.6846 21.6001ZM17.1684 12.7517L14.8613 15.0587L12.7081 12.9051L15.0147 10.5986L17.1684 12.7517ZM20.1376 15.7209L22.2908 17.8745L19.9843 20.181L17.8306 18.0278L20.1376 15.7209Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="nav-item" role="menuitem" id="browseStories" onClick={menuSelect}>
                <span>browse stories</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM20.8485 15.4116C23.2374 16.5455 24.8889 18.9798 24.8889 21.798L20.9444 21.8005C20.9949 21.9874 21.0227 22.1894 21.0227 22.4015C21.0218 22.9598 20.8313 23.5011 20.4823 23.9369C20.1977 24.2893 19.821 24.5559 19.3939 24.7071C19.1136 25.3662 18.6515 25.9242 18.0556 26.3232C17.447 26.7323 16.7348 26.9495 16 26.9495C14.5126 26.9495 13.1869 26.0707 12.6035 24.7071C12.1763 24.555 11.7996 24.2875 11.5152 23.9343C11.1667 23.5025 10.9747 22.9571 10.9747 22.399C10.9747 22.1768 11.0051 21.9798 11.0631 21.798H7.11111C7.11111 18.9798 8.76263 16.5455 11.1515 15.4116V11.2247C11.152 10.8438 11.287 10.4753 11.5328 10.1843L15.3813 5.62121C15.5429 5.42929 15.7727 5.33333 16 5.33333C16.2273 5.33333 16.4571 5.42929 16.6187 5.62121L20.4672 10.1843C20.7146 10.4747 20.8485 10.8434 20.8485 11.2247V15.4116ZM16.8412 12.4646C16.6192 12.238 16.3172 12.1075 16 12.101C15.6828 12.1075 15.3808 12.238 15.1588 12.4646C14.9367 12.6913 14.8124 12.9959 14.8124 13.3131C14.8124 13.6304 14.9367 13.935 15.1588 14.1616C15.3808 14.3882 15.6828 14.5188 16 14.5253C16.3172 14.5188 16.6192 14.3882 16.8412 14.1616C17.0633 13.935 17.1876 13.6304 17.1876 13.3131C17.1876 12.9959 17.0633 12.6913 16.8412 12.4646ZM18.5 23.101C18.649 23.1212 18.8005 23.0909 18.9318 23.0152C19.1515 22.8914 19.2879 22.654 19.2904 22.3965C19.2904 22.1313 19.1439 21.9091 18.9217 21.7955H13.0808C12.8611 21.9066 12.7121 22.1288 12.7121 22.3965C12.7121 22.6515 12.8485 22.8864 13.0682 23.0126C13.1988 23.0879 13.3503 23.1189 13.5 23.101L13.9924 23.0379L14.0631 23.5303C14.1995 24.4874 15.0328 25.2096 16 25.2096C16.9672 25.2096 17.8005 24.4874 17.9369 23.5303L18.0076 23.0404L18.5 23.101Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="nav-item" role="menuitem" id="myStories" onClick={menuSelect}>
                <span>my stories</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM25.6945 9.88816C25.6954 9.88776 25.6947 9.89684 25.6897 9.91658C25.6912 9.89843 25.6937 9.88856 25.6945 9.88816ZM25.3356 10.6102C24.8388 10.6379 24.1757 10.7425 23.3493 10.9555C22.7844 11.1011 22.1723 11.2897 21.5225 11.5197C21.9916 12.0972 22.3719 12.7497 22.6427 13.4565C23.1662 13.0091 23.6352 12.5737 24.0433 12.1577C24.641 11.5485 25.0631 11.0265 25.3356 10.6102ZM23.1035 15.6682C26.4041 13.0396 28.2462 10.5593 27.5406 9.3371C26.835 8.11504 23.7663 8.46999 19.8401 10.0138C18.7325 9.30187 17.4145 8.88889 16 8.88889C12.0726 8.88889 8.88889 12.0726 8.88889 16C8.88889 16.1113 8.89145 16.2219 8.8965 16.332C5.59599 18.9605 3.75401 21.4408 4.45961 22.6629C5.16516 23.8849 8.23377 23.53 12.16 21.9862C13.2676 22.6981 14.5856 23.1111 16 23.1111C19.9274 23.1111 23.1111 19.9274 23.1111 16C23.1111 15.8888 23.1086 15.7781 23.1035 15.6682ZM10.4776 20.4804C10.0085 19.9029 9.62812 19.2504 9.35733 18.5436C8.83388 18.991 8.36497 19.4264 7.95685 19.8423C7.35913 20.4515 6.93705 20.9735 6.66461 21.3898C7.1614 21.3621 7.8245 21.2575 8.65092 21.0445C9.2157 20.8989 9.82776 20.7103 10.4776 20.4804ZM5.85985 21.3397C5.86063 21.3392 5.87043 21.3419 5.8869 21.3497C5.86731 21.3442 5.85907 21.3403 5.85985 21.3397ZM6.30563 22.1118C6.30475 22.1122 6.30551 22.1032 6.31052 22.0834C6.30901 22.1016 6.3065 22.1114 6.30563 22.1118ZM26.1133 10.6503C26.1329 10.6558 26.1411 10.6597 26.1403 10.6603C26.1395 10.6608 26.1297 10.6581 26.1133 10.6503Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="nav-item" role="menuitem" id="station" onClick={menuSelect}>
                <span>station</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM14.0281 16.8153C14.2078 17.2491 14.5257 17.6115 14.9323 17.8463V26.6667H17.0654V17.8463C17.4721 17.6115 17.7899 17.2491 17.9696 16.8153C18.1493 16.3814 18.1808 15.9004 18.0593 15.4469C17.9378 14.9933 17.67 14.5925 17.2974 14.3066C16.9249 14.0208 16.4684 13.8658 15.9989 13.8658C15.5293 13.8658 15.0729 14.0208 14.7003 14.3066C14.3278 14.5925 14.06 14.9933 13.9384 15.4469C13.8169 15.9004 13.8484 16.3814 14.0281 16.8153ZM19.0172 19.0195L20.5211 20.5233H20.5317C21.426 19.6281 22.0347 18.4878 22.2811 17.2467C22.5274 16.0055 22.4003 14.7192 21.9157 13.5503C21.4312 12.3814 20.6109 11.3824 19.5587 10.6795C18.5065 9.97666 17.2696 9.60152 16.0042 9.60152C14.7388 9.60152 13.5019 9.97666 12.4497 10.6795C11.3975 11.3824 10.5772 12.3814 10.0927 13.5503C9.60813 14.7192 9.48098 16.0055 9.72733 17.2467C9.97367 18.4878 10.5824 19.6281 11.4767 20.5233L12.9805 19.0195C12.3832 18.4228 11.9763 17.6624 11.8115 16.8344C11.6466 16.0064 11.7311 15.148 12.0542 14.3681C12.3774 13.5881 12.9247 12.9216 13.6269 12.4528C14.3291 11.9841 15.1546 11.7343 15.9989 11.7349C16.8454 11.7291 17.6745 11.9759 18.38 12.4438C19.0856 12.9116 19.6356 13.5793 19.9596 14.3614C20.2837 15.1435 20.3671 16.0045 20.1992 16.8342C20.0314 17.664 19.6198 18.4249 19.0172 19.0195ZM22.0356 22.0378L23.5394 23.5417C25.0313 22.0502 26.0474 20.1498 26.4592 18.0808C26.871 16.0118 26.66 13.8671 25.8528 11.9181C25.0457 9.96903 23.6787 8.30311 21.9247 7.13102C20.1706 5.95894 18.1084 5.33333 15.9989 5.33333C13.8893 5.33333 11.8271 5.95894 10.0731 7.13102C8.31908 8.30311 6.95205 9.96903 6.1449 11.9181C5.33775 13.8671 5.12672 16.0118 5.53851 18.0808C5.95031 20.1498 6.96642 22.0502 8.45834 23.5417L9.97285 22.0378C8.77901 20.8448 7.96582 19.3244 7.63614 17.6692C7.30646 16.0139 7.4751 14.298 8.12074 12.7386C8.76637 11.1792 9.85999 9.84626 11.2633 8.90846C12.6665 7.97065 14.3164 7.47009 16.0042 7.47009C17.692 7.47009 19.3419 7.97065 20.7451 8.90846C22.1484 9.84626 23.242 11.1792 23.8877 12.7386C24.5333 14.298 24.7019 16.0139 24.3723 17.6692C24.0426 19.3244 23.2294 20.8448 22.0356 22.0378Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
