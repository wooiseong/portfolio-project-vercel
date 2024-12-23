# Portfolio :smiley:

This is a website built with Javascript, CSS and LESS only. You can find details about me, including how I prepare my self to be a Frontend engineer.

Demo here :point_down: <p></p>
<a href="https://portfolio-project-vercel-mocha.vercel.app/"><img src="https://img.shields.io/badge/link-portfolio-1?style=flat&logoColor=red&labelColor=%237B7B7B&color=%2301B468" alt="portfolio"></a>

## Project View
Desktop (1366px)

![image](https://i.ibb.co/42rLqHx/1-carousel.png)

You can click on this link to view more pictures :point_right::point_right::point_right: 
<a href="https://drive.google.com/drive/folders/1DU5doUDO_EY30UDBx9uaKE6SJuurSFGb?usp=drive_link">Portfolio</a>

## Features
|          Components               | Description                                                  | URL                  |
| :--------------------------: | ------------------------------------------------------------ | -------------------- |
|    Home    | 1. A searchBar is provided for users to view hostels in Kaohsiung <br>2. Users can obtain more details about interested hostels by clicking the toggle icon | /      |
|      Login       | 1. Users can switch login and register form <br>2. Users will receive warning if the input is not valid <br>3. Users will be notified about the result of form submission| /login.html         |
|      Account        | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | /account.html         |


## Tools
1. Designs&nbsp; (&nbsp;Bootstrap + Sass&nbsp;)
2. Building tool&nbsp; (&nbsp;Webpack&nbsp;) 
3. Storage&nbsp; (&nbsp;localStorage&nbsp;)
4. Validation&nbsp; (&nbsp;Bootstrap validator + jQuery validate&nbsp;)
5. HTTP request&nbsp; (&nbsp;Axios&nbsp;)
6. Backend&nbsp; (&nbsp;External API&nbsp;)
7. Deployment&nbsp; (&nbsp;Vercel&nbsp;)

## External API
 * Hostel - <a href="https://api.kcg.gov.tw/ServiceList/Detail/0696fe30-a7b7-42f7-9458-f4716138109d#/collapseFour">Kaohsiung City Government's open data platform</a>
 * Login and Registration - <a href="https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-22284011">黑馬程序員 Big Event</a> 

## Bugs/Future plans
1. After users log in, the navigation bar default logo should change to users's uploaded profile picture. When the page is refresh, it takes 1-2 seconds to execute the change. The desired effect should be: once users log in, the logo should be replaced and the users' profile pictures are displayed directly.

2. If users cancel the previews many times, the requests with cancelled previews are still sent to the server. I think I do not clear the temporary storage of the previews when FileReader.onload is executed, or I do not terminate this asynchronous operation. To temporary solve this problem, the page is refresh if users cancel a preview. 

## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a> 

### Clone
```sh
git clone https://github.com/wooiseong/KSH-project.git
```

### Install pnpm packages
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Contact
* <a href= "mailto:wooiseongseong96@gmail.com">Email:  &nbsp;wooiseongseong96@gmail.com</a>
