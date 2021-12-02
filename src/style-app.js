import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin-left: 100px;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`
export const MapContainer = styled.div`
  display: flex;
  // flexDirection: 'column',
  align-items: center;
  justify-content: center;
  background: #e6e6e6;
  width: 450px;
  border-radius: 25px;
  height: 88%;
  margin-bottom: 120px;

  @media screen and (max-width: 760px) {
    width: 270px;
    margin-left: -80px;
  }
`

export const Button = styled.button`
  width: 96%;

  background: #99ffe7;
  border: 1px solid #66ffdb;
  border-radius: 12px;
  cursor: pointer;
  height: 32px;
  color: #009975;
  font-size: 14px;
  font-family: 'Roboto';
  /* margin-bottom: 100px; */
  /* margin-top: 30px; */

  :hover {
    background: #008062;
    transition: all ease 0.5s;
    color: white;
  }

  @media screen and (max-width: 700px) {
    width: 93%;
  }
`
