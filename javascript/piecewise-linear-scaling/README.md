What's this?

This is a gist for a piecewise linear scaling function.

What's that?

A convenient way to allow a user to select a value is with a slider, but sometimes the user doesn't know (or you don't want to show them) the actual values underlying the slider. For example, underlying the following user-facing slider:


|--------|--------|--------|---------|
 Very Low    Low     High   Very High


are the following break points:


|--------|--------|--------|---------|
0        10       30       95       100


A piecewise linear scaling function helps you figure out that a handle here:


|----X----|--------|--------|--------|

means 5

and here:

|--------|--------|--------|----X----|


means 97.5, even though the slider itself reports these handles are at 12.5 and 87.5 (on a 0 - 100 scale) respectively.

The piecewise linear scaling function takes a slider value and returns its actual value. In this example:

12.5 -> 5
87.5 -> 97.5

That's it. Enjoy! I've also included the inverse function (to go backwards).
