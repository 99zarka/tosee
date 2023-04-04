rmdir /s /q src
rmdir /s /q public
SET currentdirectory=%cd%
cd ..\
SET parentdirectory=%cd%
cd %currentdirectory%
robocopy  "%parentdirectory%\tosee\src" "%currentdirectory%\src"
robocopy  "%parentdirectory%\tosee\public" "%currentdirectory%\public"
git init
git add .
git commit -m "setup gh-pages"
git branch -M main
git remote set-url origin https://github.com/99zarka/tosee-build.git
git push -u origin main
npm run deploy && pause