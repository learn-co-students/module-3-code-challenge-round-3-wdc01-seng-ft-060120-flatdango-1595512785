# Flatdango

Flatiron Movie Theater is open for business! You will be building out an application, Flatdango, that allows a user to purchase movie tickets from the theater.

## Demo

![Example](assets/flatdangoDemo2.gif)

## Setup

- Fork and clone this repository.
- Open `index.html` in your browser.
- Run `json-server --watch db.json` to start the backend.

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/films/[:id]` (start with `/films/1`)
- PATCH `/films/[:id]`
- GET `/films` (for Advanced Deliverables only)

## Core Deliverables

As a user, I can:

- See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
- Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
- I should not be able to buy a ticket if the showing is sold out.

## Advanced Deliverables:

These deliverables are not required to pass the code challenge, but if you have extra time, you should attempt them!  They are a great way to stretch your skills.

> If you're going to attempt the advanced deliverables, **make sure you have a working commit with all the core deliverables first!**

As a user, I can:

- See a menu of all movies on the left side of the page.
- Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
- Buy a ticket for any movie and update the tickets sold for that movie, not just the first.
- Indicate in the menu which movies are sold out.

![Example](assets/flatdangoDemo.gif)

## Styling

[Semantic Ui](https://semantic-ui.com/elements/list.html) is loaded into this project via a `link` tag in the `head` of the html. Some extra styling is also included in `assets/index.css`. Styling is built in for the base deliverables.

Styling for advanced deliverables:

The listed films should be added to the div with an id of `films`.  Here is sample styling for the film list items:

```html
  <div class="film item">(Title of film)</div>
  <div class="sold-out film item">(Title of a sold-out film)</div>
  <div class="film item">(Title of film)</div>
```

## Rubric

### DOM Manipulation

1. Did not properly render elements to the DOM.

2. Rendered elements to the DOM, but with some errors.

3. Successfully rendered and updated the DOM as described by the Core Deliverables.

4. Structured HTML creation code cleanly and in a reusable way, using a semantically correct HTML structure without any unnecessary elements.

5. Completed at least one Advanced Deliverable.

### Events

1. Did not attach event listeners to respond to events.

2. Attached event listeners, but incompletely or with some errors.

3. Successfully attached event listeners to handle DOM events and met all of the Core Deliverables.

4. Structured code in a clean and reusable way, splitting functions, using descriptive names and using target properties effectively.

5. Completed at least one Advanced Deliverable.

### Communication with the Server

1. Unable to communicate with the server.

2. Partially able to communicate with the server, but incompletely or with some errors.

3. Able to perform a GET and a non-GET request successfully. All Core Deliverables met.

4. Code structured in a clean and reusable way, splitting into functions and reusing them where needed, with clear function and variable naming.

5. Completed at least one Advanced Deliverable.