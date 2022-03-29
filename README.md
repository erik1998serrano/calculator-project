# Simple Calculator

A calculator that does basic calculator things. Created during the javascript portion of the \_nology program and was implemented with knowledge gained during this time.

🔗 [Live Demo](https://erikryan-s.github.io/calculator-project/)

## Screenshot

<p align="center">
    <img src="https://i.gyazo.com/dc53d920a2dacdccdd138ab7b22dd024.png" width="300" height="450">
</p>

## Goal

-   Recreate the calculator design shown [here](#samsung-calculator) using HTML and CSS
-   Use javascript logic to perform calculations given the provided [requirements](#requirements-and-topics-covered)
-   Utilise DOM manipulation to display the logic on the calculator display
-   Use logic to minimise the impact of edge cases

## Requirements and Topics covered

-   HTML/SCSS

1. Create a calculator to be rendered to the html page
1. it should have number keys from 0 to 9
1. It should have operator keys (+, -, /, \*, =)
1. It should have a display rendering the current calculation in a box at the top
1. It should also have a "." key
1. You should choose a picture of a calculator from the Internet and reproduce it in HTML/SCSS

-   JavaScript

1. Should render the current calculation in a box at the top (calculator display)
1. It should handle decimals
1. It doesn't need to support orders of operation
1. It should not use eval() or Function() constructor (edited)

## Lifecycle & Implementation details

### Breakdown of logic

-   Rough design of calculator
-   Figuring out JS
    -   figure out first how to get numbers show up on the screen upon tap (eventlisteners)
    -   store values
    -   Implement function to do calculations
-   Complete design and publish

## Design inspiration

### Samsung Calculator

<p align="center">
    <img src="https://i.gyazo.com/e840e9209adbc000cd5df36a040fa1f0.png" width="300" height="650">
</p>

## Future updates and current limitations

-   Allow for the changing of operator signs
-   Limit the amount of decimals allowed to 1 (calculation still works regardless of number of decimals added)
-   Allow a maximum of 1 zero in the display when inputing numbers
