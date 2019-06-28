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

### `howmuch`

The `howmuch` script wraps a call to `du`, and may be used as follows:

```bash
cd /usr/local
howmuch
490M    total
58M     lib
38M     share
24M     bin
3.3M    include
4.0K    sbin
4.0K    .hidden
4.0K    etc
```

You may also search in another directory:

```bash
howmuch /usr/local
490M    total
58M     lib
38M     share
24M     bin
3.3M    include
4.0K    sbin
4.0K    .hidden
4.0K    etc
```
