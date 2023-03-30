import illya from '../../images/illya.png';
import githubImage from '../../images/github-mark.svg';
import mailImage from '../../images/mail.svg';
import phoneImage from '../../images/phone.svg';
import { Wrapper, Info, Link, Text, Icon } from './About.styled';

export const About = () => {
  return (
    <Wrapper>
      <img src={illya} alt="illya" width="300px" height="400px" />
      <Info>
        <h1>Illya Bilyk</h1>
        <Link href="tel:+38067998">
          <Icon>
            <img src={phoneImage} alt="github" width="15px" height="15px" />
          </Icon>
          +38067998****
        </Link>
        <Link href="mailto:bilykillya.i@gmail.com">
          <Icon>
            <img src={mailImage} alt="github" width="15px" height="15px" />
          </Icon>
          bilykillya.i@gmail.com
        </Link>

        <Link href="https://github.com/Illya-Bilyk">
          <Icon>
            <img src={githubImage} alt="github" width="15px" height="15px" />
          </Icon>
          GitHub
        </Link>
        <Text>
          Date of birth: 27.12.1998
          <br />
          Nationality: Ukrainian
        </Text>
      </Info>
    </Wrapper>
  );
};
