# Progressive Web Applications (PWA): Text Editor

Welcome to the README for the Progressive Web Applications (PWA) Challenge: Text Editor project! This project serves as an impressive demonstration of the concepts learned throughout the course, showcasing your ability to build a robust text editor that runs directly in the browser. Not only does it meet the criteria for a PWA, but it also implements various data persistence techniques for reliable offline functionality.

## Project Overview

The goal of this project was to create a single-page text editor application that fulfills the following criteria:

- Implements PWA criteria for offline functionality.
- Features data persistence techniques, utilizing IndexedDB for storage redundancy.
- Utilizes the `idb` package, a lightweight wrapper around the IndexedDB API.
- Deploys the application to Render following the Render Deployment Guide.

## User Story and Acceptance Criteria

### User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

### Acceptance Criteria

1. Upon opening the application in an editor, the client-server folder structure should be visible.
2. Running `npm run start` from the root directory should start up the backend and serve the client.
3. JavaScript files should be bundled using webpack, ensuring the application runs smoothly.
4. Webpack plugins should generate an HTML file, service worker, and a manifest file.
5. The text editor should function seamlessly even with next-gen JavaScript.
6. IndexedDB should immediately create a database storage upon opening the text editor.
7. Content entered in the text editor should be saved with IndexedDB when clicking off the DOM window.
8. Content should be retrieved from IndexedDB when reopening the text editor.
9. Clicking the Install button should download the web application as an icon on the desktop.
10. The web application should have a registered service worker using Workbox.
11. Static assets should be precached upon loading along with subsequent pages and static assets.
12. Proper build scripts for a webpack application should be implemented for deployment to Render.

## Getting Started

To get started with the project, follow these steps:

1. Clone the starter code repository provided in the course.
2. Set up your own repository with the starter code, ensuring not to fork the original repository.
3. Review the project requirements and user stories to understand the objectives.
4. Implement the necessary features and functionalities using the provided guidelines and tools.
5. Test the application thoroughly to ensure it meets all acceptance criteria.
6. Deploy the application to Render using the Render Deployment Guide.

## Deployed Link
https://pwa-text-editor-q97q.onrender.com/

## Resources and Dependencies

- [idb package](https://www.npmjs.com/package/idb): Lightweight wrapper around the IndexedDB API.
- [Render Deployment Guide](https://render.com/docs/deploy-nodejs-app): Guide for deploying Node.js applications to Render.

## Conclusion

Congratulations on completing the Progressive Web Applications (PWA) Challenge: Text Editor project! This project demonstrates your proficiency in building robust web applications with offline capabilities and data persistence. Feel free to showcase this project to potential employers as a testament to your skills and knowledge in web development.
