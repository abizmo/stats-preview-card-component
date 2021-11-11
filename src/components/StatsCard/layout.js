import styled from 'styled-components'

export const Container = styled.div`
  background-color: hsl(244, 38%, 16%);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 327px;
  width: 100%;

  @media(min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 446px;
    max-width: 1110px;
  }
`

export const Media = styled.div`
  background: url('/images/image-header-mobile.jpg'), hsl(277, 64%, 61%);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  border-radius: 6px 6px 0 0;
  height: 240px;
  width: 100%;

  @media(min-width: 1440px) {
    background: url('/images/image-header-desktop.jpg'), hsl(277, 64%, 61%);
    background-size: contain;
    border-radius: 0px 6px 6px 0;
    height: 100%;
    width: 540px;
  }
`

export const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-size: 15px;
  padding: 40px 32px;

  @media(min-width: 1440px) {
    align-items: flex-start;
    max-width: 570px;
    padding: 72px 0 0 72px;
  }
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media(min-width: 1440px) {
    flex-direction: row;
    margin-top: 64px;
  }
`

export const Stat = styled.div`
  margin-bottom: 36px;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media(min-width: 1440px) {
    margin: 0 60px 0 0;
    text-align: left;

    &:last-child {
      margin: 0;
    }
  }
`
