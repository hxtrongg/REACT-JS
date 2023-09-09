import React, { useState } from 'react';

function ColorChangeButton() {
  // Khởi tạo trạng thái ban đầu của màu nền và màu chữ
  const [colorScheme, setColorScheme] = useState(1);

  // Hàm để thay đổi màu nền và màu chữ
  const changeColors = () => {
    if (colorScheme === 1) {
      setBackgroundColor('red');
      setTextColor('black');
      setTextsColor('violet');
      setColorScheme(2);
    } else if (colorScheme === 2) {
      setBackgroundColor('blue');
      setTextColor('white');
      setTextsColor('green');
      setColorScheme(3);
    } else {
      setBackgroundColor('yellow');
      setTextColor('violet');
      setTextsColor('blue');
      setColorScheme(1);
    }
  };

  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [textColor, setTextColor] = useState('white');
  const [textsColor, setTextsColor] = useState('violet');

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
      onClick={changeColors}
    >
      Change Colors
    </button>
  );
}

export default ColorChangeButton;
