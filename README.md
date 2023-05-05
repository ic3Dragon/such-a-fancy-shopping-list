# Such a Fancy Shopping List

This project was created in part for me to practice typescript and using Preact Signals for state management. My goal was to keep it simple, clean and readable. It has grown to be a shopping list app that displays the different effects the display options have on content.

Even if the end result looks the same it has quite a big effect on accessibility and should be something you consider when creating web applications.

You will mainly notice the difference if you have a screen reader or you are using the keyboard to navigate the elements or by inspecting the page and checking out the rendered html.

Read my blog post expanding on this toppic where I use this app as an example: [The Hidden Impact of CSS Order in Web Development](https://dev.to/ic3dragon/the-hidden-impact-of-css-order-in-web-development-54jj)

View the deployed app here: [Ic3dragon's Fancy Shopping List](https://ic3dragon.github.io/such-a-fancy-shopping-list/)

## Tech Stack

- React
- TypeScript
- Preact Signals
- SASS

## Future Plans

- Add E2E tests so that you can see the effect different display methods have on your testing. And show how to write tests for different options.
- Setup CI/CD
- Add edit Item button (started)
- Add quantity
- Add category for type of item
- Add sorting by category
- Add a button to fully clear list and clear list of bought items

Current state of the app:

![Screenshot of the app](./public/full-app-screenshot.png)
