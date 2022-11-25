<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Series Guide Application <a name="about-project"></a>

**Series Guide Application** is a small application that displays some of the popular shows in the world. It also allows users to share their comments and feedback about their favored shows and give a thumbs up thanks to the external Involvment and TVMaze API services.

## Assessment links

- [Kanban board](https://github.com/users/Kweeka1/projects/3)
- [PR - Mohamed Talbi](https://github.com/Kweeka1/movies-app/pull/26)
- [PR - Sammy Ndabo](https://github.com/Kweeka1/movies-app/pull/22)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- HTML
- SCSS
- Javascript
- Webpack

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Display shows**
- **Display popup containing show's details**
- **Give feedback and thumbs up to your favorite show**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Open live demo](https://kweeka1.github.io/movies-app/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need to install these prerequisites:

- If you're running on Windows you can download the prerequisites from the links down below:

> [Nodejs](https://nodejs.org/en/)

> [Git](https://git-scm.com/)

- If you're running on Linux follow these steps down below:

- Install git.

```sh
 sudo apt install git
```

- Install nodejs and npm.

```sh
 sudo apt install nodejs
```

### Setup

Clone this repository to your desired folder:

```sh
  git clone git@github.com:Kweeka1/movies-app.git
  cd movies-app
```

### Install

Install this project with:

```sh
  npm install
```

### Usage

To run the project, follow below instructions:

- Take a unique id from the involvement api:

```sh
curl -X POST https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/
  -H 'Content-Type: application/json'
```

- Create a new file in root directory called `.env` and insert below code:

```
INVOLVEMENT_KEY={KEY_YOU_GOT_FROM_CURL_COMMAND}
```

- Example

> INVOLVEMENT_KEY=0onO2DYOtlOD4dJgAQd1

- Now you can run the app by executing:

```sh
npm run start
```

### Run tests

To run tests, run the following command:

```sh
  npm run test
```


### Deployment

You can deploy this project using npm library called `gh-pages`:

- First install the library

```sh
npm install gh-pages --save-dev
```

- Then follow the instructions provided in their readme file to deploy the app

[GH Pages README](https://www.npmjs.com/package/gh-pages)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Mohamed Talbi**

- GitHub: [Mohamed Talbi](https://github.com/Kweeka1)

👤 **Sammy Ndabo**

- GitHub: [Sammy Ndabo](https://github.com/Ndaboom)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add loading skeleton to show item cards**
- [ ] **Add a search bar to search for a specific show**
- [ ] **Add category links in the header section**
- [ ] **Load progressively show's comments**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Kweeka1/movies-app/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for project inspiration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **What version of nodejs does this project works on?**

  - The project runs well with nodejs 14+. you might face some issues while running this project in lower versions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
