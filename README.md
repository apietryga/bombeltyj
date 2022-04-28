# BombelTyj
  Front-end for Bombel Tyj Restaurant.


## DEPLOY
$ git add .
$ git status // to see what changes are going to be commited
$ git commit -m 'Some descriptive commit message'
$ git push origin master

$ git checkout gh-pages // go to the gh-pages branch
$ git rebase master // bring gh-pages up to date with master
$ git push origin gh-pages // commit the changes
$ git checkout master // return to the master branch


<!-- OLD -->
    "deploy": "git push origin --delete gh-pages && git subtree push --prefix dist origin gh-pages"

<!-- TESTING -->
    "deploy": "git add . && git status && git commit -m 'deploy' && git push origin master && git checkout gh-pages && git rebase master && git push origin gh-pages && git checkout master"