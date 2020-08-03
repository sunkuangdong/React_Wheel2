#!/usr/bin/env bash
yarn doc
git checkout gh-pages
mv -f doc/* ./
git status
git add .
git commit -m 'up'
git push
git checkout -