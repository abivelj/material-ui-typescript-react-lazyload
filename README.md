# material-ui-typescript-react-lazyload

When lazy loading Material-UI compoents with custom styles if we just extend our interfae like so: `export interface NotWorkingProps extends WithStyles<typeof styles>` webpack will not build it and you'll get an error.

There is a trick to fix this by creating an inner interface that extends both the exported interface and the `With Styles<typeof styles>` interface.

Lazy load function is inspired by Lyft's Universal Lazy Load Component