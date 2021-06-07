import React from "react";
import appRoutes from "../routes";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 50px;
  background: wheat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.p`
  color: white;
  margin-left: 20px;
  font-size: 30px;
  font-weight: bold;
  flex: 2;
  align-items: flex-start;
  justify-content: flex-start;
`;

const HeaderItemsWrapper = styled.div`
  flex: 10;
  align-items: center;
  justify-content: center;
`;

const HeaderItem = styled.button`
  margin-left: 5px;
`;

export default function Header({ navigateTo, userPermissions }) {
  return (
    <>
      <StyledHeader>
        <Title>Blog</Title>
        <HeaderItemsWrapper>
          {appRoutes
            .filter(({ menuLocation }) => menuLocation)
            .filter(
              ({ permissions }) =>
                permissions.some((permission) =>
                  userPermissions.includes(permission)
                ) || permissions.length === 0
            )

            .map(({ path, title }) => (
              <HeaderItem key={path} onClick={navigateTo({ path, args: null })}>
                {title}
              </HeaderItem>
            ))}
        </HeaderItemsWrapper>
      </StyledHeader>
    </>
  );
}
