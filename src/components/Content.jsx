import styled from "styled-components";
import { flexMixin, font, gray, tag_color } from "../styled/styled";


const StyledContent = styled.div`
  ${flexMixin({direction: 'column', align: 'flex-start', gap: '5px'})}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font({size: '12px'})}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font({size: '18px', $weight: 600})}
  }
  p {
    ${font({size: '12px'})}
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
