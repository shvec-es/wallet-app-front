import React, { useEffect, useRef } from 'react';

const Indicator = ({ value }) => {
  console.log(value);
  const ref = useRef();
  useEffect(() => {
    getIndicator();
  }, [value]);

  const getIndicator = () => {
    var s_letters = 'qwertyuiopasdfghjklzxcvbnm'; // Буквы в нижнем регистре
    var b_letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре
    var digits = '0123456789'; // Цифры
    var specials = '!@#$%^&*()_-+=|/.,:;[]{}'; // Спецсимволы

    var input_test_val = value; //получаем значение из поля

    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы

    for (var i = 0; i < input_test_val?.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
        is_s = true;
      } else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
        is_b = true;
      } else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
        is_d = true;
      } else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
        is_sp = true;
      }
    }

    var rating = 0;
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (input_test_val?.length < 6 && rating < 3) {
      ref.current.style.width = '10%';
      //   ref.current.style.height = '5px';
      ref.current.style.backgroundColor = '#e7140d';
    } else if (input_test_val?.length < 6 && rating >= 3) {
      console.log('first');
      ref.current.style.width = '50%';
      ref.current.style.backgroundColor = '#ffdb00';
    } else if (input_test_val?.length >= 8 && rating < 3) {
      ref.current.style.width = '50%';
      ref.current.style.backgroundColor = '#ffdb00';
    } else if (input_test_val?.length >= 8 && rating >= 3) {
      ref.current.style.width = '100%';
      ref.current.style.backgroundColor = '#61ac27';
    } else if (input_test_val?.length >= 6 && rating == 1) {
      ref.current.style.width = '10%';
      ref.current.style.backgroundColor = '#e7140d';
    } else if (input_test_val?.length >= 6 && rating > 1 && rating < 4) {
      ref.current.style.width = '50%';
      ref.current.style.backgroundColor = '#ffdb00';
    } else if (input_test_val?.length >= 6 && rating == 4) {
      ref.current.style.width = '100%';
      ref.current.style.backgroundColor = '#61ac27';
    }
  };
  return <div ref={ref} style={{ marginTop: '4px', height: '5px' }}></div>;
};

export default Indicator;
