# portfolio :smiley:

This is a Single-Paged Website built with Javascript, CSS and LESS only. You can find details about me, including how I prepare myself to be a Frontend engineer.

For Backend component, please refer to this link <a href="https://github.com/wooiseong/portfolio-nodeJS-mySQL">portfolio-nodeJS-mySQL</a>

Demo here :point_down: <p></p>
<a href="https://portfolio-project-vercel-mocha.vercel.app/"><img src="https://img.shields.io/badge/link-portfolio-1?style=flat&logoColor=red&labelColor=%237B7B7B&color=%2301B468" alt="portfolio"></a>

## Project View
Desktop (1366px)

![image](https://i.ibb.co/42rLqHx/1-carousel.png)

You can click on this link to view more pictures :point_right::point_right::point_right: 
<a href="https://drive.google.com/drive/folders/1DU5doUDO_EY30UDBx9uaKE6SJuurSFGb?usp=drive_link">portfolio</a>

## Features
|          Sections               | Description                                                
| :--------------------------: | ------------------------------------------------------------ |
|    Navigation    | 1. Users can be navigated to desired sections by clicking the corresponding selectors <br>2. The selectors will be highlighted when the webpage is reached the corresponding sections
|      Header      | 1. There are three carousel items that will automatically played <br>2. The carousel is stopped during a mouse hover
|      About        | Users can change the contents by placing the mouse on the corresponding selectors 
|    Skills    | Battery icon levels represent the proficiency levels of skills
|      Projects        | Links to Github and demo websites are embedded in the images
|    Feedback    | 1. Users will get a warning message for invalid input format <br>2. The Backend response after submission will be conveyed to users via a toast 
|      Footer        | Contact informations are embedded in the icons

## Tools
1. Designs&nbsp; (&nbsp;CSS + LESS&nbsp;)
2. Building tool&nbsp; (&nbsp;Webpack&nbsp;) 
3. Validation&nbsp; (&nbsp;Regular Expression(Javascript)&nbsp;)
4. HTTP request&nbsp; (&nbsp;XMLHttpRequest&nbsp;)
5. Backend&nbsp; (&nbsp;NodeJS + Express + MySQL&nbsp;)
6. Deployment&nbsp; (&nbsp;Vercel&nbsp;)

## Bugs/Future plans
1. When the vieport is under 576px, the navigation bar will be hidden and a toggle icon is added. The navigation bar will pop up when the toggle icon is clicked. However, the icon is malfunctioned when the project is deployed on the Vercel. I will remove the icon and add navigation bar with smaller size in the future.
   
2. Due to budget consideration, I did not apply for a remote MySQL database. I wrote a simple nodeJS file as the response when the feedback is submitted. Please refer to this link <a href="https://github.com/wooiseong/portfolio-backend-on-vercel">portfolio-backend-on-vercel</a> <br><br> For nodeJS file connected to local mySQL database: <a href="https://github.com/wooiseong/portfolio-nodeJS-mySQL">portfolio-nodeJS-mySQL</a>

## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a> 

### Clone
```sh
git clone https://github.com/wooiseong/portfolio-project-vercel.git
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
