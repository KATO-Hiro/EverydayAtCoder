# EverydayAtCoder

## Description

Visualize rating changes on [AtCoder](https://atcoder.jp/)'s virtual contests inspired by [Codeforces Anytime](https://codeforces-anytime.firebaseapp.com/).

***DEMO***

- Comming soon.

## Features

- Rating system using virtual contest result(s).

## Getting started

- Comming soon.

### Usage

- Comming soon.

## How to clone the repository

Paste the following commands at a Terminal prompt.

```terminal
$ mkdir hoge
$ cd hoge
$ git clone git@github.com:KATO-Hiro/EverydayAtCoder.git
```

### Set up [Firebase] (https://firebase.google.com/) in local env

1. Sign into your Firebase account, and create a project for staging environment.

2. In the Firebase console, open your staging project, navigate to the "Service accounts" tab, and click "Generate new private key" to download your admin SDK keys.

Note: Your private key (in your service account key file) gives access to your project's Firebase services. Keep it confidential and never store it in a this repository.

3. Create .env files in frontend.

```terminal
cd frontend
$ touch .env
```

Open your editor, filling in your Firebase keys like below.

```
# .env
# == Firebase app keys (staging) ==
FIREBASE_API_KEY=■■■■■■■■-■■■■■■■■
FIREBASE_AUTH_DOMAIN=■■■■■■■■.firebaseapp.com
FIREBASE_DATABASE_URL=https://■■■■■■■■.firebaseio.com
FIREBASE_PROJECT_ID=■■■■■■■■
FIREBASE_STORAGE_BUCKET=■■■■■■■■.appspot.com
FIREBASE_MESSAGING_SENDER_ID=■■■■■■■■
FIREBASE_APP_ID=1:■■■■■■■■:web:■■■■■■■■
FIREBASE_MEASUREMENT_ID=G-■■■■■■■■
```

Note that .env* files are in the project's .gitignore, so they won't be checked into this repository.

Paste the following commands at a Terminal prompt.

```terminal
$ npm install

$ cd frontend
$ yarn firebase login
```

#### See

> https://github.com/benzguo/nextjs-now-firebase

### Debug in your local env

Paste the following commands at a Terminal prompt in your cloned directory.

```terminal
$ cd frontend
$ yarn dev
```

Open http://localhost:3000 in your browser.

## Requirement

- Docker Desktop 19+

### Backend

- Comming soon.

### Frontend

- Node.js 14.0.0
- [Next.js](https://nextjs.org/) 9.4.x
- [React](https://reactjs.org/) 16.13.x
- [TypeScript](https://www.typescriptlang.org/) 3.9.x

- [Firebase](https://firebase.google.com/)
  - Authentication

### Hosting

- [Vercel Now](https://vercel.com/)

### Optional

- [VS Code Remote Development](https://code.visualstudio.com/docs/remote/containers)

## Links

[AtCoder](https://atcoder.jp/)

[Readme Driven Development; RDD](https://qiita.com/b4b4r07/items/c80d53db9a0fd59086ec)

## Related projects

[Codeforces Anytime](https://codeforces-anytime.firebaseapp.com/): Visualize rating changes on Codeforces' virtual contests.

[AtCoder Charts](https://atcoder-charts.netlify.com/#/): Show a graph of AtCoder's rating and performance.

## Author

[@KATO-Hiro](https://twitter.com/k_hiro1818)

## License

[MIT](http://KATO-Hiro.mit-license.org)
