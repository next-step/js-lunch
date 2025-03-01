export const validateRestaurantEnrollForm = (formValues) => {
  const { category, name, distance } = formValues;

  return new Promise((resolve, reject) => {
    if (category === '') {
      reject({ isValid: false, reason: '카테고리가 선택되지 않았습니다.' });
    }

    if (name === '' || name.trim() === '') {
      reject({ isValid: false, reason: '이름이 입력되지 않았습니다.' });
    }

    if (distance === '') {
      reject({ isValid: false, reason: '거리가 선택되지 않았습니다.' });
    }

    resolve({ isValid: true });
  });
};
