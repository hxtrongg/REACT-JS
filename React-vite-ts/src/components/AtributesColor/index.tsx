
import React, { useState } from 'react';
import styles from './AttribuesColor.module.css';

const AttrItem = ({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) => {
  const myClass = active ? `${styles.attr_item} ${styles.active}` : styles.attr_item;
  return (
    <span className={myClass} onClick={onClick}>
      {label}
    </span>
  );
};

const AttribuesColor = () => {
  const [selectedColor, setSelectedColor] = useState<string>('Đen');

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.attrs}>
      <span className='attr_name'>Màu sắc</span>
      <AttrItem active={selectedColor === 'Đen'} label='Đen' onClick={() => handleColorClick('Đen')} />
      <AttrItem active={selectedColor === 'Hồng'} label='Hồng' onClick={() => handleColorClick('Hồng')} />
      <AttrItem active={selectedColor === 'Xanh'} label='Xanh' onClick={() => handleColorClick('Xanh')} />
    </div>
  );
};

export default AttribuesColor;
