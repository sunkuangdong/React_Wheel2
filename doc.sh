#!/usr/bin/env bash
git add .
git commit -m 'doc前的提交'
git push

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m 'doc'
git push --set-upstream origin gh-pages
git checkout master