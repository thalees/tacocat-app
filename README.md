# Tacocat App

A slot machine app for Android, totally random for college project :).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

- yarn 1.22.4
- android studio ( opcianal para emular um celular android )

### Installing

It is very easy to install and upload the application. Just follow the steps below and everything will be fine! :tada:

```
git clone https://github.com/thalees/TacocatApp
yarn install && yarn start
```

To run using the emulator just run the following command:
```
npx react-native run-android
```

If you want to use your cell phone for development, first you need to activate the debugging mode on your cell phone. [See this article]

So just execute the commands below:
```
adb devices // to get the device_id
npx react-native run-android
yarn start
adb -s device_id reverse tcp:8081 tcp:8081
```

## Built With

* [React-Native](https://reactnative.dev/) - Javascript library used to develop applications for Android and IOS systems natively.
* [Typescript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript that adds typing and some other features to the language.

### Some concepts used

* [React-hooks](https://reactjs.org/docs/hooks-intro.html) - They let you use state and other React features without writing a class.
* [Functional Components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108) - A Functional component is a function that takes props and returns JSX.
* [Gitmoji](https://gitmoji.carloscuesta.me/) - An emoji guide for your commit messages.

### APIs used

* [Cat](https://github.com/alexwohlbruck/cat-facts) - Daily cat facts!
* [Taco](https://github.com/sinker/tacofancy) - A community-driven, object-oriented taco recipe API.
* [Dog](https://dog.ceo/dog-api/) - The internet's biggest collection of open source dog pictures.
* [COVID-19](https://github.com/ExpDev07/coronavirus-tracker-api) - API for tracking the global coronavirus outbreak.

## Authors

See the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
