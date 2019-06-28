# Command Line Searches

This recipe provides scripts for easily searching for files, file content, or commands in history.

These scripts make case-insensitive, containing searches for text easier by wrapping built-in commands.
All of these scripts:

* take search text as a first argument
* may also take single-line input from pipe or file

Further, the file searching scripts (`where` and `wherein`)

* search from the current directory by default
* take a second optional file location argument
* search recursively from the specified directory


## Example Usage

### `where`

The `where` script wraps a call to `find`, and may be used as follows:

```bash
# Search for files with names containing "search"
where "search"         # current directory
where "search" ~       # home directory
echo "search" | where

# Search for files named after each line in "search.txt"
echo "search" > search.txt
where < search.txt
cat search.txt | where
cat search.txt | xargs -L1 where
```

### `wherein`

The `wherein` script wraps a call to `grep`, and may be used as follows:

```bash
# Search for text in files
wherein "search"         # current directory
wherein "search" ~       # home directory
echo "search" | wherein

# Search for lines in files containing any line in "search.txt"
echo "search" > search.txt
wherein < search.txt
cat search.txt | wherein
cat search.txt | xargs -L1 wherein
```

### `when`

The `when` script wraps a call to `history` piped to `grep`, and may be used as follows:

```bash
# Search commands in history with text containing "search"
when "search"          # logged history
. when "search" ~      # current shell history
echo "search" | when
echo "search" | . when

# Search commands in history containing any line in "search.txt"
echo "search" > search.txt
when < search.txt
. when < search.txt
cat search.txt | when
cat search.txt | . when
cat search.txt | xargs -L1 when
```
