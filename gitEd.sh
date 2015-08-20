echo $1
#echo $2
git rm $(git ls-files --deleted)
git add .
#git tag -a $1 
git commit -m $1
git push -u git@github.com:mauricioduqueorozco/projectLab.git