### What's this?
This is a gist for mapping a single linear function with domain \[0, x\] to many linear functions whose domains are continuous: \[a, b\], \[b, c\], \[c, d\], ...

### What's that?
A convenient way to allow a user to select a value is with a slider, but sometimes the user doesn't know (or you don't want to show them) the actual values underlying the slider. For example, underlying the following user-facing slider:
<br/>

|-------------|-------------|-------------|--------------|<br/>
&nbsp;&nbsp;Very Low &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Low &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; High &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Very High


are the following break points:


|-------------|-------------|-------------|--------------|<br/>
0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 95 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100


This piecewise linear scaling function helps you figure out that a handle here:


|------X------|-------------|-------------|--------------|<br/>

means 5

and here:

|-------------|-------------|-------------|-------X-------|<br/>


means 97.5, even though the slider itself reports these handles are at 12.5 and 87.5 (on a 0 - 100 scale) respectively.

This piecewise linear scaling function takes a slider value and returns its actual value. In this example:

12.5 -> 5 <br/>
87.5 -> 97.5

That's it. Enjoy! I've also included the inverse function to go backwards.
