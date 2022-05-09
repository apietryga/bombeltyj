set -e
npm run build
cd dist
echo 'bombeltyj.pl' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:apietryga/bombeltyj.git master:gh-pages
cd -