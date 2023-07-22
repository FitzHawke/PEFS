<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FitzHawke/PEFS">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/60191328/192440570-2840fb0f-8644-4584-95ff-61448ea91cb1.png">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/60191328/192440563-fce148eb-6bd9-44c8-ac41-f4264b9ec73c.png">
      <img alt="PEFS LOGO" src="">
    </picture>
  </a>

  <p align="center">
    A fitness tracking app to help along the way of getting that beach bod we all want 💪
    <br />
    <a href="https://github.com/FitzHawke/PEFS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://pefson.cyclic.app/">View Demo</a>
    ·
    <a href="https://github.com/FitzHawke/PEFS/issues">Report Bug</a>
    ·
    <a href="https://github.com/FitzHawke/PEFS/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![PEFS-Screenshot](https://user-images.githubusercontent.com/60191328/197449931-1fc473e5-c923-47ed-80fb-318faf751674.png)

[PEFS.webm](https://github.com/FitzHawke/PEFS/assets/60191328/4bafc1b4-315f-4f58-a5e8-a4b22c2c1bb7)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Built With

- React
- Redux
- MongoDB
- Node.js
- Express.js
- TailwindCSS
- DaisyUI
- Chartsjs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

#### Prerequisites

- Make a free account with [MongoDB](https://www.mongodb.com/) and create an empty database.

#### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FitzHawke/PEFS.git
   ```
2. Install NPM packages in root directory and frontend
   ```sh
   npm install
   cd frontend
   npm install
   ```
3. Back to root and copy or rename `.env.example` to `.env`
   ```sh
   cd ..
   cp .env.example .env
   ```
4. Fill out .env with your mongoDB URI
5. Start the dev server from the root directory
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

#### Deployment

1.  Build the frontend
    ```sh
    npm run build
    ```
2.  Change the `NODE_ENV` in .env to production.
3.  Run the server from the root directory
    ```sh
    npm run start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Switch Auth over to using passport
- [x] Add biking tracking
- [x] Implement edit functionality
- [x] Graphs for each dashboard type
- [x] Add demo user
- [ ] Graphs for each type on main dashboard

#### Long Term Plans

- [ ] Add Strength workout tracking
- [ ] Add Weight tracking
- [ ] Settings Page to specify theme and units
- [ ] Re-implement components to reduce code duplication
- [ ] Utilize optimistic rendering to reduce api calls
- [ ] Implement caching to reduce database calls

See the [open issues](https://github.com/FitzHawke/PEFS/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[@FitzHawke](https://twitter.com/FitzHawke)

Project Link: [https://github.com/FitzHawke/PEFS](https://github.com/FitzHawke/PEFS)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/FitzHawke/PEFS.svg?style=for-the-badge
[contributors-url]: https://github.com/FitzHawke/PEFS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FitzHawke/PEFS.svg?style=for-the-badge
[forks-url]: https://github.com/FitzHawke/PEFS/network/members
[stars-shield]: https://img.shields.io/github/stars/FitzHawke/PEFS.svg?style=for-the-badge
[stars-url]: https://github.com/FitzHawke/PEFS/stargazers
[issues-shield]: https://img.shields.io/github/issues/FitzHawke/PEFS.svg?style=for-the-badge
[issues-url]: https://github.com/FitzHawke/PEFS/issues
[license-shield]: https://img.shields.io/github/license/FitzHawke/PEFS.svg?style=for-the-badge
[license-url]: https://github.com/FitzHawke/PEFS/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/will-featherston
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
