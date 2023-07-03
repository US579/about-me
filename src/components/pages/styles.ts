import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PageContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-left:20%;
  margin-right:20%;
  place-items: center;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
  font-weight: 510;
`;

export const GreetingContent = styled.div`
  font-size: 2.75rem;
  line-height: 2.5rem;
  font-weight: 650;
  margin-top: 36px;
`;

export const TextContent = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-bottom: 10px;
    margin-top: 16px;
    font-family: 'Jost',sans-serif;
    
`;

export const AboutMeHeader = styled.div`
  margin-top: 40px;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
`;

export const AboutMeContent = styled.div`
  margin-top: 10px;
  line-height: 2;
  font-size: 1.125rem;
  margin-right: 8%;
  
`;

export const ImageWrapper = styled.img`
  float: left;
  margin-right: 20px;
  width: 200px;
  height: auto;
  margin-top: 20px;
`;
