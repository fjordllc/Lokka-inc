git clone --depth=1 git@github.com:fjordllc/fjordllc.git master
rm -rf master/docs
cp -rp docs master/
cd master
git checkout master
git add docs
git commit -a -m 'Update articles'
git push origin master --force