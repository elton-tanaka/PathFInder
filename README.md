# PathFinder Project Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
   - [API](#api)
   - [Frontend App](#frontend-app)
3. [Installation](#installation)
   - [API](#api-installation)
   - [Frontend App](#frontend-app-installation)
4. [Usage](#usage)
   - [API](#api-usage)
   - [Frontend App](#frontend-app-usage)
5. [License](#license)

## 1. Introduction <a name="introduction"></a>

PathFinder is a project designed within 6 days. It consists of two separate components: an API and a frontend web application. This documentation will guide you through the installation and usage of both components.

## 2. Project Overview <a name="project-overview"></a>

### API <a name="api"></a>

The API component of PathFinder is responsible for handling requests related to path finding and navigation. It serves as the backend for the frontend application. The API is built using the .NET framework.

### Frontend App <a name="frontend-app"></a>

The frontend application of PathFinder is a web-based user interface SPA. It communicates with the API to retrieve and display path information. The frontend app is built using React and utilizes npm for package management.

## 3. Installation <a name="installation"></a>

Before you can use PathFinder, you need to install and set up both the API and the frontend application.

### API Installation <a name="api-installation"></a>

To install and run the API, follow these steps:

1. Ensure you have [.NET](https://dotnet.microsoft.com/download) installed on your system.
2. Navigate to the `/api/` directory in your project.
3. Open a terminal or command prompt.
4. Run the following commands:

```shell
dotnet build
dotnet run
```

The API should now be running, and you can access it at the specified endpoint.

### Frontend App Installation <a name="frontend-app-installation"></a>

To install and run the frontend application, follow these steps:

1. Navigate to the `/pathfinder-app/` directory in your project.
2. Open a terminal or command prompt.
3. Run the following commands:

```shell
npm install
npm run dev
```

The frontend application should now be running, and you can access it in your web browser.

## 4. Usage <a name="usage"></a>

### API Usage <a name="api-usage"></a>

The API provides endpoints for various path finding and navigation functionalities. Refer to the API documentation for details on how to make requests and interact with the API on http://localhost:5182/swagger/index.html .

### Frontend App Usage <a name="frontend-app-usage"></a>

To use the frontend application, open a web browser and navigate to the URL where it is running (typically `http://localhost:5173`). You can then use the user interface to perform path finding and navigation tasks.

## 5. License <a name="license"></a>

PathFinder is released under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in accordance with the terms of the license.
