# About
The app is a financial app. Guidelines provided by the Synpulse hiring team.
Please find link to challenge below
https://challenges.synpulse8.com/front-end-engineer/

# API Configuration
Go to https://www.alphavantage.co/ to generate a free API key
Create a file named constants.js in the root directory.
Copy paste this code below : 
```
 constants = {
    alpha_vantage_api_intraday : 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=',
    alpha_vantage_api_intraday_pt2 : '&interval=5min&apikey=',
    alpha_vantage_api_key : '<YOUR API KEY>',
    alpha_vantage_news_url : 'https://www.alphavantage.co/query/?function=NEWS_SENTIMENT&tickers=',
    alpha_vantage_news_url_pt2 : '&apikey='
}

export default constants; 
```


## Installation Instructions
1. Clone the Repository
2. Switch to a new local branch using `git checkout -b <branch-name>`
3. `npm install`
5. `cd ios`
6. `pod install`
7. To run the app on an iOS simulator `npx react-native run-ios`