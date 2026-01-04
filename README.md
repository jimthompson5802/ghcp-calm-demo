# CALM GitHub Copilot AI-Assistant Demo

This repository demonstrates the **FINOS Common Architecture Language Model (CALM)** integration with GitHub Copilot AI-Assistant.

## About

CALM is a declarative, JSON-based modeling language used to describe complex systems, particularly in regulated environments like financial services and cloud architectures. This demo showcases how GitHub Copilot can assist in creating, modifying, and understanding CALM architecture models.

## What's Inside

- **Architecture Model**: Sample CALM architecture definition (`docs/sample_ghcp.architecture.json`)
- **Documentation**: Auto-generated architecture documentation using CALM tooling
- **Examples**: Demonstrations of nodes, relationships, interfaces, and other CALM components

## CALM Components Demonstrated

The demonstration showed the results of these CALM-related prompts:


- `What are nodes?`

- `What's the recommended way to model a database relationship?`

- `create architecture named “My Business System” in docs/sample.architecture.json with a actor node called "The User" and one system node called "The Application".  Connect the two nodes with an interface.`

- `add a database node called "The Database" with description "The Application Database" and connect "The Application" to the database.`

- `create architecture documentation in docs/calm/html`



## Resources

- [FINOS CALM Documentation](https://calm.finos.org)
- [FINOS CALM Project Repo](https://github.com/finos/architecture-as-code)

