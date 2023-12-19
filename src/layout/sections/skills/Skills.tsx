import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"code"} title={"HTML5"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                    <Skill iconId={"css"} title={"CSS3"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                    <Skill iconId={"react"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                    <Skill iconId={"typescript"} title={"Typescript"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                    <Skill iconId={"sc"} title={"Styled Components"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                    <Skill iconId={"figma"} title={"FIGMA"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur debitis dolorem, exercitationem, illo in maxime necessitatibus nesciunt nihil nulla officia pariatur perferendis porro provident reiciendis reprehenderit veritatis vitae voluptatum!"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #c58c4a;
  min-height: 100vh;
`