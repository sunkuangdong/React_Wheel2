#!/usr/bin/env bash
yarn doc
git checkout gh-pages
mv doc/* ./
git status
git add .
git commit -m 'updata'
git push
git checkout master