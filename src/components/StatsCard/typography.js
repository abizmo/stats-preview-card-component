import styled from 'styled-components'

export const Title = styled.h1`
  color: hsl(0, 0%, 100%);
  font-size: 1.7rem;
  margin: 0 0 16px;
  text-align: center;

  @media(min-width: 1440px) {
    font-size: 2.3rem;
    margin: 0 0 30px;
    max-width: 440px;
    text-align: left;
  }
`

export const Accent = styled.span`
  color: hsl(277, 64%, 61%);
`

export const Description = styled.p`
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 24px;
  margin: 0;
  text-align: center;

  @media(min-width: 1440px) {
    max-width: 392px;
    text-align: left;
  }
`

export const Qty = styled.h2`
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
  margin: 0 0 8px;
`

export const Text = styled.p`
  color: hsla(0, 0%, 100%, 0.6);
  font-family: "Lexend Deca";
  font-size: 0.9rem;
  margin: 0;
  text-transform: uppercase;
`
