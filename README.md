# BubbleSort

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Test](#test)

## General info

App has been created based on "Typescript: The Complete Developer's Guide" course on udemy.

Abstract class "Sorter" implements simple sorting algorithm called "bubble sorting".
"Sorter" is extended in other classes. Child classes must have:
- `compare(leftIndex, rightIndex)` method,
- `swap(leftIndex, rightIndex)` method,
- `length` property,

## Technologies

Created in TypeScript.

## Setup

To run this app you need to install npm packages
`$ npm install`


## Test
There is one sorting example for each class in `index.ts`.

Type `$npm run start` to see results.

When you see error after run this command stop the process `cmd/ctrl + c` and try again. Nodemon probably tries to run index.js before tsc creates it.

