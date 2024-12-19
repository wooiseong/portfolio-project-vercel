# portfolio- Xiong's here ! :wave:	

Want to know about me? This website contains my personal information, including my preparation to be a frontend enginner. It is built with CSS and Javascript,without any framework or plugins (frontend part).  

Demo here :point_down: <p></p>
<a href="https://vercel.com/wooiseongs-projects/portfolio-project-vercel"><img src="https://img.shields.io/badge/link-KSH.hostel-1?style=flat&logoColor=red&labelColor=%237B7B7B&color=%2301b468" alt="KSH.hostel"></a>

## Project View
Desktop (1366px)

![image](https://i.ibb.co/42rLqHx/1-carousel.png)

You can click on this link to view more pictures :point_right::point_right::point_right: 
<a href="https://drive.google.com/drive/folders/1DU5doUDO_EY30UDBx9uaKE6SJuurSFGb?usp=drive_link">portfolio</a>

## Features
|          Section               | Description                                                  
| :--------------------------: | ------------------------------------------------------------ | 
|    Navigation    | 1. d <br>2. Users can obtain more details about interested hostels by clicking the toggle icon |
|      Header       | 1. Users can switch login and register form <br>2. Users will receive warning if the input is not valid <br>3. Users will be notified about the result of form submission| 
|      Personal        | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account |
|      Skills        | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 
|       Soft skills       | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 
|       Projects       | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 
|       Resume       | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 
|       Feedback       | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 
|       Footer       | 1. Section A - Users can preview, cancel and upload profile picture (type: ico, jpg, jpeg, png) <br>2. Section B - Users can change password for their account | 


## Tools
1. Designs&nbsp; (&nbsp;CSS + Less&nbsp;)
2. Building tool&nbsp; (&nbsp;Webpack&nbsp;) 
3. Validation&nbsp; (&nbsp;Regular Expression(Javascript)&nbsp;)
5. Backend&nbsp; (&nbsp;NodeJS + mySql&nbsp;)
6. Deployment&nbsp; (&nbsp;Vercel&nbsp;)

## Bugs/Future plans
1. After users log in, the navigation bar default logo should change to users's uploaded profile picture. When the page is refresh, it takes 1-2 seconds to execute the change. The desired effect should be: once users log in, the logo should be replaced and the users' profile pictures are displayed directly.

2. If users cancel the previews many times, the requests with cancelled previews are still sent to the server. I think I do not clear the temporary storage of the previews when FileReader.onload is executed, or I do not terminate this asynchronous operation. To temporary solve this problem, the page is refresh if users cancel a preview. 

## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a> 

### Clone
```sh
git clone https://github.com/wooiseong/portfolio-project-vercel.git
```

