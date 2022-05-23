import React, { useEffect, useRef } from 'react';

const Indicator = ({ value }) => {
  const ref = useRef();
  useEffect(() => {
    getIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getIndicator = () => {
    let s_letters = 'qwertyuiopasdfghjklzxcvbnm'; // Буквы в нижнем регистре
    let b_letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре
    let digits = '0123456789'; // Цифры

    let input_test_val = value; //получаем значение из поля

    let is_s = false; // Есть ли в пароле буквы в нижнем регистре
    let is_b = false; // Есть ли в пароле буквы в верхнем регистре
    let is_d = false; // Есть ли в пароле цифры

    for (let i = 0; i < input_test_val?.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(input_test_val[i]) !== -1) {
        is_s = true;
      } else if (!is_b && b_letters.indexOf(input_test_val[i]) !== -1) {
        is_b = true;
      } else if (!is_d && digits.indexOf(input_test_val[i]) !== -1) {
        is_d = true;
      }
    }

    let rating = 0;
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности

    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (input_test_val?.length < 6 && rating < 1) {
      ref.current.style.width = '10%';
      ref.current.style.backgroundColor = '#e7140d';
    } else if (input_test_val?.length >= 6 && rating === 1) {
      ref.current.style.width = '10%';
      ref.current.style.backgroundColor = '#e7140d';
    } else if (input_test_val?.length >= 6 && rating > 1 && rating < 3) {
      ref.current.style.width = '50%';
      ref.current.style.backgroundColor = '#ffdb00';
    } else if (input_test_val?.length >= 6 && rating === 3) {
      ref.current.style.width = '100%';
      ref.current.style.backgroundColor = 'var(--color-secondary)';
    }
  };
  return <div ref={ref} style={{ marginTop: '4px', height: '5px' }}></div>;
};

export default Indicator;
