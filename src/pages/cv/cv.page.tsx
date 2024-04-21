import { FunctionComponent } from 'react';
import { Spacer } from '@common/components/spacer/spacer.component';
import { withStandardAnimation } from '@common/hocs/standart-animation.hoc';
import { Article } from '@layouts/article/article.component';

import {
  CVTag,
  DownloadLink,
  RecommendationContainer,
  SubTitle,
  Text,
  Title,
} from './cv.styles';

export const CVPage: FunctionComponent = () => {
  return (
    <Article>
      <section>
        <Title>Work Experience</Title>
        <Spacer size={6} />

        <SubTitle>Multiplied Solutions (Jun 2022 - Present):</SubTitle>
        <Spacer size={4} />
        <Text>
          <li>
            Pioneered the introduction of cutting-edge features, seamlessly
            integrating a real-time coding editor powered by YJS technology for
            collaborative editing, and amalgamating diverse APIs to enrich its
            functionality.
          </li>

          <Spacer size={2} />

          <li>
            Proactively maintained the application's ongoing functionality and
            implemented updates to guarantee peak performance and user
            satisfaction.
          </li>

          <Spacer size={2} />

          <li>
            Led quality assurance initiatives, conducting code reviews and
            performance optimizations to maintain high standards.
          </li>

          <Spacer size={2} />

          <li>
            Leveraged expertise in JavaScript, TypeScript, React, Axios, and
            Express to amplify application functionality and user experience.
          </li>

          <Spacer size={2} />

          <li>Integrated diverse APIs.</li>

          <Spacer size={2} />

          <li>
            Developed and maintained front-end web applications, ensuring
            responsive design and adherence to design specifications.
          </li>
        </Text>
        <Spacer size={6} />

        <SubTitle>Accenture (Feb 2022 - Jun 2022):</SubTitle>
        <Spacer size={4} />
        <Text>
          <li>
            Played a key role in the creation of a captivating real-time React
            quiz app game, leveraging AWS Amplify to enhance its functionality
            and utilizing S3 with CloudFront to improve loading times for
            diverse users.
          </li>

          <Spacer size={2} />

          <li>
            Resolved bugs and delivered continuous maintenance and support for a
            dynamic Angular codebase, ensuring optimal performance and
            stability.
          </li>
        </Text>
        <Spacer size={6} />

        <SubTitle>Gorilla Logic (Jul 2021 - Dec 2021):</SubTitle>
        <Spacer size={3} />

        <RecommendationContainer>
          <CVTag>Recommendation Letter</CVTag>
          <DownloadLink to="/pdf/Recommendation Letter - Erick.pdf" isExternal>
            Download
          </DownloadLink>
        </RecommendationContainer>
        <Spacer size={4} />

        <Text>
          <li>
            Played a substantial role in the development of a sophisticated
            Angular application tailored for private companies' stock
            management.
          </li>

          <Spacer size={2} />

          <li>
            Took ownership of complex user stories and spearheaded collaboration
            with Quality Assurance and Backend teams.
          </li>

          <Spacer size={2} />

          <li>
            Enhanced platform usability and efficiency for effective stock
            management.
          </li>

          <Spacer size={2} />

          <li>
            Contributed to test automation using Cypress to ensure robustness
            and reliability.
          </li>
        </Text>
      </section>
    </Article>
  );
};

export default withStandardAnimation(CVPage);
