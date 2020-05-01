import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { ExpansionPanelActions } from '@material-ui/core';



test('should show home page', () => {
  const { getByText, getByTestId } = render(<App />)
  const navTitle = getByTestId('homepageTitle')
  expect(navTitle).toBeInDocument
})

test('should be in myplayers page', () => {
  const { getByTestId } = render(<App />)
  const linkToMyPlayers = getByTestId('MPbutton')
  fireEvent.click(linkToMyPlayers)
  const myplayertitle = getByTestId('myplayerTitle')
  expect(myplayertitle).toBeInDocument
})

test('should go back to home page', () => {
  const { getByTestId } = render(<App />)
  const linkToHome = getByTestId('backHomefromMP')
  fireEvent.click(linkToHome)
  const homeTitle = getByTestId('homepageTitle')
  expect(homeTitle).toBeInDocument
})

//ga bisa test details karena button hanya muncul sesduah di fecth



// test('should be in player info',()=>{
//   const {getByTestId} = render(<App />)
//   const linkdetail
// })




// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
