import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Input = styled.input`
  width: 390px;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  outline: none;
  font-family: 'Open Sans';
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const SelectInput = styled.select`
  width: 390px;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  outline: none;
  font-family: 'Open Sans';
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  padding: 10px 30px;
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  border: 0px solid;
  color: #ffffff;
  cursor: pointer;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 340px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 320px;
    margin-bottom: 25px;
    margin-top: 20px;
  }
`

export const Text = styled.p`
  color: white;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: ${props => props.size}px;
`
export const Label = styled.label`
  color: #5a7184;
  font-size: 13px;
  font-family: 'Open Sans';
  margin-bottom: 2px;
  font-weight: 500;
`
export const Heading = styled.h1`
  color: #35469c;
  @media screen and (max-width: 768px) {
  }
`

export const Form = styled.form`
  @media screen and (max-width: 768px) {
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
