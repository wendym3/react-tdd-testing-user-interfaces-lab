import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/your name/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'your-image-url');
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/your biography/i);
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to your GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole('link', {
    name: /github/i,
  });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/your-username');
});

test("displays a link to your LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', {
    name: /linkedin/i,
  });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-username');
});
