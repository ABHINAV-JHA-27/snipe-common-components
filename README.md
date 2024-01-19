# Snipe React Components

Snipe React Components is a React component library built with Tailwind CSS, designed to streamline and enhance the development of applications. This library provides a collection of reusable and customizable UI components to accelerate the process of building the web apps.

## Features

- **Tailwind CSS Integration**: Leverages the power of Tailwind CSS for styling and theming your components.

- **Storybook Integration**: Utilizes Storybook for easy development, testing, and documentation of individual components.

- **Vite for Bundling**: Employs Vite as the bundler to optimize and bundle the library for production.

## Getting Started

### Installation

Install the Snipe React Components library via npm:

```bash
npm install snipe-common-components
```

And add this line at the top of the Main entry File (App.tsx / Main.tsx)

```bash
import "snipe-common-components/dist/style.css";
```

### Usage

Import and use the components in your React application:

```jsx
import React from 'react';
import { Button, Card, ... } from 'snipe-common-components';

const MyComponent = () => {
  return (
    <Card>
      <Button>Click me</Button>
      {/* More Snipe React Components here */}
    </Card>
  );
};

export default MyComponent;
```

## Development

To get started with development, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/snipe-ai/snipe-common-components.git
   ```

2. Install dependencies:

   ```bash
   cd snipe-common-components
   npm ci
   ```

3. Run the development environment with Storybook:

   ```bash
   npm run storybook
   ```

   Open your browser and navigate to [http://localhost:6006/](http://localhost:6006/) to view the Storybook.

4. Develop and test your components in Storybook.

## NPM Scripts

- **build**: Build the library using Rollup for production.

  ```bash
  npm run build
  ```

- **storybook**: Run Storybook in development mode.

  ```bash
  npm run storybook
  ```

- **build-storybook**: Build Storybook for production.

  ```bash
  npm run build-storybook
  ```
