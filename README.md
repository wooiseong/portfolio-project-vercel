# portfolio- Xiong's here ! :wave:	

Thus is a website where you can search hostels located in Kaohsiung, Taiwan. Moreover, you can register a new account and login to upload your profile picture and change your password.

Demo here :point_down: <p></p>
<a href="https://portfolio-project-vercel-mocha.vercel.app/"><img src="https://img.shields.io/badge/link-KSH.hostel-1?style=flat&logoColor=red&labelColor=%237B7B7B&color=%23FFDA6A" alt="KSH.hostel"></a>

## Project View
Desktop (1366px)

![image](https://i.ibb.co/42rLqHx/1-carousel.png)

You can click on this link to view more pictures :point_right::point_right::point_right: 
<a href="https://drive.google.com/drive/folders/1DU5doUDO_EY30UDBx9uaKE6SJuurSFGb?usp=drive_link">portfolio</a>

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
5. Backend&nbsp; (&nbsp;External API&nbsp;)
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

