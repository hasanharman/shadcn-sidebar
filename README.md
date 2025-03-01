# Shadcn Sidebar Builder

A powerful, customizable sidebar builder that allows you to create, style, and export production-ready sidebar components for your Next.js applications. Built with React, Next.js, and shadcn/ui, this tool provides an intuitive interface for developers to create beautiful, responsive sidebars.

## Table of Contents

- [Shadcn Sidebar Builder](#shadcn-sidebar-builder)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Live Demo](#live-demo)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Creating a Sidebar](#creating-a-sidebar)
    - [Customizing Content](#customizing-content)
    - [Exporting Your Sidebar](#exporting-your-sidebar)
  - [Components](#components)
  - [Configuration Options](#configuration-options)
    - [Layout Settings](#layout-settings)
    - [Behavior Settings](#behavior-settings)
    - [Structure Settings](#structure-settings)
    - [Style Settings](#style-settings)
  - [Content Customization](#content-customization)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- **Visual Sidebar Builder**: Design your sidebar with a real-time preview of how it will look in your application.
- **Comprehensive Customization**: Configure position, width, collapse behavior, and many other aspects of your sidebar.
- **Dynamic Content Editing**: Easily edit navigation items, projects, teams, and user profiles directly in the builder.
- **Code Generation**: Export production-ready code that you can directly use in your Next.js projects.
- **Responsive Design**: Create sidebars that work seamlessly across desktop and mobile devices.
- **Shadcn/UI Integration**: Leverages the beautiful, accessible components from the shadcn/ui library.

## Live Demo

Check out the live demo of the Sidebar Builder [here](https://shadcn-sidebar-phi.vercel.app/).

## Installation

To get started with Sidebar Builder, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/hasanharman/shadcn-sidebar.git
   ```

2. Navigate into the project directory:
   ```bash
   cd shadcn-sidebar
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Creating a Sidebar

1. **Access the Builder**: Once the app is running, you'll see the sidebar builder interface with a live preview.
2. **Configure Settings**: Use the settings dialog to customize the sidebar's appearance and behavior.
3. **Edit Content**: Use the content editor to customize navigation items, projects, teams, and user profile.
4. **Preview**: See your changes in real-time in the preview area.

### Customizing Content

1. Click the "Edit Sidebar Content" button to open the content editor.
2. Navigate through the tabs to edit user profile, teams, navigation items, and projects.
3. Add, remove, or modify items as needed.
4. Click "Done" to apply your changes and see them in the preview.

### Exporting Your Sidebar

1. Switch to the "Code" tab to view the generated code.
2. Browse through the different files that make up your sidebar component.
3. Copy individual files or download all files as a ZIP.
4. Follow the installation instructions in the README to integrate the sidebar into your project.

## Components

The Sidebar Builder generates several key components:

- **AppSidebar**: The main sidebar component that brings everything together.
- **NavMain**: Handles the main navigation items with collapsible sub-items.
- **NavProjects**: Displays project links with dropdown actions.
- **NavUser**: Shows the user profile with a dropdown menu.
- **TeamSwitcher**: Allows switching between different teams.

## Configuration Options

### Layout Settings

- **Position**: Choose between left and right sidebar positioning.
- **Variant**: Select from sidebar, floating, or inset variants.
- **Width**: Set custom width for desktop and mobile/collapsed states.

### Behavior Settings

- **Collapse Behavior**: Choose between offcanvas (slide in/out), icon (collapse to icons), or none.
- **Default Open**: Set whether the sidebar should be open by default.
- **Keyboard Shortcuts**: Enable/disable keyboard shortcuts for toggling the sidebar.

### Structure Settings

- **Show Header**: Toggle visibility of the team switcher header.
- **Show Footer**: Toggle visibility of the user profile footer.
- **Show Icons**: Toggle visibility of icons in navigation items.
- **Show Section Labels**: Toggle visibility of section labels.

### Style Settings

- **Menu Button Size**: Choose between default, small, or large button sizes.

## Content Customization

The sidebar content can be fully customized:

- **User Profile**: Edit name, email, and avatar URL.
- **Teams**: Add, remove, or edit teams with custom names, icons, and plans.
- **Navigation**: Create hierarchical navigation with main items and sub-items.
- **Projects**: Define project links with custom names and icons.

## Keyboard Shortcuts

When enabled, the sidebar can be toggled with:
- **Mac**: Cmd + B
- **Windows/Linux**: Ctrl + B

## Contributing

Contributions are welcome! If you would like to contribute to Sidebar Builder, please follow these steps:

1. **Fork the Repository**: Click on the "Fork" button at the top right corner of the repository page.
2. **Create a Branch**: 
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make Changes**: Implement your feature or fix.
4. **Commit Changes**: 
   ```bash
   git commit -m "Add a feature"
   ```
5. **Push Changes**: 
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Create a Pull Request**: Go to the original repository and create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for production.
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS.
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons.
- [Zustand](https://github.com/pmndrs/zustand) - A small, fast, and scalable state management solution.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.

---

Built with ❤️ by [Hasan Harman](https://github.com/hasanharman)

