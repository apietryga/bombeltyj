# BombelTyj
  Front-end for Bombel Tyj Restaurant.

<!-- publish to github -->
git subtree push --prefix dist origin gh-pages
git push origin `git subtree split --prefix dist master`:gh-pages --force
<!-- git push origin `git subtree push --prefix dist master`:gh-pages --force -->

git push origin (git subtree split --prefix dist master):gh-pages --force