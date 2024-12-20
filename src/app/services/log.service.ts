import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
