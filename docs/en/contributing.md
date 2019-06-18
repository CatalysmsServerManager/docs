# Contributing

For small changes (like fixing a typo), you can use the links at the bottom of a page to use the Github web editor.

## Local development

Install [Nodejs](https://nodejs.org/en/). VuePress requires Node.js >= 8

```
git clone https://github.com/CatalysmsServerManager/docs
npm install
```

This will install the necessary dev dependencies, so that you can view the site locally. You can start the development server with `npm run dev`.

## Submitting changes

To submit changes, please create a [pull request](https://help.github.com/en/articles/about-pull-requests). 

## Adding a new page

- Create a new file in the appropriate location

    For example, `docs/en/CSMM/new-page.md`

- Add the new page to the sidebar

    Modify the appropriate file in `docs/.vuepress/sidebars/`
    
## Tips, warnings, and danger messages

If you have a tip to share with to user, you can format them in a specific way so that it looks appealing and noticable. The same goes for warning and "danger" messages.

```
::: tip
You can do this stuff even faster if you do this cool thing listed in this tip!
:::

::: warning
Make sure you're on version 2.0.0 or above before trying this.
:::

::: danger
Be careful; this action is irreversible!
:::
```

::: tip
You can do this stuff even faster if you do this cool thing listed in this tip!
:::

::: warning
Make sure you're on version 2.0.0 or above before trying this.
:::

::: danger
Be careful; this action is irreversible!
:::