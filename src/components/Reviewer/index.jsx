import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainReviewer = styled.div`
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin-right: 1rem;
`;

const ReviewerImage = styled.img`
  flex: 2;
  border-radius: 50%;
  width: auto;
  max-height: 100px;
  height: auto;
  margin-bottom: 1em;
`;

const Name = styled.h4`
  flex: 1;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.85);
`;

const Company = styled.h5`
  flex: 1;
  color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  flex: 2;
`;

const Description = styled.p``;

function Reviewer({ photo, name, company, description }) {
  return (
    <>
      <MainReviewer>
        <ImgContainer>
          <ReviewerImage src={photo} />
          <Name>{name}</Name>
          <Company>{company}</Company>
        </ImgContainer>
        <Content>
          <Description>{description}</Description>
        </Content>
      </MainReviewer>
    </>
  );
}

Reviewer.propTypes = {
  photo: PropTypes.string.isRequire,
  name: PropTypes.string.isRequire,
  company: PropTypes.string.isRequire,
  description: PropTypes.string.isRequire
};

export default Reviewer;
