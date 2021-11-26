import moment from 'moment';

export const formatMessages = (data) => {
  const { email, mensaje } = data;
  return {
    email,
    mensaje,
    time: moment().format('DD/MM/YYY hh:mm:ss'),
  };
};
