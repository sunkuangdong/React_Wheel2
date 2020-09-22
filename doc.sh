#!/usr/bin/env bash
git add .
git commit -m '优化样式'
git push

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m 'doc'
git branch --set-upstream-to origin/gh-pages
git push
git checkout master