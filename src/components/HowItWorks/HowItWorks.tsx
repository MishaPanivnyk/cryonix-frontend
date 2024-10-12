import { Container } from 'components/Container/Container';
import {
  HowItWorksContainer,
  HowItWorksList,
  HowItWorksListItem,
  HowItWorksListItemNumber,
  HowItWorksListItemText,
  HowItWorksTitle,
  HowItWorksListItemLarge,
  HowItWorksListItemLargeTop,
} from './HowItWorks.styled';
import sprite from 'img/sprite.svg';

export const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer>
      <Container>
        <HowItWorksTitle>How does it works?</HowItWorksTitle>
        <HowItWorksList>
          <HowItWorksListItem>
            <HowItWorksListItemNumber>1.</HowItWorksListItemNumber>
            <HowItWorksListItemText>
              Add a book to the library
            </HowItWorksListItemText>
            <svg className="icon-svg">
              <use href={sprite + '#icon-elipse-grey'} />
            </svg>
            <div className="semi-circle"></div>
          </HowItWorksListItem>
          <HowItWorksListItemLarge>
            <HowItWorksListItemNumber>2.</HowItWorksListItemNumber>
            <HowItWorksListItemText className="text-width">
              Choose the book you want
            </HowItWorksListItemText>
          </HowItWorksListItemLarge>
          <HowItWorksListItemLargeTop>
            <HowItWorksListItemNumber>3.</HowItWorksListItemNumber>
            <HowItWorksListItemText>
              Arrange an exchange.
            </HowItWorksListItemText>
            <svg className="icon-svg-rotate">
              <use href={sprite + '#icon-elipse-grey'} />
            </svg>
            <div className="semi-circle-rotate"></div>
          </HowItWorksListItemLargeTop>
        </HowItWorksList>
      </Container>
    </HowItWorksContainer>
  );
};
