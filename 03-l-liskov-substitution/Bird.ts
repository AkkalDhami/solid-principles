export interface Bird {
  name: string;
  move(): string;
}

export interface FlyingBird extends Bird {
  fly(): string;
}

export class Eagle implements FlyingBird {
  name = "Eagle";

  move(): string {
    return "walks";
  }

  fly(): string {
    return "flies high";
  }
}

export class Penguin implements Bird {
  name = "Penguin";

  move(): string {
    return "swims";
  }
}
