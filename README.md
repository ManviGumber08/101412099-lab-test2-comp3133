# 101412099LabTest2Comp3133
# SpaceX Missions Tracker

## Overview
The SpaceX Missions Tracker is an Angular-based web application that allows users to view and filter past and upcoming SpaceX missions. It fetches data from the SpaceX API and provides a user-friendly interface to explore mission details.

## Features
- **Mission List:** Displays a list of SpaceX missions.
- **Mission Details:** Shows detailed information about a selected mission.
- **Filtering:** Allows users to filter missions based on launch year, success status, and other criteria.
- **Responsive UI:** Works on different screen sizes.
- **Standalone Components:** Utilizes Angular standalone components for a modular architecture.

## Technologies Used
- **Angular** (Latest Version)
- **TypeScript**
- **RxJS for API Calls**
- **Bootstrap for Styling**
- **SpaceX API** for fetching mission data

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- Angular CLI

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd 101412099-lab-test2-comp3133
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   ng serve
   ```
   The app should now be running at `http://localhost:4200/`.

## File Structure
```
/src/app
  ├── components/
  │   ├── missionlist/  # Mission list component
  │   ├── missiondetails/  # Mission details component
  ├── services/
  │   ├── spacex.service.ts  # Service for fetching SpaceX data
  ├── app.module.ts
  ├── app.component.ts
  ├── app.routes.ts
```

## Common Issues & Fixes
### 1. Standalone Component Import Issues
If you encounter an error like:
```
Component imports must be standalone components, directives, pipes, or must be NgModules.
```
Fix: Ensure that your `app.module.ts` is properly importing standalone components.

### 2. Cannot Find Module Error
If you see an error like:
```
Cannot find module './app/app.component' or its corresponding type declarations.ts(2307)
```
Fix: Check that the file paths are correct and update imports in `app.module.ts` accordingly.

### 3. Injection Token Error
```
No suitable injection token for parameter 'spacexService'
```
Fix: Ensure the service is provided using:
```ts
@Injectable({ providedIn: 'root' })
```
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:
![Screenshot 2025-04-02 172636](https://github.com/user-attachments/assets/786b78d5-f9c9-434f-93af-807306c50b4e)

```bash![Screenshot 2025-04-02 172713](https://github.com/user-attachments/assets/62a981b3-6fe4-4f5e-adf9-058e9a39a9f3)![Screenshot 2025-04-02 172713](https://github.com/user-attachments/assets/39206ce6-f51e-4589-b4b2-372c31ae4aa1)


ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
![Screenshot 2025-04-02 172656](https://github.com/user-attachments/assets/05b4f7ab-efb9-4d81-b9e6-442465dafb97)
![Screenshot 2025-04-02 111435](https://github.com/user-attachments/assets/40c71abd-0b9a-49d3-832f-406c09639a11)

```bash![Screenshot 2025-04-02 172636](https://github.com/user-attachments/assets/91d11180-c110-4172-af06-2750f655b6ea)

ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
