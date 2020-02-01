# Contributing

::: tip
We are always looking for help maintaining these docs! If you would like to help CSMM by writing documentation or translations, please reach out to us on Discord! 😀
:::

## Web editor

For small changes (like fixing a typo), you can use the links at the bottom of a page to use the Github web editor.

## Local development

Install [Nodejs](https://nodejs.org/en/). VuePress requires Node.js >= 8

```
git clone https://github.com/CatalysmsServerManager/docs
npm install
npm run dev
```

## Submitting changes

To submit changes, please create a [pull request](https://help.github.com/en/articles/about-pull-requests).

### Step by step guide

First we start off by finding the page you want to make a change to. At the bottom of the page, you will find a edit link.

![Missing image](/assets/images/contributing/pull-request-1.png)

This will open up a link to Github where you can create a fork of the repository. This is essentially a copy of the repository on your own Github profile.

![Missing image](/assets/images/contributing/pull-request-2.png)

After creating the fork, you will see a web editor where you can make the change(s) you want. After making the change(s), scroll down and save your work.

![Missing image](/assets/images/contributing/pull-request-3.png)

Upon saving your changes, you will see an overview. Your work is now saved in your personal fork. To send your changes to the actual repository, you must now create a pull request (PR).

![Missing image](/assets/images/contributing/pull-request-4.png)

Give your PR a useful title and optionally a description.

![Missing image](/assets/images/contributing/pull-request-5.png)

Finally, you will see the PR. Some automated checks will happen, checking if the config still works and checking if the build process succeeds. You will also get a deploy preview so you can see what your change(s) will look like on the real website.

![Missing image](/assets/images/contributing/pull-request-6.png)

At this point, a maintainer can accept your change(s). This will merge your forked repo with the main one and your changes will go live!

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
