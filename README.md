# Irdeto's Cryptocurrency Threshold Evaluator

## How to start

First step, clone this repository:

```
git clone git@github.com:mozartdiniz/irdeto.git
```

### Installing

```
cd irdeto
yarn install
```

The installation process can take a while. When it finished you can run:

### Running

```
yarn start
```

### Testing

```
yarn test
```

A browser window will open pointing to the http://localhost:3000/login.

## Authentication

This implementation is powered by Auth0. It is enabled the authentication with Google API. If you just click to login with your Google Account, a new email will be created and you will be authenticated.


## The Application

After the login, you will find, on the left, the Cryptocurrency list and the time range. Any change in any of those filters will result in a new API call to Poloniex which will populate the table with new data.

The idea behind the Range selector on the right is, instead ask the user to insert the desired threshold, the application can get the minimum, and the maximum value returned from the API and displayed to the user as the entire universe of data.