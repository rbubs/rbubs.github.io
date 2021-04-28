import React from 'react';
import './About.styles.css';

const ContentAbout = ({ display, close }) => {
    if (display !== 'about') {
        return null;
    }

    return (
        <div id="content-about">
            <div className="about-header">
                <div className="about-header-left">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM20.6846 21.6001L23.7066 18.5777C23.7993 18.4857 23.8729 18.3762 23.9233 18.2557C23.9736 18.1351 23.9997 18.0058 24 17.8752C24.0003 17.7446 23.9749 17.6151 23.9251 17.4944C23.8753 17.3736 23.8022 17.2638 23.71 17.1713L21.2003 14.6582L22.6942 13.1615C22.8908 12.9644 23.0012 12.6975 23.0012 12.4192C23.0012 12.1408 22.8908 11.8739 22.6942 11.6769L21.2096 10.1923C21.0127 9.99553 20.7457 9.885 20.4673 9.885C20.1889 9.885 19.9219 9.99553 19.7249 10.1923L18.231 11.6891L15.7208 9.17946C15.5332 8.99301 15.2792 8.88853 15.0147 8.8889C14.8841 8.88845 14.7547 8.9139 14.634 8.96378C14.5133 9.01365 14.4036 9.08696 14.3114 9.17946L11.2889 12.2018C11.1029 12.3892 10.9985 12.6425 10.9985 12.9065C10.9985 13.1705 11.1029 13.4239 11.2889 13.6112L13.7986 16.1242L13.4924 16.4305C12.6604 16.0527 11.7527 15.8715 10.8395 15.9008C9.92622 15.9301 9.03197 16.1692 8.22591 16.5994C7.96022 16.743 7.92604 17.1117 8.13847 17.3246L11.4985 20.6844L10.9422 21.2407C10.9253 21.2361 10.9088 21.2313 10.8923 21.2265C10.8292 21.2082 10.7678 21.1904 10.6985 21.1904C10.5007 21.1904 10.3073 21.249 10.1429 21.3589C9.97839 21.4688 9.8502 21.625 9.7745 21.8078C9.69881 21.9906 9.67901 22.1916 9.7176 22.3857C9.7562 22.5797 9.85145 22.7579 9.99133 22.8977C10.1312 23.0376 10.3094 23.1329 10.5034 23.1715C10.6974 23.21 10.8985 23.1902 11.0813 23.1145C11.264 23.0388 11.4202 22.9106 11.5301 22.7462C11.64 22.5817 11.6987 22.3883 11.6987 22.1905C11.6987 22.1212 11.6809 22.0599 11.6625 21.9968C11.6578 21.9803 11.6529 21.9637 11.6484 21.9468L12.2046 21.3906L15.5646 24.7504C15.7775 24.9629 16.1492 24.9286 16.2898 24.663C16.7201 23.857 16.9591 22.9628 16.9884 22.0495C17.0177 21.1363 16.8365 20.2286 16.4588 19.3967L16.7679 19.087L19.2781 21.6001C19.4648 21.7862 19.7177 21.8906 19.9813 21.8906C20.245 21.8906 20.4979 21.7862 20.6846 21.6001ZM17.1684 12.7517L14.8613 15.0587L12.7081 12.9051L15.0147 10.5986L17.1684 12.7517ZM20.1376 15.7209L22.2908 17.8745L19.9843 20.181L17.8306 18.0278L20.1376 15.7209Z" fill="white"/>
                    </svg>
                    <span>about rebase.radio</span>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ close }>
                    <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693254 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 13.8988 31.5861 11.8183 30.7821 9.87706C29.978 7.93585 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM20.336 18.064C20.486 18.2127 20.605 18.3897 20.6862 18.5847C20.7675 18.7796 20.8093 18.9888 20.8093 19.2C20.8093 19.4112 20.7675 19.6203 20.6862 19.8153C20.605 20.0103 20.486 20.1873 20.336 20.336C20.1873 20.486 20.0103 20.605 19.8153 20.6862C19.6204 20.7675 19.4112 20.8093 19.2 20.8093C18.9888 20.8093 18.7797 20.7675 18.5847 20.6862C18.3897 20.605 18.2127 20.486 18.064 20.336L16 18.256L13.936 20.336C13.7873 20.486 13.6103 20.605 13.4153 20.6862C13.2204 20.7675 13.0112 20.8093 12.8 20.8093C12.5888 20.8093 12.3797 20.7675 12.1847 20.6862C11.9897 20.605 11.8127 20.486 11.664 20.336C11.514 20.1873 11.395 20.0103 11.3138 19.8153C11.2325 19.6203 11.1907 19.4112 11.1907 19.2C11.1907 18.9888 11.2325 18.7796 11.3138 18.5847C11.395 18.3897 11.514 18.2127 11.664 18.064L13.744 16L11.664 13.936C11.3627 13.6347 11.1935 13.2261 11.1935 12.8C11.1935 12.3739 11.3627 11.9653 11.664 11.664C11.9653 11.3627 12.3739 11.1935 12.8 11.1935C13.2261 11.1935 13.6347 11.3627 13.936 11.664L16 13.744L18.064 11.664C18.3653 11.3627 18.7739 11.1935 19.2 11.1935C19.6261 11.1935 20.0347 11.3627 20.336 11.664C20.6373 11.9653 20.8065 12.3739 20.8065 12.8C20.8065 13.2261 20.6373 13.6347 20.336 13.936L18.256 16L20.336 18.064Z" fill="white"/>
                </svg>
            </div>

            <div className="about-body">
                <p>rebase.radio is a project ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ultricies in odio eget bibendum. Donec libero orci, suscipit in tempor ac,
                interdum eget nunc. Praesent in tortor sit amet libero viverra interdum vel quis ante. 
                Integer lobortis metus ut pellentesque lacinia. Nullam lobortis ornare ante at gravida.</p> 
            </div>

            <div className="about-social">
                <a href="https://twitter.com/RebaseRadio" target="_blank">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM20.6846 21.6001L23.7066 18.5777C23.7993 18.4857 23.8729 18.3762 23.9233 18.2557C23.9736 18.1351 23.9997 18.0058 24 17.8752C24.0003 17.7446 23.9749 17.6151 23.9251 17.4944C23.8753 17.3736 23.8022 17.2638 23.71 17.1713L21.2003 14.6582L22.6942 13.1615C22.8908 12.9644 23.0012 12.6975 23.0012 12.4192C23.0012 12.1408 22.8908 11.8739 22.6942 11.6769L21.2096 10.1923C21.0127 9.99553 20.7457 9.885 20.4673 9.885C20.1889 9.885 19.9219 9.99553 19.7249 10.1923L18.231 11.6891L15.7208 9.17946C15.5332 8.99301 15.2792 8.88853 15.0147 8.8889C14.8841 8.88845 14.7547 8.9139 14.634 8.96378C14.5133 9.01365 14.4036 9.08696 14.3114 9.17946L11.2889 12.2018C11.1029 12.3892 10.9985 12.6425 10.9985 12.9065C10.9985 13.1705 11.1029 13.4239 11.2889 13.6112L13.7986 16.1242L13.4924 16.4305C12.6604 16.0527 11.7527 15.8715 10.8395 15.9008C9.92622 15.9301 9.03197 16.1692 8.22591 16.5994C7.96022 16.743 7.92604 17.1117 8.13847 17.3246L11.4985 20.6844L10.9422 21.2407C10.9253 21.2361 10.9088 21.2313 10.8923 21.2265C10.8292 21.2082 10.7678 21.1904 10.6985 21.1904C10.5007 21.1904 10.3073 21.249 10.1429 21.3589C9.97839 21.4688 9.8502 21.625 9.7745 21.8078C9.69881 21.9906 9.67901 22.1916 9.7176 22.3857C9.7562 22.5797 9.85145 22.7579 9.99133 22.8977C10.1312 23.0376 10.3094 23.1329 10.5034 23.1715C10.6974 23.21 10.8985 23.1902 11.0813 23.1145C11.264 23.0388 11.4202 22.9106 11.5301 22.7462C11.64 22.5817 11.6987 22.3883 11.6987 22.1905C11.6987 22.1212 11.6809 22.0599 11.6625 21.9968C11.6578 21.9803 11.6529 21.9637 11.6484 21.9468L12.2046 21.3906L15.5646 24.7504C15.7775 24.9629 16.1492 24.9286 16.2898 24.663C16.7201 23.857 16.9591 22.9628 16.9884 22.0495C17.0177 21.1363 16.8365 20.2286 16.4588 19.3967L16.7679 19.087L19.2781 21.6001C19.4648 21.7862 19.7177 21.8906 19.9813 21.8906C20.245 21.8906 20.4979 21.7862 20.6846 21.6001ZM17.1684 12.7517L14.8613 15.0587L12.7081 12.9051L15.0147 10.5986L17.1684 12.7517ZM20.1376 15.7209L22.2908 17.8745L19.9843 20.181L17.8306 18.0278L20.1376 15.7209Z" fill="white"/>
                    </svg>
                    <span>twitter</span>
                </a>
            </div>

            <div className="about-social">
                <a href="mailto:bones@rebase.radio">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM20.6846 21.6001L23.7066 18.5777C23.7993 18.4857 23.8729 18.3762 23.9233 18.2557C23.9736 18.1351 23.9997 18.0058 24 17.8752C24.0003 17.7446 23.9749 17.6151 23.9251 17.4944C23.8753 17.3736 23.8022 17.2638 23.71 17.1713L21.2003 14.6582L22.6942 13.1615C22.8908 12.9644 23.0012 12.6975 23.0012 12.4192C23.0012 12.1408 22.8908 11.8739 22.6942 11.6769L21.2096 10.1923C21.0127 9.99553 20.7457 9.885 20.4673 9.885C20.1889 9.885 19.9219 9.99553 19.7249 10.1923L18.231 11.6891L15.7208 9.17946C15.5332 8.99301 15.2792 8.88853 15.0147 8.8889C14.8841 8.88845 14.7547 8.9139 14.634 8.96378C14.5133 9.01365 14.4036 9.08696 14.3114 9.17946L11.2889 12.2018C11.1029 12.3892 10.9985 12.6425 10.9985 12.9065C10.9985 13.1705 11.1029 13.4239 11.2889 13.6112L13.7986 16.1242L13.4924 16.4305C12.6604 16.0527 11.7527 15.8715 10.8395 15.9008C9.92622 15.9301 9.03197 16.1692 8.22591 16.5994C7.96022 16.743 7.92604 17.1117 8.13847 17.3246L11.4985 20.6844L10.9422 21.2407C10.9253 21.2361 10.9088 21.2313 10.8923 21.2265C10.8292 21.2082 10.7678 21.1904 10.6985 21.1904C10.5007 21.1904 10.3073 21.249 10.1429 21.3589C9.97839 21.4688 9.8502 21.625 9.7745 21.8078C9.69881 21.9906 9.67901 22.1916 9.7176 22.3857C9.7562 22.5797 9.85145 22.7579 9.99133 22.8977C10.1312 23.0376 10.3094 23.1329 10.5034 23.1715C10.6974 23.21 10.8985 23.1902 11.0813 23.1145C11.264 23.0388 11.4202 22.9106 11.5301 22.7462C11.64 22.5817 11.6987 22.3883 11.6987 22.1905C11.6987 22.1212 11.6809 22.0599 11.6625 21.9968C11.6578 21.9803 11.6529 21.9637 11.6484 21.9468L12.2046 21.3906L15.5646 24.7504C15.7775 24.9629 16.1492 24.9286 16.2898 24.663C16.7201 23.857 16.9591 22.9628 16.9884 22.0495C17.0177 21.1363 16.8365 20.2286 16.4588 19.3967L16.7679 19.087L19.2781 21.6001C19.4648 21.7862 19.7177 21.8906 19.9813 21.8906C20.245 21.8906 20.4979 21.7862 20.6846 21.6001ZM17.1684 12.7517L14.8613 15.0587L12.7081 12.9051L15.0147 10.5986L17.1684 12.7517ZM20.1376 15.7209L22.2908 17.8745L19.9843 20.181L17.8306 18.0278L20.1376 15.7209Z" fill="white"/>
                    </svg>
                    <span>email</span>
                </a>
            </div>
        </div>
    );
};

export default ContentAbout;