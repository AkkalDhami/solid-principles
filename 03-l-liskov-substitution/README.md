# L - Liskov Substitution Principle

> Subtypes must be substitutable for their base types without breaking the
> program.

A type follows LSP when code that depends on an abstraction can use any of its
implementations and still get behavior that matches the abstraction's contract.

## Example

A `Bird` is required to move, because every bird can move. Flying is modeled as
a separate `FlyingBird` capability, because not every bird can fly.

| Type | Supports |
| --- | --- |
| `Bird` | `name` and `move()` |
| `FlyingBird` | Everything in `Bird`, plus `fly()` |
| `Eagle` | `Bird` and `FlyingBird` |
| `Penguin` | `Bird` only |

Both `Eagle` and `Penguin` can be passed to `describeMovement` because they can
replace the `Bird` abstraction safely. Only `Eagle` is passed to
`describeFlight`, because `Penguin` does not promise that it can fly.

## The common violation

A poor design would put `fly()` directly on the base `Bird` type and make
`Penguin.fly()` throw an error. That means a `Penguin` cannot safely replace a
`Bird` wherever the base type is expected. Splitting the abstractions keeps each
contract honest.

## Run the example

From the repository root, run:

```bash
npx tsx 03-l-liskov-substitution/lsp.ts
```
