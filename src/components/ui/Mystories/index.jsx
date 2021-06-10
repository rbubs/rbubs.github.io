import React, { useState, useEffect } from 'react';
import './Mystories.Styles.css';

const StoreHome = ({ display, handler }) => {
	if (display === 'browseStories' || display === 'store-in-details'
  		|| display === 'myStories' || display === 'MystoriesInDetails' && width <= 768) {
		return null;
	}
	const openMystories = event => {
    event.preventDefault();
    handler('myStories');
  }
	const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

	return (
		<div id="Mystores-home" aria-expanded="false" onClick={openMystories}>
			<div className="d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        		<path fillRule="evenodd" clipRule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM25.6945 9.88816C25.6954 9.88776 25.6947 9.89684 25.6897 9.91658C25.6912 9.89843 25.6937 9.88856 25.6945 9.88816ZM25.3356 10.6102C24.8388 10.6379 24.1757 10.7425 23.3493 10.9555C22.7844 11.1011 22.1723 11.2897 21.5225 11.5197C21.9916 12.0972 22.3719 12.7497 22.6427 13.4565C23.1662 13.0091 23.6352 12.5737 24.0433 12.1577C24.641 11.5485 25.0631 11.0265 25.3356 10.6102ZM23.1035 15.6682C26.4041 13.0396 28.2462 10.5593 27.5406 9.3371C26.835 8.11504 23.7663 8.46999 19.8401 10.0138C18.7325 9.30187 17.4145 8.88889 16 8.88889C12.0726 8.88889 8.88889 12.0726 8.88889 16C8.88889 16.1113 8.89145 16.2219 8.8965 16.332C5.59599 18.9605 3.75401 21.4408 4.45961 22.6629C5.16516 23.8849 8.23377 23.53 12.16 21.9862C13.2676 22.6981 14.5856 23.1111 16 23.1111C19.9274 23.1111 23.1111 19.9274 23.1111 16C23.1111 15.8888 23.1086 15.7781 23.1035 15.6682ZM10.4776 20.4804C10.0085 19.9029 9.62812 19.2504 9.35733 18.5436C8.83388 18.991 8.36497 19.4264 7.95685 19.8423C7.35913 20.4515 6.93705 20.9735 6.66461 21.3898C7.1614 21.3621 7.8245 21.2575 8.65092 21.0445C9.2157 20.8989 9.82776 20.7103 10.4776 20.4804ZM5.85985 21.3397C5.86063 21.3392 5.87043 21.3419 5.8869 21.3497C5.86731 21.3442 5.85907 21.3403 5.85985 21.3397ZM6.30563 22.1118C6.30475 22.1122 6.30551 22.1032 6.31052 22.0834C6.30901 22.1016 6.3065 22.1114 6.30563 22.1118ZM26.1133 10.6503C26.1329 10.6558 26.1411 10.6597 26.1403 10.6603C26.1395 10.6608 26.1297 10.6581 26.1133 10.6503Z" fill="white" />
      		</svg>
					<div className="playerInfo ml-2">
						<p className="mystories m-0">
							My stories
						</p>
						<p className="trackLink">
							Crypto Fisherman with very...
						</p>
					</div>
				</div>
				<div className="d-flex align-items-center">
					<div className="d-flex align-items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM11.5 7.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5L5.707 8.5L7.854 10.646C7.90049 10.6925 7.93736 10.7477 7.96252 10.8084C7.98768 10.8692 8.00063 10.9343 8.00063 11C8.00063 11.0657 7.98768 11.1308 7.96252 11.1916C7.93736 11.2523 7.90049 11.3075 7.854 11.354C7.80751 11.4005 7.75232 11.4374 7.69158 11.4625C7.63084 11.4877 7.56574 11.5006 7.5 11.5006C7.43426 11.5006 7.36916 11.4877 7.30842 11.4625C7.24768 11.4374 7.19249 11.4005 7.146 11.354L4.146 8.354C4.09944 8.30755 4.06249 8.25238 4.03729 8.19163C4.01208 8.13089 3.99911 8.06577 3.99911 8C3.99911 7.93423 4.01208 7.86911 4.03729 7.80837C4.06249 7.74762 4.09944 7.69245 4.146 7.646L7.146 4.646C7.23989 4.55211 7.36722 4.49937 7.5 4.49937C7.63278 4.49937 7.76011 4.55211 7.854 4.646C7.94789 4.73989 8.00063 4.86722 8.00063 5C8.00063 5.13278 7.94789 5.26011 7.854 5.354L5.707 7.5L11.5 7.5Z" fill="white"/>
						</svg>
					</div>
					<div className='playerIcon'>
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
							<path d="M18 26C20.1217 26 22.1566 25.1571 23.6569 23.6569C25.1571 22.1566 26 20.1217 26 18C26 15.8783 25.1571 13.8434 23.6569 12.3431C22.1566 10.8429 20.1217 10 18 10C15.8783 10 13.8434 10.8429 12.3431 12.3431C10.8429 13.8434 10 15.8783 10 18C10 20.1217 10.8429 22.1566 12.3431 23.6569C13.8434 25.1571 15.8783 26 18 26V26ZM14.5 18.5C14.3674 18.5 14.2402 18.4473 14.1464 18.3536C14.0527 18.2598 14 18.1326 14 18C14 17.8674 14.0527 17.7402 14.1464 17.6464C14.2402 17.5527 14.3674 17.5 14.5 17.5L20.293 17.5L18.146 15.354C18.0995 15.3075 18.0626 15.2523 18.0375 15.1916C18.0123 15.1308 17.9994 15.0657 17.9994 15C17.9994 14.9343 18.0123 14.8692 18.0375 14.8084C18.0626 14.7477 18.0995 14.6925 18.146 14.646C18.1925 14.5995 18.2477 14.5626 18.3084 14.5375C18.3692 14.5123 18.4343 14.4994 18.5 14.4994C18.5657 14.4994 18.6308 14.5123 18.6916 14.5375C18.7523 14.5626 18.8075 14.5995 18.854 14.646L21.854 17.646C21.9006 17.6924 21.9375 17.7476 21.9627 17.8084C21.9879 17.8691 22.0009 17.9342 22.0009 18C22.0009 18.0658 21.9879 18.1309 21.9627 18.1916C21.9375 18.2524 21.9006 18.3076 21.854 18.354L18.854 21.354C18.7601 21.4479 18.6328 21.5006 18.5 21.5006C18.3672 21.5006 18.2399 21.4479 18.146 21.354C18.0521 21.2601 17.9994 21.1328 17.9994 21C17.9994 20.8672 18.0521 20.7399 18.146 20.646L20.293 18.5L14.5 18.5Z" fill="white"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreHome;