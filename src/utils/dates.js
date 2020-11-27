import moment from 'moment';

export const getFormattedDateFromTS = (ts, format) => {
  return moment.unix(ts).format(format);
};
