import { Bird, Eagle, FlyingBird, Penguin } from "./Bird";

function describeMovement(bird: Bird): void {
  console.log(`${bird.name} ${bird.move()}.`);
}

function describeFlight(bird: FlyingBird): void {
  console.log(`${bird.name} ${bird.fly()}.`);
}

const eagle = new Eagle();
const penguin = new Penguin();

// Both birds can replace the Bird abstraction safely.
describeMovement(eagle);
describeMovement(penguin);

// Only birds that support flight are passed to the flight-specific abstraction.
describeFlight(eagle);
