var DateUtil = {

    daysInMonth: function(year, month) {

        return new Date(year, month + 1, 0).getDate();
    },

    getTimeDiff: function(startDate, endDate, ignoreTimeZone) {
        var diff = {};

        startDate = ignoreTimeZone ? this.toUTCDate(startDate) : startDate;
        endDate = ignoreTimeZone ? this.toUTCDate(endDate) : endDate;

        var timeDiff = endDate.getTime() - startDate.getTime();

        diff.days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
        timeDiff -= diff.days * 1000 * 60 * 60 * 24;

        diff.hours = Math.floor(timeDiff / 1000 / 60 / 60);
        timeDiff -= diff.hours * 1000 * 60 * 60;

        diff.minutes = Math.floor(timeDiff / 1000 / 60);
        timeDiff -= diff.minutes * 1000 * 60;

        diff.seconds = Math.floor(timeDiff / 1000);

        return diff;
    },

    isLeapYear: function(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    },

    prettyTimeDiff: function(earlierDate, laterDate) {

        var diff = getTimeDiff(earlierDate, laterDate);

        if(diff.days === 1) {
            return diff.days + ' day';
        }
        else if(diff.days > 1) {
            return diff.days + ' days';
        }
        else if(diff.hours === 1) {
            return diff.hours + ' hour';
        }
        else if(diff.hours > 1) {
            return diff.hours + ' hours';
        }
        else if(diff.minutes === 1) {
            return diff.minutes + ' minute';
        }
        else if(diff.minutes > 1) {
            return diff.minutes + ' minutes';
        }
        else if(diff.seconds === 1) {
            return diff.seconds + ' second';
        }
        else if(diff.seconds > 1) {
            return diff.seconds + ' seconds';
        }

        return '';
    },

    sortDates: function(dateArray, asc) {
        
        if(typeof asc === 'undefined') {
            asc = true;
        }

        dateArray.sort(function(a, b) {
            return a - b;
        });

        if(!asc) {
            dateArray.reverse();
        }
    },

    getDayName: function(date, dayNameList) {
      dayNameList = dayNameList || [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

      return dayNameList[date.getDay() - 1];
    },

    getMonthName: function(date, monthNameList) {
      monthNameList = monthNameList || [ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ];

      return monthNameList[date.getMonth()];
    },

    toUTCDate: function(date) {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }
};