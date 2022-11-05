import { FunctionComponent } from 'react';
import slugify from 'slugify';

import { Card } from '../../common/components/card/card.component';
import { ArticleContainer } from '../../common/components/containers/article/article.component';
import { Spacer } from '../../common/components/spacer/spacer.component';
import { withStandartAnimation } from '../../common/hocs/standart-animation.hoc';
import { useWorksService } from '../../contexts/works/works.service';

import {
  GridContainer,
  LinkWrapper,
  SectionContainer,
  SubTitle,
  Title,
} from './works.styles';

const WorksPage: FunctionComponent = () => {
  const worksService = useWorksService();

  return (
    <ArticleContainer>
      <header>
        <Title>My Works</Title>
      </header>

      <Spacer size={5} />

      <SectionContainer>
        <SubTitle>Javascript / TS / React</SubTitle>

        <Spacer size={6} />

        <GridContainer>
          {worksService.works.map(({ title, ...props }) => (
            <LinkWrapper
              key={title}
              to={slugify(title, {
                lower: true,
              })}
            >
              <Card title={title} {...props} />
            </LinkWrapper>
          ))}
        </GridContainer>
      </SectionContainer>
    </ArticleContainer>
  );
};

export default withStandartAnimation(WorksPage);
