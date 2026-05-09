export interface Channel {
  send(message: string): string;
}

export class EmailChannel implements Channel {
  send(message: string): string {
    return `EMAIL: ${message}`;
  }
}

export class SmsChannel implements Channel {
  send(message: string): string {
    return `SMS: ${message}`;
  }
}

export class Notifier {
  constructor(private readonly channel: Channel) {}

  notify(message: string): string {
    return this.channel.send(message);
  }
}
