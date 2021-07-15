import React, { useState, useEffect } from 'react';
import './Mystories.Styles.css';

const StoreHome = ({ display, handler, isBottomContent, isLandscape }) => {
  // if (
  //   display === 'browseStories' ||
  //   display === 'store-in-details' ||
  //   display === 'myStories' ||
  //   (display === 'MystoriesInDetails' && width <= 768)
  // ) {
  //   return null;
  // }

  const openMystories = (event) => {
    if(!isLandscape){
      event.preventDefault();
      handler('myStories');
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let displayNone = display === 'myStories';

  return (
    <div
      id="Mystores-home"
      style={{visibility : isBottomContent ? 'visible' : 'hidden', bottom: isLandscape ? '8rem' : ''}}
      className={`cursor-pointer ${displayNone ? 'd-none' : ''} ${display}`}
      aria-expanded="false"
    >
      <div className="d-flex align-items-center justify-content-between">
        <div style={{visibility: display ? 'none' : 'block'}} className="d-flex align-items-center" onClick={openMystories}>
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
          <div className="playerInfo ml-2">
            <p className="mystories m-0">My stories</p>
            <p className="trackLink">Crypto Fisherman with very...</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6415 0.199219C9.41665 0.199219 6.32388 1.48029 4.04356 3.7606C1.76325 6.04092 0.482178 9.13369 0.482178 12.3585C0.482178 15.5834 1.76325 18.6762 4.04356 20.9565C6.32388 23.2368 9.41665 24.5179 12.6415 24.5179C15.8664 24.5179 18.9591 23.2368 21.2394 20.9565C23.5198 18.6762 24.8008 15.5834 24.8008 12.3585C24.8008 9.13369 23.5198 6.04092 21.2394 3.7606C18.9591 1.48029 15.8664 0.199219 12.6415 0.199219V0.199219ZM17.9612 11.5986C18.1628 11.5986 18.3561 11.6787 18.4986 11.8212C18.6411 11.9637 18.7212 12.157 18.7212 12.3585C18.7212 12.5601 18.6411 12.7534 18.4986 12.8959C18.3561 13.0384 18.1628 13.1185 17.9612 13.1185L9.15634 13.1185L12.4196 16.3802C12.4903 16.4509 12.5463 16.5348 12.5845 16.6271C12.6228 16.7194 12.6425 16.8184 12.6425 16.9183C12.6425 17.0182 12.6228 17.1172 12.5845 17.2095C12.5463 17.3018 12.4903 17.3857 12.4196 17.4563C12.3489 17.527 12.2651 17.5831 12.1727 17.6213C12.0804 17.6595 11.9815 17.6792 11.8815 17.6792C11.7816 17.6792 11.6827 17.6595 11.5904 17.6213C11.498 17.5831 11.4142 17.527 11.3435 17.4563L6.78375 12.8966C6.71298 12.826 6.65683 12.7421 6.61851 12.6498C6.5802 12.5575 6.56048 12.4585 6.56048 12.3585C6.56048 12.2586 6.5802 12.1596 6.61851 12.0673C6.65683 11.975 6.71298 11.8911 6.78375 11.8205L11.3435 7.26075C11.4862 7.11805 11.6797 7.03788 11.8815 7.03788C12.0834 7.03788 12.2769 7.11805 12.4196 7.26075C12.5623 7.40345 12.6425 7.59699 12.6425 7.7988C12.6425 8.00061 12.5623 8.19415 12.4196 8.33685L9.15634 11.5986L17.9612 11.5986Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="playerIcon rightPlayIcon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3585 24.8008C15.5834 24.8008 18.6761 23.5197 20.9564 21.2394C23.2368 18.9591 24.5178 15.8663 24.5178 12.6415C24.5178 9.4166 23.2368 6.32382 20.9564 4.0435C18.6761 1.76319 15.5834 0.482121 12.3585 0.482121C9.13364 0.482121 6.04087 1.76319 3.76056 4.0435C1.48024 6.32382 0.199171 9.4166 0.199171 12.6415C0.199171 15.8663 1.48024 18.9591 3.76056 21.2394C6.04087 23.5197 9.13364 24.8008 12.3585 24.8008V24.8008ZM7.03879 13.4014C6.83724 13.4014 6.64394 13.3213 6.50142 13.1788C6.3589 13.0363 6.27883 12.843 6.27883 12.6415C6.27883 12.4399 6.3589 12.2466 6.50142 12.1041C6.64394 11.9616 6.83724 11.8815 7.03879 11.8815L15.8437 11.8815L12.5804 8.61975C12.5097 8.5491 12.4537 8.46521 12.4155 8.37289C12.3772 8.28057 12.3575 8.18163 12.3575 8.0817C12.3575 7.98178 12.3772 7.88283 12.4155 7.79051C12.4537 7.69819 12.5097 7.61431 12.5804 7.54365C12.6511 7.47299 12.7349 7.41694 12.8273 7.37871C12.9196 7.34047 13.0185 7.32078 13.1185 7.32078C13.2184 7.32078 13.3173 7.34047 13.4096 7.37871C13.502 7.41694 13.5858 7.47299 13.6565 7.54365L18.2163 12.1034C18.287 12.174 18.3432 12.2579 18.3815 12.3502C18.4198 12.4425 18.4395 12.5415 18.4395 12.6415C18.4395 12.7414 18.4198 12.8404 18.3815 12.9327C18.3432 13.025 18.287 13.1089 18.2163 13.1795L13.6565 17.7393C13.5138 17.8819 13.3203 17.9621 13.1185 17.9621C12.9166 17.9621 12.7231 17.8819 12.5804 17.7393C12.4377 17.5966 12.3575 17.403 12.3575 17.2012C12.3575 16.9994 12.4377 16.8058 12.5804 16.6631L15.8437 13.4014L7.03879 13.4014Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
