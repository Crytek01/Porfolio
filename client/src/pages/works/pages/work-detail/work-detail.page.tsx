import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink } from '@common/components/external-link/external-link.comonent';
import { Spacer } from '@common/components/spacer/spacer.component';
import { Tag } from '@common/components/tag/tag.component';
import { withEaseInAnimation } from '@common/hocs/left-right-animation';
import { separateText } from '@common/utils/text/text.util';

import {
  IWork,
  useWorksService,
} from '../../../../contexts/works/works.service';

import {
  Article,
  Description,
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
      <LogoImage
        alt="A Project Logo image"
        src={work?.logoImage.basic.source}
        type={work?.logoImage.basic.type}
        optimizedSrc={work?.logoImage.optimized.source}
        optimizedType={work?.logoImage.optimized.type}
      />

      <Spacer size={5} />

      <Description innerHtml={work?.details} />
      <Spacer size={6} />

      <KeyPointsContainer>
        <KeyPoint>
          <Tag>Link</Tag>
          <Point>
            <ExternalLink href={work?.githubUrl}>Github</ExternalLink>
          </Point>

          {work?.websiteUrl ? (
            <Point>
              <ExternalLink href={work?.websiteUrl}>Website</ExternalLink>
            </Point>
          ) : null}
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
      <Spacer size={6} />

      <PreviewTitle>Preview Images: </PreviewTitle>
      <Spacer size={3} />

      {work?.previewImage.map((image) => (
        <ImageContainer key={image.basic.source}>
          <source srcSet={image.optimized.source} type={image.optimized.type} />
          <source srcSet={image.basic.source} type={image.basic.type} />

          <PreviewImage
            src={image.basic.source}
            alt="A project preview image"
          />
        </ImageContainer>
      ))}
    </Article>
  );
};

export const WorkDetailPage = withEaseInAnimation(WorkDetail);
