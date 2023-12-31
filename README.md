# Duplicate Photo Check Bot

Duplicate Photo Check Bot is an application developed in .NET Core 7, designed to help users find and manage duplicate photos in their folders. It consists of an API that allows users to specify a directory and then checks for duplicate photos in that directory, moving duplicates to a separate folder. Additionally, the project includes a user-friendly user interface built in Angular 16.

![Imagem](https://github.com/omatheusribeiro/duplicate-photo-check/assets/48257781/61a695ad-a152-4cfe-9a90-3660ebd7f84f)

## Folder Structure

The project follows a clean architecture to ensure a clear separation of responsibilities. The folder structure is organized as follows:

- **duplicate-photo-check.Api**: This is the presentation layer that handles HTTP requests and interacts with clients. The API exposes the necessary endpoints to interact with the duplicate photo checking functionality.

- **duplicate-photo-check.Application**: In this layer, application logic and services responsible for coordinating application actions reside. Here, the duplicate photo checking is implemented.

- **duplicate-photo-check.Front**: This is the front-end part of the application built in Angular 16. It provides a user-friendly interface for users to interact with the API and view the results of duplicate photo checking.

## How to Use

To use Duplicate Photo Check, follow these steps:

1. Clone this repository to your local environment.

2. Ensure you have .NET Core 7 and Angular 16 installed on your machine.

3. Navigate to the `duplicate-photo-check.Api` folder and run the .NET Core application to start the API:

   ```
   dotnet run
   ```

4. Navigate to the `duplicate-photo-check.Front` folder and start the Angular front-end:

   ```
   ng serve
   ```

5. Access the user interface in your browser and use the API to check and manage duplicate photos.

## Contribution

If you wish to contribute to the Duplicate Photo Check project, feel free to open issues or submit pull requests. Your help is greatly appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
