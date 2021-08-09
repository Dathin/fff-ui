// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { RenderOptions, RenderResult, render as reactRender } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';


function render(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'>,
  ): RenderResult {
    return reactRender(
      <ThemeProvider theme={theme}>
        ui
      </ThemeProvider>
      , options);
  }

export * from '@testing-library/react'
export { render } 
