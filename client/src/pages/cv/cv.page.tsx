import { FunctionComponent } from 'react';
import { ArticleContainer } from '@common/components/containers/article/article.component';
import { Spacer } from '@common/components/spacer/spacer.component';
import { withStandartAnimation } from '@common/hocs/standart-animation.hoc';

import {
  CVTag,
  DownloadLink,
  RecomendationContainer,
  SubTitle,
  Text,
  Title,
} from './cv.styles';

export const CVPage: FunctionComponent = () => {
  return (
    <ArticleContainer>
      <section>
        <Title>Work Experience</Title>
        <Spacer size={6} />

        <SubTitle>Multiplied Solutions (Jun 2022 - Present):</SubTitle>
        <Spacer size={4} />
        <Text>
          I Worked four months on an internal project about coding interviews
          and worked as a full-stack Node / React refactoring code, improved
          authentication backend and client-side, implemented real-time coding
          between the interviewers and the interviewee, and implemented code
          compilation of multiple languages for the interviewees.
          <br />
          <br />
          For the last few months, I started working with an external client as
          a Front-End Developer with HTML5/ CSS3 / JS and WordPress Gutenberg as
          CMS.
        </Text>
        <Spacer size={6} />

        <SubTitle>Accenture (Feb 2022 - Jun 2022):</SubTitle>
        <Spacer size={4} />
        <Text>
          I Worked for three months on two different client projects as a Front
          Developer with React and Angular technologies, refactoring code,
          fixing bugs, and developing new features.
          <br />
          <br />
          In the React project, I worked on developing a live quiz game app for
          multiple people connecting simultaneously between them with AWS
          Amplify as a backend.
          <br />
          <br />
          In the Angular project, I worked on fixing bugs and refactoring code.
        </Text>
        <Spacer size={6} />

        <SubTitle>Gorilla Logic (Jul 2021 - Dec 2021):</SubTitle>
        <Spacer size={3} />

        <RecomendationContainer>
          <CVTag>Recommendation Letter</CVTag>
          <DownloadLink
            href="/pdf/Recommendation Letter - Erick.pdf"
            download="Recommendation Letter - Erick"
          >
            Download
          </DownloadLink>
        </RecomendationContainer>
        <Spacer size={4} />

        <Text>
          I Worked for nearly six months as a Front End Developer Intern with a
          Scrum agile team on a complex Angular application about private stocks
          that makes management easy and intelligent for private companies.
          <br />
          <br />I Worked proactively fixing bugs at the start, then worked on
          taking small user stories and owning the whole process responsibility,
          and then started taking complex user stories working closely with the
          Quality Assurance team and Backend team.
        </Text>
      </section>
    </ArticleContainer>
  );
};

export default withStandartAnimation(CVPage);
