import moment from 'moment/moment';

export default function formatDate(date, format = 'MMM DD, YYYY') {
  if (!date) {
    return null;
  }

  return moment(date).format(format);
}
