# DOCMED  ⚡️ [![GitHub](https://img.shields.io/github/license/jhabarsingh/CODECHEF-APP?color=blue)](https://github.com/jhabarsingh/DOCMED/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/jhabarsingh/CODECHEF-APP)](https://github.com/jhabarsingh/CODECHEF-APP/stargazers)  [![GitHub contributors](https://img.shields.io/github/contributors/jhabarsingh/CODECHEF-APP.svg)](https://github.com/jhabarsingh/CODECHEF-APP/graphs/contributors)  [![GitHub issues](https://img.shields.io/github/issues/jhabarsingh/CODECHEF-APP.svg)](https://github.com/jhabarsingh/CODECHEF-APP/issues) [![GitHub forks](https://img.shields.io/github/forks/jhabarsingh/CODECHEF-APP.svg?style=social&label=Fork)](https://GitHub.com/jhabarsingh/CODECHEF-APP/network/)

<p align="center">
  <img src="https://github.com/jhabarsingh/CODECHEF-APP/blob/main/app/assets/codechef.png?raw=true" />
</p>
<details>
  <summary>:zap: TECH STACK</summary>
  <br/>
  <div style="display:flex;justify-content:space-around">
  <img  title="Django" src="https://icon-library.com/images/django-icon/django-icon-0.jpg" width="50px" height="50px" style="margin-right:5px;" />
  <img title="Heroku"  src="https://www.thedevcoach.co.uk/wp-content/uploads/2020/04/heroku.png" height="50px"  style="margin-right:5px;"/> 
  <img title="React Native" src="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" height="50px"   style="margin-right:5px;"/>
  <img  title="Beautiful Soup" src="https://funthon.files.wordpress.com/2017/05/bs.png" height="50px" style="margin-right:5px;" />
  <img  title="Netlify" src="https://flaviocopes.com/netlify/netlify-logo.png" height="50px" style="margin-right:5px;" />
  <img  title="Docker" src="https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png" height="50px" style="margin-right:5px;" />
</div>
</details>

## Abstract
To improve the conventional diagnostic procedures as they are prone to human
mistakes and these are slow, expensive and not equally accessible to everyone therefore 
we developed an efficient ML model for predicting the possibility of various
diseases like covid, viral fever, dengue etc and integrate it with an interactive web
based dashboard which will also provide some additional insights and
recommendations over the user’s medical data.
[Read More](https://docs.google.com/document/d/1q19CVPYDygCHwYQ6YYb1oWLqrlC6ymcc14U_EjeX64w/edit?usp=sharing)


![HOME PAGE](https://github.com/jhabarsingh/Covid-Assistant/blob/main/docs/animations/chatbot.gif)

## Features
Features Provided By the **DOCMED**
  1. CHATBOT **COVAT** TO RESOLVE YOUR QUERIES
  2. ML MODEL TO PREDICT COVID FROM **SYMTOMS**
  3. ML MODEL TO PREDICT COVID FROM [**CHEST XRAY REPORT**](https://github.com/jhabarsingh/XRAY-COVID-PREDICTION)
  4. ML MODEL TO PREDICT COVID FROM **CHEST CTSCAN REPORT**
  6. CONSULT WITH A **DOCTORS** IN YOUR CITY
  7. [**TRACK COVID CASES**](https://github.com/jhabarsingh/COTRACK) WORLD WIDE OR COUNTRY WISE

![MACHINE LEARNING](https://github.com/jhabarsingh/DOCMED/blob/main/docs/animations/ml_new.gif)

## Django Backend Setup

### Using venv
```bash
git clone https://github.com/jhabarsingh/CODECHEF-APP.git 
cd CODECHEF-APP
python3 -m venv env # Python 3.6.9 or 3.7.0 version 
source env/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py runserver
```

### Using conda
```bash
git clone https://github.com/jhabarsingh/CODECHEF-APP.git 
cd CODECHEF-APP
conda create -n codechef python==3.7 
conda activate codechef
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py runserver
```

### Using Docker

```bash
sudo apt-get install docker docker-compose # Install docker, docker-compose on linux
git clone https://github.com/jhabarsingh/CODECHEF-APP.git
cd CODECHEF-APP
sudo docker-compose up
```

## [React Native Expo Setup](https://dev.to/runosaduwa/how-to-install-react-native-with-expo-quick-easy-4j8j)

```
git clone https://github.com/jhabarsingh/CODECHEF-APP.git
cd CODECHEF-APP/app
npm install
expo start
```

## [Want To Contribute](https://medium.com/mindsdb/contributing-to-an-open-source-project-how-to-get-started-6ba812301738)
### You can contribute to this project in many ways
 1. You can create an issue if you find any bug.
 2. You can work on an existing issue and Send PR.
 3. You can make changes in the design if it is needed.
 4. Even if you find any grammatical or spelling mistakes then also you can create an issue.

> *I would be glad to see a notification saying `User {xyz} created a Pull Request`.
I promise to review it.*
