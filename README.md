# Renovate Configs

Want configs that _do the right thing_ so you don't have to think?

Me too!

This repo is a collection of configs for different purposes.

## packages on npm

in `.github/renovate.json5`
```js
// Docs:
// https://docs.renovatebot.com/configuration-options/
{
  "extends": [
    "github>NullVoxPopuli/renovate:npm.json5"
  ]
}
```

### packages on npm that are monorepos with test apps


in `.github/renovate.json5`
```js
// Docs:
// https://docs.renovatebot.com/configuration-options/
{
  "extends": [
    "github>NullVoxPopuli/renovate:npm.json5"
  ],
  "packageRules": [
    {
      "matchPaths": ["test-app/package.json"],
      "enabled": false
    }
  ]
}
```

## Debugging

Visit: https://developer.mend.io/github/<user>/<repo>

Example: https://developer.mend.io/github/NullVoxPopuli/ember-resources/

### Renovate Docs

- https://docs.renovatebot.com/configuration-options/
- https://docs.renovatebot.com/troubleshooting/
- https://docs.renovatebot.com/config-presets/


