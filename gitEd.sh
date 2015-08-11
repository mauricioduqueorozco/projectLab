echo $1
git rm $(git ls-files --deleted)
git add .
git commit -m $1
git push -u git@github.com:mauricioduqueorozco/projectLab.git