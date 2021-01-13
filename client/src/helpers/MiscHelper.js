import moment from 'moment';

export default {
  timeAgoText(years) {
    const timeAgoNum = moment().year() - parseInt(years, 10);
    if (timeAgoNum === 0) return 'THIS YEAR';
    if (timeAgoNum === 1) return 'A YEAR AGO';
    return `${timeAgoNum} YEARS AGO`;
  },
};
