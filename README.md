# Falling snow in TypeScript

## To run the project locally

- Open a terminal and run the following commands
  ```sh
  git clone git@github.com:dotnetthailand/falling-snow-in-typescript.git
  cd falling-snow-in-typescript
  yarn
  yarn run serve
  ```
- Open a browser and navigate to http://localhost:9999

## Example result of snowing in JavaScript code

![snowing-result](snowing-result.gif)

## Equation

-   We think snowing has falling pattern like sin graph.
-   Let's start by plotting y = sin(x)

## y = sin(x)

![y = sin(x)](<y=sin(x).png>)

- As you can see, this is not right.
- Falling of snow is an inversion of relationship `y = sin(x)`.
- Swap y and x in the equation.
- Therefore, the inversion of the relationship `y = sin(x)` is `x = sin(y)`.

## x = sin(y)

![x=sin(y)](<x=sin(y).png>)

> The equation of our falling snow is **x = sin(y)**.

---

## Adjust our graph

To make snow fall naturally, we need to randomly adjust our amplitude (height) and period (width) of a graph.

## Adjust amplitude

x = 4sin(y)

![x = 4sin(y)](<x=sin(y)-amplitude.png>)

x = 1/2sin(y)

![x = 1/2sin(y)](<x=sin(y)-amplitude-2.png>)

---

## Adjust period

### x = sin(2πy)

If y equal 1, it take two PI periods.

![x = sin(2πy)](<x=sin(y)-period.png>)

### x = sin(π/2y)
If y equal 1, it takes half of PI period.

![x = sin(π/2y)](<x=sin(y)-period-2.png>)

---

# REF

-   [Inverse function](https://www.youtube.com/watch?v=zVG6MBFkiOo)
-   [Adjust amplitude and period](https://www.dummies.com/education/math/trigonometry/adjusting-the-period-of-a-sine-function/)

# Credit

-   Original code from [https://yagudaev.com/posts/snow-in-javascript/](https://yagudaev.com/posts/snow-in-javascript/)
-   [Master Off for explaining me the inversion function and sin graph](https://www.facebook.com/athum.thum)
