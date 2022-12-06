# :eyeglasses: nils.fahldieck.de

## Description

Welcome to the source repository for my personal website [nils.fahldieck.de](https://nils.fahldieck.de/).

- The website is built with [Hugo](https://gohugo.io/).
- The theme is based on [hugo-coder](https://github.com/luizdepra/hugo-coder/) by [luizdepra](https://github.com/luizdepra).

Feedback, comments, or pull requests are always appreciated. :open_hands:

## Development

Ensure that all submodules (e.g., the used theme) are checked out:

```sh
git submodule update --init --recursive
```

## Deployment

To deploy the site to an ssh location, run the following:

```sh
export deploy_host=<my SSH host>
export deploy_dest=<my web dir on that host>
bash .ci/deploy.sh
```
