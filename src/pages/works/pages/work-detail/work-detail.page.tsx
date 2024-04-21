import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomLink } from '@common/components/custom-link/custom-link.component';
import { Spacer } from '@common/components/spacer/spacer.component';
import { Tag } from '@common/components/tag/tag.component';
import { withEaseInAnimation } from '@common/hocs/left-right-animation.hoc';
import { separateText } from '@common/utils/text/text.util';

import {
  IWork,
  useWorksService,
} from '../../../../contexts/works/works.service';

import {
  Description,
  KeyPoint,
  KeyPointsContainer,
  LogoImage,
  Point,
  PreviewImage,
  PreviewTitle,
  StyledArticle,
} from './work-detail.styles';

export const WorkDetailPage = () => {
  const { name } = useParams();
  const worksService = useWorksService();

  const [work] = useState<IWork | undefined>(worksService.findWork(name));

  const shouldRenderPreviewImages = work && work.previewImage.length > 0;

  return (
    <StyledArticle>
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
            <CustomLink
              isExternal
              isHoverBoxEnabled={false}
              to={work?.githubUrl}
            >
              Github
            </CustomLink>
          </Point>

          {work?.websiteUrl ? (
            <Point>
              <CustomLink
                isExternal
                isHoverBoxEnabled={false}
                to={work?.websiteUrl}
              >
                Website
              </CustomLink>
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

      {shouldRenderPreviewImages ? (
        <>
          <PreviewTitle>Preview Images: </PreviewTitle>
          <Spacer size={3} />
        </>
      ) : null}

      {work?.previewImage.map((image) => (
        <PreviewImage
          key={image.basic.source}
          alt="A project preview image"
          src={image.basic.source}
          type={image.basic.type}
          optimizedSrc={image.optimized.source}
          optimizedType={image.optimized.type}
          scaleOnHover
          scaleOnHoverModifier={1.2}
        />
      ))}
    </StyledArticle>
  );
};

export default withEaseInAnimation(WorkDetailPage);
