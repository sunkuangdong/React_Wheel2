#!/usr/bin/env bash
git add .
git commit -m 'doc前的提交'
git push

yarn doc
git checkout gh-pages
mv -f doc/*./
git status
git add .
git commit -m 'updata'
git push
git checkout master