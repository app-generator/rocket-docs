---
title           : Rocket Generator
sidebar_position: 1
sidebar_label   : Intro
slug            : /
---
<!-- GOOGLE Stuff -->
<head>
    <meta name="google-site-verification" content="EtXV-RjJPvOzjyJL8MPdHiNQDZnoFBt-87HRdYuJJuE" />
</head>

Introducing **[Rocket Generator](https://app-generator.dev)**, a tool that aims to help developers generate starters on top of **Django**, a leading Python framework.  

## ✅ How it works

- Access the **[Django Generator](https://app-generator.dev/django/)** page (no account is required)
- Select the design: `Soft Dashboard`, `Tabler`, `Berry`, `Material Kit`
- Edit your DB Settings
- Edit the fields for the Extended User Model
  - Default: `name`, `phone`, `bio`
- You can add other models as well 
- Enable the API for each defined model 
- Enable Docker Support 

During the process, the user can visualize the app settings at the bottom of the **generator**.
Once confirmed, the platform triggers the generator and the current process can be tracked in the [Tasks](https://app-generator.dev/tasks) page. 

<br />

### Select Design 

![Rocket Generator - Select Design](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263528893-67e3ccb0-5c61-4f81-9da4-5fadc1845ad9.png)

<br />

### Edit Database (edit models) 

![Rocket Generator - Edit Model](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263529172-857897cd-e2a2-4706-9fbd-79a042c2646a.png)

<br />

### Confirm Action

![Rocket Generator - Generate the code](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263529369-ee9f5ed5-3313-4cdf-ae23-bfe188690f58.png)

### Action Confirmed 

![Rocket Generator - Opration is Confirmed](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263529871-ea38345b-47d8-48ca-a7ec-b4a8f330c7b7.png)

<br />

## ✅ Download the Code

The generator provides the code in the Tasks page where the new codebase can be downloaded as a ZIP archive or GitHub (public repository). 

![Rocket Generator - Download Sources.](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263530199-6c925635-3c98-41df-ab2c-474fcf9aa5ac.png)

At this point, the starter should work as expected. 

## ✅ Compile the Sources 

The use the product we need to follow the steps listed on the [README](https://github.com/appseed-projects4/django-soft-7b923a2f-1487-40ae-998b-87fef219648e/blob/main/README.md) ([sample](https://github.com/appseed-projects4/django-soft-7b923a2f-1487-40ae-998b-87fef219648e) generated with the above settings). 


### Clone the Sources 

```bash
$ git clone https://github.com/appseed-projects4/django-soft-7b923a2f-1487-40ae-998b-87fef219648e.git
```

### Install Dependencies

```bash
$ virtualenv env
$ source env/bin/activate
$ pip install -r requirements.txt
```

### Migrate DB

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

### Generate the API

```bash
$ python manage.py generate-api -f
```

### Start the APP 

```bash
$ python manage.py runserver
```

![Rocket Generator - Generated APP (Soft Design)](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263531088-0111d002-d460-47c3-ba3f-a0d2a0ee9f0c.png)

### Access the API 

![Rocket Generator - Generated APP, API View](https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/263531238-91d4b145-44c7-44b2-b0b9-04e93078da31.png)

<br />

- 👉 [Generate Django Apps](https://app-generator.dev/django/) using `Rocket Generator`
- 👉 Join the [Community](https://discord.gg/fZC6hup) and chat with the `support` team 
