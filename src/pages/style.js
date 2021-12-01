import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 80%; */
`

export const Input = styled.input`
  display: flex;
  width: 120%;
  height: 35px;
  background: #e6fff9;
  border-radius: 12px;
  border: 1px solid #99ffe7;
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 14px;

  @media screen and (max-width: 700px) {
    width: 86%;
  }
`
export const Span = styled.span`
  float: left;
  margin-left: -365px;
  margin-bottom: 10px;
  color: #00664e;
  font-size: 16px;

  @media screen and (max-width: 700px) {
    margin-left: -246px;
  }
`
export const Button = styled.button`
  width: 128%;

  background: #99ffe7;
  border: 1px solid #66ffdb;
  border-radius: 12px;
  cursor: pointer;
  height: 42px;
  color: #009975;
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 100px;

  :hover {
    background: #008062;
    transition: all ease 0.5s;
    color: white;
  }

  @media screen and (max-width: 700px) {
    width: 93%;
  }
`
