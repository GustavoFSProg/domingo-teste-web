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
    width: 320px;
    margin-left: -80px;
  }
`
