import { withStandartAnimaton } from '../../hocs/standart-animation.hoc';
import { useMediaQuery } from '../../hooks/media-query/use-media-query.hook';
import {
  ArchivementText,
  ArticleContainer,
  BiographyBoldText,
  BiographyItem,
  BiographyList,
  BiographyText,
  DeveloperRoles,
  SectionContainer,
  SectionText,
  SectionTitle,
  Title,
} from './home.styles';

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 29em)');

  return (
    <ArticleContainer>
      <header>
        <Title>Erick Badilla</Title>

        <DeveloperRoles>
          Software Developer{isMobile && <br />} (Javascript | Typescript |
          React | Node)
        </DeveloperRoles>
      </header>

      <SectionContainer>
        <SectionTitle>About me:</SectionTitle>
        <SectionText>
          Hi I am Erick Badilla. I am a pragmatic and self-taught React /
          Angular developer looking to work with a great team to solve
          challenging problems. I primarily focus on writing clean, elegant, and
          efficient code with wide-open proficiency in JavaScript, Typescript,
          HTML, and Sass
        </SectionText>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Biography:</SectionTitle>

        <BiographyList>
          <BiographyItem>
            <BiographyBoldText>2022</BiographyBoldText>
            <BiographyText>
              Worked in Cecropia as Software Developer.
            </BiographyText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2022</BiographyBoldText>
            <BiographyText>
              Worked in Accenture as Web Developer Analyst.
            </BiographyText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2021</BiographyBoldText>
            <BiographyText>
              Completed studies at Universidad Nacional of Costa Rica.
            </BiographyText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2021</BiographyBoldText>
            <BiographyText>
              Entered as an Intern in Gorilla Logic as an Angular Developer for
              6 months.
            </BiographyText>
          </BiographyItem>

          <BiographyItem>
            <BiographyBoldText>2016</BiographyBoldText>
            <BiographyText>
              Began studies at Universidad Nacional of Costa Rica in Information
              Systems Engineering.
            </BiographyText>
          </BiographyItem>
        </BiographyList>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Archivements:</SectionTitle>

        <BiographyList>
          <BiographyItem>
            <ArchivementText>
              I Created a SWI Prolog transpiler from Java to Kotlin alike syntax
              in College.
            </ArchivementText>
          </BiographyItem>

          <BiographyItem>
            <ArchivementText>
              In one of my jobs I worked and learned Angular in a large project
              of private equity management software.
            </ArchivementText>
          </BiographyItem>

          <BiographyItem>
            <ArchivementText>
              Created a e-commerce website with React and Firebase.
            </ArchivementText>
          </BiographyItem>
        </BiographyList>
      </SectionContainer>
    </ArticleContainer>
  );
};

export default withStandartAnimaton(HomePage);
