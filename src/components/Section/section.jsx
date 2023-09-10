import PropTypes from 'prop-types';
import React from 'react';
import { StyledSection, Title } from './section.styled';

const SectionComponent = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

SectionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionComponent;
