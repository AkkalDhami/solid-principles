## What is SOLID?

SOLID is a set of five object-oriented design principles that help you build software that is easier to:

- change
- test
- extend
- maintain  
- reason about
 
| Letter | Principle             | Core idea                                                                   |
| ------ | --------------------- | --------------------------------------------------------------------------- |
| **S**  | Single Responsibility | One class should have one reason to change                                  |
| **O**  | Open/Closed           | Add behavior without modifying stable code                                  |
| **L**  | Liskov Substitution   | Subtypes must be safely substitutable for their base types                  |
| **I**  | Interface Segregation | Don't force classes to depend on methods they don't need                    |
| **D**  | Dependency Inversion  | High-level code should depend on abstractions, not concrete implementations |

---

### 1. S — Single Responsibility Principle

> A class should have one reason to change.

A common beginner interpretation is:

> "A class should only have one method."

That's wrong.

A class can have many methods. The important question is:

> Does this class have multiple unrelated responsibilities?

**Real-world example:**

Imagine a restaurant employee.

A chef:

- prepares food
- manages database
- sends emails
- generates invoices
- handles payments

That's clearly too many responsibilities.

> **One class = one responsibility / one reason to change.**

---

### 2. O — Open/Closed Principle

> Software entities should be open for extension but closed for modification.

This sounds complicated, but the idea is simple.

**Real-world analogy:**

Think of a wall socket.

Your house doesn't need to be rebuilt every time you buy a new appliance.

You simply plug in:
```
          Socket
            │
    ┌───────┼────────┐
    ↓       ↓        ↓
   TV     Laptop   Charger
```
The socket is the stable abstraction.

> **Don't keep modifying stable code every time you add a new behavior. Extend it.**