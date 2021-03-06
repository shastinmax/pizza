import React from 'react';

import ContentLoader from 'react-content-loader';

import s from '../ProductItem/ProductItem.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Sceleton = () => (
  <ContentLoader
    className={s.productItem__wrapper}
    speed={0}
    width={280}
    height={485}
    viewBox="0 0 280 485"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);
