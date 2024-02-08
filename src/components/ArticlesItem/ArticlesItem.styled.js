import styled from 'styled-components';
import { theme } from 'constants/theme';

export const ArticlesItemWrapper = styled.li`
  width: 310px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 200px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 28px;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.black};
`;

export const Text = styled.p`
  margin-bottom: 28px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  color: ${theme.colors.black};
  text-align: start;
`;
