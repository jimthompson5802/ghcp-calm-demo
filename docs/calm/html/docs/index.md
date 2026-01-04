---
id: index
title: Welcome to CALM Documentation
sidebar_position: 1
slug: /
---

# Welcome to CALM Documentation

This documentation is generated from the **CALM Architecture-as-Code** model.

## High Level Architecture
```mermaid
C4Deployment

    Deployment_Node(deployment, "Architecture", ""){
        Person(ghcp-user, "The GHCP User", "User interacting with the application")
        Container(the-application, "The Application", "", "The main application system")
        Container(the-database, "The Database", "", "The Application Database")
    }

    Rel(ghcp-user,the-application,"Connects To")
    Rel(the-application,the-database,"Connects To")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```
## Nodes
    - [The GHCP User](nodes/ghcp-user)
    - [The Application](nodes/the-application)
    - [The Database](nodes/the-database)

## Relationships
    - [User To App](relationships/user-to-app)
    - [App To Database](relationships/app-to-database)


## Flows
     _No flows defined._

## Controls
  _No Controls defined._

## Metadata
  _No Metadata defined._

## Adrs
  _No Adrs defined._
