import { Spacer } from '@common/components/spacer/spacer.component';
import { withStandartAnimation } from '@common/hocs/standart-animation.hoc';
import { useMediaQuery } from '@common/hooks/media-query/use-media-query.hook';
import { Article } from '@layouts/article/article.component';

import {
  BiographyBoldText,
  BiographyItem,
  BiographyList,
  DeveloperRoles,
  SectionText,
  SectionTitle,
  Title,
} from './home.styles';

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 29em)');

  return (
    <Article>
      <header>
        <Title>Erick Badilla</Title>
        <Spacer size={3} />

        <DeveloperRoles>
          Software Developer{isMobile && <br />} (Javascript | Typescript |
          React | Node)
        </DeveloperRoles>
      </header>
      <Spacer size={6} />

      <section>
        <SectionTitle>About me:</SectionTitle>
        <Spacer size={3} />

        <SectionText>
          Hi, I am Erick Badilla. I am a pragmatic and self-taught React /
          Angular developer looking to work with a great team to solve
          challenging problems. I primarily focus on writing clean, elegant, and
          efficient code with wide-open proficiency in JavaScript, Typescript,
          HTML, and Sass.
        </SectionText>
      </section>
      <Spacer size={5} />

      <section>
        <SectionTitle>Biography:</SectionTitle>
        <Spacer size={3} />

        <BiographyList>
          <BiographyItem>
            <BiographyBoldText>2022</BiographyBoldText>
            <SectionText>
              Worked at Cecropia as a Software Developer consultant.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2022</BiographyBoldText>
            <SectionText>
              Worked at Accenture as a Web Developer Analyst consultant.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2021</BiographyBoldText>
            <SectionText>
              Completed studies at Universidad Nacional of Costa Rica.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2021</BiographyBoldText>
            <SectionText>
              Worked at Gorilla Logic as an Angular Developer intern for nearly
              six months.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2016</BiographyBoldText>
            <SectionText>
              Began majoring at Universidad Nacional of Costa Rica in
              Information Systems Engineering.
            </SectionText>
          </BiographyItem>
        </BiographyList>
      </section>
      <Spacer size={5} />

      <section>
        <SectionTitle>Achievements:</SectionTitle>
        <Spacer size={3} />

        <BiographyList>
          <BiographyItem>
            <SectionText>
              I created an SWI Prolog transpiler from Java to Kotlin alike
              Syntax in my major.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <SectionText>
              In one of my jobs, I worked and learned Angular on a complex
              Project about private equity management software.
            </SectionText>
          </BiographyItem>

          <BiographyItem>
            <SectionText>
              I Created an e-commerce website with React and Firebase.
            </SectionText>
          </BiographyItem>
        </BiographyList>
      </section>
    </Article>
  );
};

export default withStandartAnimation(HomePage);
