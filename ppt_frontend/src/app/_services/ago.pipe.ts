import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(timestamp: number): string {
    const timestampInSeconds = timestamp / 1000;
    const date = new Date(timestampInSeconds * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;

    return timeString;
  }
}
