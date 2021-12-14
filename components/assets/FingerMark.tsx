import React from 'react';

interface FingerMarkProps {
  className?: string;
}

const FingerMark = ({ className }: FingerMarkProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#0C0B0B"
      d="M15.6465 2.53329C15.5669 2.53329 15.4873 2.51338 15.4176 2.47358C13.5069 1.48835 11.8549 1.07037 9.87449 1.07037C7.90404 1.07037 6.0331 1.53811 4.33134 2.47358C4.0925 2.60295 3.79395 2.51338 3.65462 2.27454C3.52525 2.0357 3.61482 1.72719 3.85366 1.59782C5.70469 0.592688 7.73486 0.0751953 9.87449 0.0751953C11.9942 0.0751953 13.8453 0.54293 15.8754 1.58787C16.1242 1.71724 16.2138 2.01579 16.0844 2.25464C15.9948 2.43377 15.8257 2.53329 15.6465 2.53329ZM1.40552 7.75798C1.306 7.75798 1.20648 7.72812 1.11692 7.66841C0.888025 7.50918 0.838266 7.20068 0.997495 6.97179C1.98272 5.57854 3.23665 4.48384 4.72942 3.71755C7.85428 2.10536 11.8549 2.09541 14.9897 3.7076C16.4825 4.47389 17.7364 5.55863 18.7216 6.94193C18.8809 7.16087 18.8311 7.47933 18.6022 7.63856C18.3733 7.79779 18.0648 7.74803 17.9056 7.51913C17.0099 6.26521 15.8754 5.27998 14.5319 4.59331C11.6758 3.13039 8.02346 3.1304 5.17725 4.60326C3.8238 5.29989 2.6893 6.29506 1.79364 7.54899C1.71402 7.68832 1.56475 7.75798 1.40552 7.75798ZM7.62539 19.7698C7.49601 19.7698 7.36664 19.72 7.27707 19.6205C6.41127 18.7547 5.94353 18.1974 5.27676 16.9932C4.59009 15.7692 4.23183 14.2764 4.23183 12.6742C4.23183 9.71848 6.75958 7.31015 9.86454 7.31015C12.9695 7.31015 15.4973 9.71848 15.4973 12.6742C15.4973 12.9528 15.2783 13.1718 14.9997 13.1718C14.721 13.1718 14.5021 12.9528 14.5021 12.6742C14.5021 10.2658 12.4221 8.30533 9.86454 8.30533C7.30693 8.30533 5.22701 10.2658 5.22701 12.6742C5.22701 14.1072 5.54546 15.4308 6.15252 16.5056C6.78944 17.6501 7.22732 18.1377 7.9936 18.9139C8.18269 19.113 8.18269 19.4215 7.9936 19.6205C7.88413 19.72 7.75476 19.7698 7.62539 19.7698ZM14.7608 17.9287C13.5766 17.9287 12.5316 17.6302 11.6758 17.043C10.1929 16.0379 9.30724 14.4058 9.30724 12.6742C9.30724 12.3955 9.52618 12.1766 9.80483 12.1766C10.0835 12.1766 10.3024 12.3955 10.3024 12.6742C10.3024 14.0774 11.0189 15.401 12.2331 16.217C12.9396 16.6947 13.7656 16.9236 14.7608 16.9236C14.9997 16.9236 15.3977 16.8937 15.7958 16.8241C16.0645 16.7743 16.3233 16.9534 16.373 17.2321C16.4228 17.5008 16.2436 17.7595 15.965 17.8093C15.3977 17.9188 14.9001 17.9287 14.7608 17.9287ZM12.7605 19.9788C12.7207 19.9788 12.6709 19.9688 12.6311 19.9589C11.0488 19.521 10.0138 18.9338 8.92907 17.869C7.53582 16.4857 6.76953 14.6446 6.76953 12.6742C6.76953 11.062 8.14288 9.74834 9.83469 9.74834C11.5265 9.74834 12.8998 11.062 12.8998 12.6742C12.8998 13.739 13.8254 14.6048 14.9698 14.6048C16.1143 14.6048 17.0398 13.739 17.0398 12.6742C17.0398 8.92234 13.8054 5.87709 9.82473 5.87709C6.99842 5.87709 4.41096 7.44947 3.2466 9.88766C2.85848 10.6938 2.65944 11.6392 2.65944 12.6742C2.65944 13.4504 2.72911 14.6745 3.32621 16.2668C3.42573 16.5255 3.29636 16.8141 3.03761 16.9037C2.77887 17.0032 2.49026 16.8639 2.4007 16.6151C1.91306 15.3114 1.67422 14.0177 1.67422 12.6742C1.67422 11.4799 1.90311 10.3952 2.35094 9.44978C3.67453 6.67323 6.6103 4.87196 9.82473 4.87196C14.3528 4.87196 18.035 8.36504 18.035 12.6642C18.035 14.2764 16.6616 15.59 14.9698 15.59C13.278 15.59 11.9047 14.2764 11.9047 12.6642C11.9047 11.5994 10.9791 10.7336 9.83469 10.7336C8.69023 10.7336 7.76471 11.5994 7.76471 12.6642C7.76471 14.366 8.42153 15.9583 9.6257 17.1525C10.5711 18.0879 11.4767 18.6054 12.8799 18.9935C13.1486 19.0632 13.2979 19.3419 13.2282 19.6006C13.1785 19.8295 12.9695 19.9788 12.7605 19.9788Z"
    />
  </svg>
);

export default FingerMark;
