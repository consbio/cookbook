This example contains a simple React wrapper for [crossfilter](https://github.com/crossfilter/crossfilter).

The component is defined in `./src/CrossFilter/index.js`. It requires `data` and `dimesnions` props and subscribes all of its children marked with `isFilter` prop to the crossfilter object, dimensions, and updates in the filtered data.

- `CrossFilter` props:

    - `data`: and array of objects (see `./src/data.js` for an example)
    - `dimensions`: an object of keys and dimensions on `data`

See `./src/App.js` for an example of how to define dimensions and initialize and use the component. `./src/filters` has examples of how you can use and filter data in `CrossFilter` children.

Here is a live demo of this component:
[https://consbio.github.io/cookbook/javascript/react-crossfilter/build/index.html](https://consbio.github.io/cookbook/javascript/react-crossfilter/build/index.html)
