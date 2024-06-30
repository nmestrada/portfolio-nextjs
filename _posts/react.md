---
title: "I read the React docs so you don't have to"
date: '2023-12-12'
---

Some tips learned I from reading the react docs

1. Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like messageCount && `<p>New messages</p>`. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: `messageCount > 0 && <p>New messages</p>`.

2. What do you do when each item needs to render not one, but several DOM nodes?

The short `<>...</>` Fragment syntax won’t let you pass a key, so you need to either group them into a single `<div>`, or use the slightly longer and more explicit `<Fragment>` syntax:

3. How to handle side effects in React Components
