import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface EntryValue {
  send: string;
  id: number;
}

export interface GetHello {
  map: string[];
  filter: EntryValue[];
  find: EntryValue | null;
  undefined: null;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHello  {
    const entryValue: EntryValue[] = [
      { send: 'mock', id: 1 },
      { send: 'mock', id: 2 },
      { send: 'mock', id: 3 },
      { send: 'mock', id: 4 },
      { send: 'mock', id: 5 },
      { send: 'mock', id: 6 },
      { send: 'mock', id: 7 },
      { send: 'mock', id: 8 },
    ];
    return {
      map: entryValue.map((ev) => `${ev.send} ${ev.id}`),
      filter: entryValue.filter((ev) => ev.id % 2 === 0),
      find: entryValue.find((ev) => ev.send !== 'mock'),
      undefined: null,
    };
  }
}
