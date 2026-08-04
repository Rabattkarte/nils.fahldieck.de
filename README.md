# :eyeglasses: nils.fahldieck.de

## Description

Welcome to the source repository for my personal website [nils.fahldieck.de](https://nils.fahldieck.de).

- The website is built with [Hugo](https://gohugo.io).
- The theme is based on [hugo-coder](https://github.com/luizdepra/hugo-coder) by [luizdepra](https://github.com/luizdepra).
- The sleep overlay is inspired by [nightnight](https://github.com/nicktacular/nightnight) by [Masamichi Souzou](https://mmsz.co) / [Neeley Worldwide](https://neeleyworldwide.com), adapted and simplified for this site.

Feedback, comments, or pull requests are always appreciated. :open_hands:

## Development

Ensure that the theme submodule is checked out:

```sh
git submodule update --init --recursive
```

## Deployment

This site is deployed natively with GitHub Pages and GitHub Actions.

The workflow builds the site with Hugo and deploys it via the official `actions/deploy-pages` action.

Deployment best practices are based on the upstream Hugo guide:

- [Host on GitHub Pages (Hugo)](https://gohugo.io/host-and-deploy/host-on-github-pages/)
