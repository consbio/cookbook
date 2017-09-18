# Contributing

## Recipe Organization

Recipes should be organized first by language, then optionally by one or more topics. Recipes can be placed directly 
under a language, or under a topic folder. In other words, `javascript/<recipe>` and `javascript/es6/<recipe>` are
both acceptable. Language versions should not be represented at the top level, but as topics within a language. For
example:  
```
python/
|-- python-2
|-- python-3
```

Further, recipes should only be grouped by language version if the recipe applies _only_ to that version.

No recipes should be organized at the very top level. Instead, directories should be created in the event of non 
language-specific recipes (e.g., `general/<recipe>`) or multi-language recipes (e.g., `multiple/<recipe>`). Recipes
should only be considered "multi-language" if there is no clear primary language. The mere presense of more than one
language syntax in a recipe does not qualify it as multi-language.

## Recipe Structure

Each recipe (even small ones) should be contained in a folder with a `README.md` and one or more code files. The recipe
folder should be the short-name of the recipe, all lower case, and separated by dashes. E.g., 
`task-polling-with-es6-promises`.  
```
javascript/
|-- es6/
    |-- task-polling-with-es6-promises/
        |-- README.md
        |-- example.js
```

## Adding Recipes

When you add a recipe, edit the root `README.md` and add your recipe in the appropriate place in the "Current Recipes"
section. The link should point to the recipe folder, not the `README.md` file. Add you recipe in a new branch or fork
and create a pull request to add it to the cookbook.