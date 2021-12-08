import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {
  // Because of the time, I'll just accept any data type
  transform(value: any, ...args: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // Less than 30 seconds will be shown as 'Just now'
        return 'Just Now';
      // Time conventional intervals in second
      const intervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's ago'; // plural (2 days ago)
          }
      }
    }
    return value;
  }

}
