# project-doc-starter
Client's Project Documentation Starter

## What is this starter about?
This starter is a basic documentation barebone for your project. It is built with Eleventy and styled with standard markdown css for the sake of simplicity and ease of use.

## When to use this starter?
Use this starter if you need a quick way to keep notes of your meetings/workshops and generate a shared knowledge base for you and your client.

## How to install this starter on my computer?
Head over to the green button "Code" at the top of this page and choose "Donwload zip". Unzip the file anywhere you want this project to be saved on your computer. Open the folder into your IDE of choice, open your terminal and run ```npm install```. After that, you'll be all setup!

## How to use this starter?
There are 4 things you need to know:
- Everything you create will live in the ```_src``` folder and more specifically within the ```pages``` folder. The ```public``` folder only contains the static files used to display the result on your localhost or online. You can ignore all the other files and folders, they are boring config.
- The ```documentation.md``` file is the home page of your project. Use this page to structure and synthetize the knowledge you collect during the project.
- Create new markdown files in the ```meetings``` folder for each new meetings you have with the client and complete the content by following the defined file structure.
- Every document you can create should be written following the markdown syntax. Visit this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you need assistance. Eleventy also allows you to use html but use that only if needed. For example, you could need to add a container around your tables.

## How to see my work in a browser?
Open your terminal at the root your project and run ```npm run serve``` then head over to the address http://localhost:8080 in your browser of choice. Here it is! Anytime you make changes in your files, those will be reflected in your browser with auto-reload. To quit this the serving, go back to your terminal and do a Control + C. This will stop the current active command.

## How and where to publish my project documentation?
1. Define where the project will be hosted and what will be the root url.
2. Grab this url and go to the folder ```_data```, open the file globals.json and paste this url into the data entry ```url```. Save the file
3. Turn off the serve command if active in your terminal.
4. Open your terminal and run ```npm run build```. This command will generate a ready to publish ```public``` folder at the root of your project. Use this folder to publish it on your work/client dedicated server and make it available on the web. Password protect with FTP access if you need to. The starter includes by default a ```robots.txt``` file to make sure the project is not indexable on the web.

## Common mistakes
- Do not forget to set the ```url``` entry, from the ```_data/globals.json```, to ```""``` when you want to preview your project from your localhost.
- Use a valid date in your markdown meetings file.
- Use unique title for your meetings.