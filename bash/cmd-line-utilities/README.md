# Command Line Utilities

This recipe provides utility scripts, which may be adapted to fit a given platform.


## Example Usage

### `explore`

The `explore` script is originally written for Xubuntu, but may be adapted by:

* updating the finder command, `xdg-open`
* updating the text editor command, `gedit`

```bash
explore "filename"       # opens in gedit as written
explore "directoryname"  # opens in XFCE finder as written
explore                  # opens current directory in finder
```
