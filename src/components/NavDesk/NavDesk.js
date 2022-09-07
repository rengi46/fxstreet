import React from "react";
import styled from "styled-components/macro";
import ball from "../../assets/iconsSVG/ball.svg"

export function NavMenuTop () {
	return (	
	<RootWrapperNavMenuTop>
        <Background/>
        <Back>
            <Link_0002/>
            <BackIcon>
                <img src={ball}/>
            </BackIcon>
        </Back>
        <Separator/>
        <Notification>
            <img src={ball}/>
        </Notification>
        <SeparatorBlue/>
        <Help>
            <img src={ball}/>
        </Help>
        <Separator_0002/>
        <Link/>
        <Profile>
            <Link_0001/>
            <Profile_0001>
                <img src={ball}/>
            </Profile_0001>
        </Profile>
    
    </RootWrapperNavMenuTop>	
)
}

const RootWrapperNavMenuTop = styled.div`
	position: relative;
    left: 255px;
`;

const Background = styled.div`
	background-color: white;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
    width:1500px;
    height:65px;
`;

const Separator = styled.div`
	border-top: solid 1px rgb(236, 236, 241);
	position: absolute;
	left: 999px;
	top: 0px;
	right: 121px;
	bottom: 65px;
`;

const Notification = styled.span`
	color: rgb(140, 141, 145);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 955px;
	top: 24px;
	right: 212px;
	bottom: 23px;
`;

const SeparatorBlue = styled.div`
	border-top: solid 1px rgb(236, 236, 241);
	position: absolute;
	left: 931px;
	top: 0px;
	right: 189px;
	bottom: 65px;
`;

const Help = styled.span`
	color: rgb(140, 141, 145);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 888px;
	top: 24px;
	right: 279px;
	bottom: 23px;
`;

const Separator_0002 = styled.div`
	border-top: solid 1px rgb(236, 236, 241);
	position: absolute;
	left: 863px;
	top: 0px;
	right: 257px;
	bottom: 65px;
`;

const Link = styled.div`
	background-color: rgb(228, 135, 27);
	position: absolute;
	left: 700px;
	top: 28px;
	right: 349px;
	bottom: 27px;
`;

const Profile = styled.div`
	width: 119px;
	height: 18px;
	position: absolute;
	left: 1021px;
	top: 24px;
`;

const Link_0001 = styled.div`
	background-color: rgb(140, 141, 145);
	position: absolute;
	left: 28px;
	top: 4px;
	right: 0px;
	bottom: 4px;
`;

const Profile_0001 = styled.span`
	color: rgb(140, 141, 145);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 101px;
	bottom: 0px;
`;

const Back = styled.div`
	width: 162px;
	height: 18px;
	position: absolute;
	left: 26px;
	top: 24px;
`;

const Link_0002 = styled.div`
	background-color: rgb(48, 76, 112);
	position: absolute;
	left: 26px;
	top: 4px;
	right: 0px;
	bottom: 4px;
`;

const BackIcon = styled.span`
	color: rgb(48, 76, 112);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 144px;
	bottom: 0px;
`;
