import React from "react";
import App from "../App";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";



describe('app tests', () => {
    beforeEach(() => render(<App />));  
  
    test('header', () => {
      const headerTitle = screen.getByText('Emoji Search'); //Başlık kısmının başarılı şekilde render edildiğini kontrol eden test
      expect(headerTitle).toBeInTheDocument;
    });
  
    test('listed', () => {
      const items = screen.getAllByText('Click to copy emoji');  // Uygulama ilk açıldığında emoji listesinin başarılı şekilde render edilidiğini kontrol eden test
      expect(items.length).toEqual(20);
    });
  
    test('filter', () => {  //filtreleme yapıldığında , listenin uygun şekilde yeniden render edildiğini kontrol eden test
      const emoji = '100';  
      const input = screen.getByRole('textbox'); 
      userEvent.type(input, emoji);
      expect(screen.getByText(emoji)).toBeInTheDocument;
    });
  
    test('copy', () => {
      const copytext = screen.getAllByText('Click to copy emoji'); // emojiye tıklandığında kopyalandığını kontrol eden test
      userEvent.click(copytext);
      const input = screen.getByRole('textbox');
      userEvent.paste(input, copytext)
      expect(input.length === 1);
    });
  });