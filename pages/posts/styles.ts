import styled, { css } from "styled-components";

export const BlogListContainer = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 1rem 4rem;
`;

export const BlogListHeading = styled.h2`
  font-weight: 600;
  font-size: 42px;
  line-height: 1.25;
  margin: 0;
  color: ${(props) => props.theme.primary};
`;

export const ListViewTogglers = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ListViewToggle = styled.button<{ active: boolean }>`
  position: relative;
  border-radius: 6px;
  margin: 6px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  background: none;

  svg {
    height: 24px;
    width: 24px;
    opacity: ${(props) => (props.active ? `1` : `0.4`)};
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.border};
  }
`;

export const PostList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const BlogPostListing = styled.li``;

export const PostTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TileRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${(props) =>
    props.index % 2 === 0 ? `1fr 400px` : `400px 1fr`};
  grid-column-gap: 36px;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
`;

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
`;

export const PostLink = styled.a``;

export const PostListing = styled.a`
  margin: 24px 0;
  display: flex;

  img {
    width: 400px;
    height: 250px;
  }

  h2 {
    margin: 12px 0;
    align-self: flex-start;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.secondary};
  }

  img {
    border-radius: 12px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    width: 100%;
    justify-content: center;
  }

  :hover {
    transform: scale(1.01);
    transition: all 0.4s ease;
    h2 {
      color: ${(props) => props.theme.accent};
    }
    img: {
      box-shadow: ${(props) => props.theme.shadow};
    }
  }
`;

// export const PostCard = styled(Card)`
//   padding: 12px;
//   display: flex;
//   flex-direction: column;
//   box-shadow: ${(props) => props.theme.shadowLight};
//   height: 400px;

//   img {
//     height: 240px;
//   }

//   h2 {
//     margin: 12px 0;
//   }

//   p {
//     margin: 0;
//     font-size: 14px;
//     color: ${(props) => props.theme.secondary};
//     ${limitToTwoLines}
//   }

//   img {
//     border-radius: 12px;
//   }

//   :hover {
//     transform: scale(1.01);
//     transition: all 0.4s ease;
//   }
// `;

// export const PostContainer = styled(Card)`
//   width: 100%;
//   max-width: 1220px;
//   margin: 2rem auto;
//   padding: 1rem;
//   box-shadow: ${(props) => props.theme.shadow};

//   background: ${(props) => props.theme.gradient};

//   .hero {
//     height: 600px;
//     width: 100%;
//     border-radius: 12px;
//     position: relative;
//   }
// `;

export const PostContent = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shadowSingleLayer};

  border-radius: 20px;
  padding: 2rem;
  max-width: 1100px;
  margin: 2rem auto;
  margin-top: -100px;
  position: relative;

  .post-header {
    h1 {
      font-size: 54px;
      margin: 12px 0;
    }
    .description {
      font-size: 22px;
      line-height: 1.756;
      color: ${(props) => props.theme.secondary};
    }
  }

  article {
    line-height: 1.756;
    font-size: 18px;
  }
`;
