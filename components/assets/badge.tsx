import React from 'react';

interface BadgeProps {
  className: string;
}

const Badge: React.FC<BadgeProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 35 36"
  >
    <g clipPath="url(#clip0BAD)">
      <path
        fill="#7417EA"
        stroke="#fff"
        strokeWidth="2"
        d="M1.544 15.194h0l-.007-.009c-.89-1.164-.652-2.88.539-3.782.254-.178.557-.331.876-.451a4.743 4.743 0 003.303-4.527 2.704 2.704 0 012.718-2.727c.37 0 .64.04.892.133.536.2 1.057.259 1.537.259 1.52 0 2.95-.75 3.87-1.965l.01-.012.008-.012c.867-1.215 2.576-1.51 3.816-.645.255.18.472.395.654.647a4.75 4.75 0 003.887 1.987c.478 0 .996-.059 1.53-.256 1.4-.494 2.964.249 3.477 1.698l.003.011.004.01c.09.237.133.544.133.921a4.743 4.743 0 003.333 4.536h0l.01.003a2.66 2.66 0 011.77 3.369c-.158.417-.25.63-.366.767l-.018.022-.018.023a4.647 4.647 0 000 5.612h0l.007.01c.891 1.163.652 2.88-.538 3.781a4.01 4.01 0 01-.877.451 4.743 4.743 0 00-3.303 4.527v.024c.036 1.475-1.175 2.71-2.68 2.753-.354-.001-.638-.04-.96-.145-2.023-.686-4.15.077-5.38 1.722l-.008.01-.006.009c-.868 1.216-2.577 1.51-3.817.645a2.791 2.791 0 01-.655-.647 4.761 4.761 0 00-5.398-1.737h0l-.012.004c-1.402.498-2.969-.245-3.482-1.696l-.004-.01-.004-.011c-.09-.236-.133-.544-.133-.921 0-2.038-1.308-3.906-3.274-4.533l-.01-.003-.01-.003a2.66 2.66 0 01-1.763-3.389l.032-.098.012-.102c.02-.184.098-.357.308-.648a4.647 4.647 0 00-.006-5.605z"
      />
      <g clipPath="url(#clip1BAD)">
        <path
          fill="#fff"
          d="M24.227 13.01a.692.692 0 00-.408.215c-.272.287-2.337 2.51-4.425 4.782a837.663 837.663 0 00-3.994 4.328l-4.312-3.443a.659.659 0 00-.953.12c-.227.31-.181.765.114 1.004h.022l4.766 3.826a.637.637 0 00.885-.072c.272-.287 2.337-2.51 4.425-4.782 2.088-2.272 4.22-4.592 4.425-4.783.272-.287.272-.741.023-1.004a.696.696 0 00-.568-.192z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0BAD">
        <path fill="#fff" d="M0 0H35V36H0z" />
      </clipPath>
      <clipPath id="clip1BAD">
        <path fill="#fff" d="M0 0H15V11H0z" transform="translate(10 13)" />
      </clipPath>
    </defs>
  </svg>
);

export default Badge;