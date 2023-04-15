import React from "react";
import App from "../App";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";



describe('app tests', () => {
    beforeEach(() => render(<App />));
  
    test('header', () => {
      const headerTitle = screen.getByText('Emoji Search');
      expect(headerTitle).toBeInTheDocument;
    });
  
    test('listed', () => {
      const items = screen.getAllByText('Click to copy emoji');
      expect(items.length).toEqual(20);
    });
  
    test('filter', () => {
      const emoji = '100';
      const input = screen.getByRole('textbox');
      userEvent.type(input, emoji);
      expect(screen.getByText(emoji)).toBeInTheDocument;
    });
  
    test('copy', () => {
      const copytext = screen.getAllByText('Click to copy emoji');
      userEvent.click(copytext);
      const input = screen.getByRole('textbox');
      userEvent.paste(input, copytext)
      expect(input.length === 1);
    });
  });