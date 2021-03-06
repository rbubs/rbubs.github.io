import React, { useEffect, useState } from 'react';
import './Mystories.Styles.css';
import Button from '@material-ui/core/Button';
import StoryDetails from '../StoryDetails';
import { useDispatch, useSelector } from 'react-redux';
import whiteLogo from '../../../assets/img/white_store.svg';
import { fetchStoryDetails, getStoryDetails, setCurrentStory } from '../../../redux/actions';

const MyStories = ({ display, close, handler, isBottomContent, isLandscape, isStore, isConnected }) => {
  const dispatch = useDispatch();

  const { isUserLoading, userData, userStories, storiesLoading } = useSelector(
    (state) => state.myStories
  );

  useEffect(() => {
    if (!isUserLoading && userData.length > 0) {
      if (userData[0].hasOwnProperty('fields')) {
        const stories = [...new Set(userData[0].fields.Stories)];
        stories.map((story) => {
          dispatch(fetchStoryDetails({ id: story }));
        });
      }
    }
  }, [userData]);

  if (display !== 'myStories') {
    return null;
  }

  const menuSelect = (event, story) => {
    dispatch(setCurrentStory(story));
    dispatch(getStoryDetails({ id: story.seasons[0] }));
    event.preventDefault();
    handler(event.currentTarget.id, false);
  };

  return (
    <div
      style={{
        visibility: isBottomContent ? 'visible' : 'hidden',
        display: isLandscape ? 'none' : 'block',
      }}
      id="content-store"
      className="mystories-list mystories"
    >
      <div className="header" style={{ marginBottom: 16 }}>
        <div className="left">
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
          <span className="ml-2">My Stories</span>
        </div>
        {/* <Button
          onClick={() => handler('browseStories')}
          variant="contained"
          color="primary"
          className="d-flex myStoriesStoreBtn"
        >
          <img style={{ marginLeft: '10px' }} src={whiteLogo} alt="white_store"></img>
          <span className="ml-2 text-transform-uppercase">Store</span>
        </Button> */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={close}
          className="cursor-pointer"
        >
          <path
            d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693254 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 13.8988 31.5861 11.8183 30.7821 9.87706C29.978 7.93585 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM20.336 18.064C20.486 18.2127 20.605 18.3897 20.6862 18.5847C20.7675 18.7796 20.8093 18.9888 20.8093 19.2C20.8093 19.4112 20.7675 19.6203 20.6862 19.8153C20.605 20.0103 20.486 20.1873 20.336 20.336C20.1873 20.486 20.0103 20.605 19.8153 20.6862C19.6204 20.7675 19.4112 20.8093 19.2 20.8093C18.9888 20.8093 18.7797 20.7675 18.5847 20.6862C18.3897 20.605 18.2127 20.486 18.064 20.336L16 18.256L13.936 20.336C13.7873 20.486 13.6103 20.605 13.4153 20.6862C13.2204 20.7675 13.0112 20.8093 12.8 20.8093C12.5888 20.8093 12.3797 20.7675 12.1847 20.6862C11.9897 20.605 11.8127 20.486 11.664 20.336C11.514 20.1873 11.395 20.0103 11.3138 19.8153C11.2325 19.6203 11.1907 19.4112 11.1907 19.2C11.1907 18.9888 11.2325 18.7796 11.3138 18.5847C11.395 18.3897 11.514 18.2127 11.664 18.064L13.744 16L11.664 13.936C11.3627 13.6347 11.1935 13.2261 11.1935 12.8C11.1935 12.3739 11.3627 11.9653 11.664 11.664C11.9653 11.3627 12.3739 11.1935 12.8 11.1935C13.2261 11.1935 13.6347 11.3627 13.936 11.664L16 13.744L18.064 11.664C18.3653 11.3627 18.7739 11.1935 19.2 11.1935C19.6261 11.1935 20.0347 11.3627 20.336 11.664C20.6373 11.9653 20.8065 12.3739 20.8065 12.8C20.8065 13.2261 20.6373 13.6347 20.336 13.936L18.256 16L20.336 18.064Z"
            fill="white"
          />
        </svg>
      </div>
      {storiesLoading && userStories.length > 0 ? (
        <>Loading....</>
      ) : (
        userStories.map((storyData, i) => {
          return (
            <StoryDetails isStore={isStore} key={i} storyData={storyData} menuSelect={menuSelect} />
          );
        })
      )}
      {!isConnected ? <div className="storeConnetWallet">connect wallet</div> : null}
      <div className="line-Mystories mobile-view"></div>
      <div className="mobile-view browseStrBtn">
        <Button
          onClick={() => handler('browseStories')}
          variant="contained"
          color="primary"
          className="d-flex justify-content-center align-items-center btn-browse-all-stories"
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 16.757C18 13.8888 16.3278 11.4112 13.9091 10.2572V5.99603C13.9091 5.60794 13.7736 5.23271 13.523 4.93715L9.62642 0.292991C9.46278 0.0976636 9.23011 0 9 0C8.76989 0 8.53722 0.0976636 8.37358 0.292991L4.47699 4.93715C4.22812 5.23331 4.09138 5.60835 4.09091 5.99603V10.2572C1.67216 11.4112 0 13.8888 0 16.757H4.00142C3.94261 16.9421 3.91193 17.1425 3.91193 17.3687C3.91193 17.9367 4.10625 18.4918 4.45909 18.9313C4.7471 19.2907 5.12853 19.563 5.56108 19.7178C6.1517 21.1056 7.49403 22 9 22C9.74403 22 10.4651 21.779 11.0813 21.3626C11.6847 20.9565 12.1526 20.3886 12.4364 19.7178C12.8687 19.5639 13.2502 19.2926 13.5384 18.9339C13.8917 18.4904 14.0846 17.9394 14.0855 17.3713C14.0855 17.1554 14.0574 16.9498 14.0062 16.7596L18 16.757ZM9 6.88785C9.32115 6.89444 9.62695 7.02731 9.85175 7.25794C10.0766 7.48858 10.2025 7.79861 10.2025 8.1215C10.2025 8.44438 10.0766 8.75441 9.85175 8.98505C9.62695 9.21568 9.32115 9.34855 9 9.35514C8.67884 9.34855 8.37306 9.21568 8.14825 8.98505C7.92344 8.75441 7.79752 8.44438 7.79752 8.1215C7.79752 7.79861 7.92344 7.48858 8.14825 7.25794C8.37306 7.02731 8.67884 6.89444 9 6.88785ZM11.9685 17.9958C11.8355 18.0729 11.6821 18.1037 11.5312 18.0832L11.0327 18.0215L10.9611 18.5201C10.823 19.4942 9.97926 20.2292 9 20.2292C8.02074 20.2292 7.17699 19.4942 7.03892 18.5201L6.96733 18.0189L6.46875 18.0832C6.31718 18.1013 6.16382 18.0698 6.03153 17.9932C5.80909 17.8647 5.67102 17.6257 5.67102 17.3661C5.67102 17.0937 5.82187 16.8675 6.04432 16.7544H11.9582C12.1832 16.8701 12.3315 17.0963 12.3315 17.3661C12.329 17.6283 12.1909 17.8699 11.9685 17.9958Z"
              fill="#9346C7"
            />
          </svg>
          <span className="ml-2 text-transform-uppercase">browse all stories</span>
        </Button>
      </div>
    </div>
  );
};

export default MyStories;
