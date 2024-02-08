import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => (
  <LoaderWrapper>
    <ThreeDots
      height="80"
      width="80"
      radius={1}
      color="#1d2946"
      ariaLabel="puff-loading"
      visible={true}
    />
  </LoaderWrapper>
);
