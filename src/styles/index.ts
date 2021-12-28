import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a{
      background-color: #f5f1ea;

      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side { 
        width: 50%;
        height: 100%;

        .right-image {
          /* background: #7dbb91; */
          background-image: url('https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
          width: 100%;
          height: 100%;
        }
      }
    }

    .b{
      background-color: #582534;
      width: 100%;
      height: 100%;
    }
    .c {
      background-color: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background-color: green;
  }

  .third {
    background-color: yellow;
  }
  .fourth {
    background-color: gray;
  }
`;

export const Section = styled.div`
  position: relative;

`;
export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;