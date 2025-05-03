# Lab 5 - Starter
Mehak Gupta


1. Not entirely. While some parts of the “message” feature can be unit tested (like input validation, message formatting, or internal logic), the overall feature—sending a message from one user to another—often involves multiple components (UI, network, database). This makes it better suited for integration tests or end-to-end tests. Unit tests are best used for isolated pieces of logic, and the full messaging flow usually spans across different system boundaries.
2. Yes, absolutely. This feature is typically implemented in a small, isolated function or component (e.g., a front-end input limiter or back-end validation check). It doesn’t rely on external systems, so it fits the purpose of a unit test perfectly.
