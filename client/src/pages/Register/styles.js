import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h2`
  text-align: center;
  padding: 4rem;
  font-weight: 500;
`

export const Form = styled.form`
  background-color: #f2f2f2;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 0 4rem 0;

  label {
    font-size: 1.2rem;
  }

  input {
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
    margin: 0 0 1rem 0;
  }
`

export const Terms = styled.div`
  margin: 2rem 0;
  padding: 0.5rem 0;
  border-top: 1px solid #00000028;
  border-bottom: 1px solid #00000028;

  label {
    font-size: 0.8rem;
    text-align: justify;
  }

  a {
    color: #97B0E7;
  }

  input {
    margin: 0 0.5rem;
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: 0.6rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #39ff14;
    }
  }

`