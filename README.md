# Renovate Configs

Want configs that _do the right thing_ so you don't have to think?

Me too!

This repo is a collection of configs for different purposes.

## configs

`github>NullVoxPopuli/renovate:weekly.json5`
- better defaults for weekly automated updates
- doesn't constantnly rebase open PRs
 
`github>NullVoxPopuli/renovate:npm.json5`
- extends the weekly config
- appropriate for npm library development

`github>NullVoxPopuli/renovate:js.json5`
- extends the weekly config
- appropriate for javascript application development

## packages on npm

in `.github/renovate.json5`
```js
{
  "extends": [
    "github>NullVoxPopuli/renovate:npm.json5"
  ]
}
```

### packages on npm that are monorepos with test apps


in `.github/renovate.json5`
```js
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


