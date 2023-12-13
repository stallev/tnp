import React from 'react';
import Image from 'next/image';
import getImages from './getImages';

import styles from './styles/custom-image.module.scss';

const CustomImage = ({ 
  className, 
  imageName, 
  imageURL, 
  onClick,
  alt, 
  ariaLabel = '',
  priority,
}) => {
  return (
    <div
      className={styles['custom-image']}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : 'none'}
      tabIndex={onClick ? '1' : '0'}
    >
      <Image
        src={imageURL ? imageURL : getImages[imageName]}
        fill
        alt={alt}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
