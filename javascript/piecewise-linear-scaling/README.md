### What's this? (Feel free to skip this section):

#### Summary:
This is a gist for mapping a single linear function with domain \[0, x\] to many
linear functions whose domains are continuous: \[a, b\], \[b, c\], \[c, d\], ...

#### Breakdown of terms:
##### Piecewise:
In mathematics piecewise functions are defined by two or more smaller functions,
depending on your domain. Domain just means your possible input values. For
example, as your input values (aka x-values) go from 0-10,your output may be
defined by 5x (outputs 0 - 50), but for inputs 10-20, your outputs may be
defined by 2x + 50 (outputs 50 - 70). This is a piecewise function because it
is made up of two functions (5x, 2x + 50), and you choose which one to use based
on your domain (inputs).

##### Linear:
A function that can be drawn as a line. The functions described above
(5x and 2x + 50) are separately linear functions. However, the piecewise
function that combines the two is not linear, since it's graph is not a straight line.

##### Scaling:
The multiplicative value by which a linear function changes inputs. A function
that takes in values 0 - 10 and returns values 0 - 50 'scales' the inputs, specifically by 5.

A piecewise linear scaling function is not a special math term (you probably
won't find it on Google), it is a combination of terms appropriate for
describing the included gist.

### What's this for? (Simpler explanation of use):
A convenient way to allow a user to select a value is with a slider, but
sometimes the user doesn't know (or you don't want to show them) the actual
values underlying the slider. For example, underlying the following user-facing
slider:
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

That's it. Why the name piecewise linear scaling? A piecewise function in
mathematics is one that


Enjoy! I've also included the inverse function to go backwards.
