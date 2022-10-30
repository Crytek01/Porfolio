import { FunctionComponent } from 'react';
import { Card } from '../../components/common/card/card.component';
import {
  ArticleContainer,
  GridContainer,
  LinkWrapper,
  SectionContainer,
  SubTitle,
  Title,
} from './works.styles';

import slugify from 'slugify';

import { withStandartAnimaton } from '../../hocs/standart-animation.hoc';

import { useWorksService } from '../../contexts/works/works.service';

const WorksPage: FunctionComponent = () => {
  const worksService = useWorksService();

  return (
    <ArticleContainer>
      <header>
        <Title>My Works</Title>
      </header>

      <SectionContainer>
        <SubTitle>Javascript / TS / React</SubTitle>

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

export default withStandartAnimaton(WorksPage);
