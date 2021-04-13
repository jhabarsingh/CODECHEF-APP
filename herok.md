# Hosting Website on Heroku

1. install heroku cli on your machine

2. authenticate your self
	```
	heroku login
	```

3. generate requirements.txt file

4. create a heroku app
	```
	heroku create app-name
	heroku open # open url
	``` 
5. push code to heroku
	```
	heroku config:set DISABLE_COLLECTSTATIC=1 # to avoid error collect all static files for you
	# in setting.py mention STATIC_ROOT variable where it will collect all static files
	git push heroku main
	``` 

