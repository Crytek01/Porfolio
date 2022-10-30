import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tag } from '../../../../components/common/tag/tag.component';
import {
  IWork,
  useWorksService,
} from '../../../../contexts/works/works.service';
import { withEaseInAnimation } from '../../../../hocs/left-right-animation';
import {
  sanitizeHTMLText,
  separateText,
} from '../../../../utils/text/text.util';
import {
  Article,
  Description,
  ExternalLink,
  ImageContainer,
  KeyPoint,
  KeyPointsContainer,
  LogoImage,
  Point,
  PreviewImage,
  PreviewTitle,
} from './work-detail.styles';

const WorkDetail = () => {
  const { name } = useParams();
  const worksService = useWorksService();

  const [work] = useState<IWork | undefined>(worksService.findWork(name));

  return (
    <Article>
      <ImageContainer>
        <source
          srcSet={work?.logoImage.basic.source}
          type={work?.logoImage.basic.type}
        />
        <source
          srcSet={work?.logoImage.optimized.source}
          type={work?.logoImage.optimized.type}
        />
        <LogoImage src={work?.logoImage.basic.source} />
      </ImageContainer>

      <Description
        dangerouslySetInnerHTML={{
          __html: sanitizeHTMLText(work?.details ?? ''),
        }}
      ></Description>

      <KeyPointsContainer>
        <KeyPoint>
          <Tag>Link</Tag>
          <ExternalLink href={work?.githubUrl}>Github</ExternalLink>
        </KeyPoint>

        <KeyPoint>
          <Tag>Platform</Tag>
          <Point>{work?.platform}</Point>
        </KeyPoint>

        <KeyPoint>
          <Tag>Stack</Tag>
          <Point>{separateText(work?.technologyStack, '|')}</Point>
        </KeyPoint>
      </KeyPointsContainer>

      <PreviewTitle>Preview Images: </PreviewTitle>

      {work?.previewImage.map((image) => (
        <ImageContainer key={image.basic.source}>
          <source srcSet={image.basic.source} type={image.basic.type} />
          <source srcSet={image.optimized.source} type={image.optimized.type} />
          <PreviewImage src={image.basic.source} />
        </ImageContainer>
      ))}
    </Article>
  );
};

export const WorkDetailPage = withEaseInAnimation(WorkDetail);
