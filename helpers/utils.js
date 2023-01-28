import moment from 'moment/moment';

export const formatDate = (date, format = 'MMM DD, YYYY') => {
  if (!date) {
    return null;
  }

  return moment(date).format(format);
};

export const percentage = (portion, total) =>
  Math.ceil((portion / total) * 100);
