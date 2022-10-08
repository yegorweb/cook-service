yarn build
cd dist
git init
git add .
git commit -m "deploy"
git push -f https://github.com/yegych9923/cook-service.git gh-pages