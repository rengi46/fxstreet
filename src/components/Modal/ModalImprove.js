import React from "react";
import styled from "styled-components/macro";
import hide from "../../assets/iconsSVG/hide.svg"
import improve from "../../assets/iconsSVG/improve-my-feed.svg"

export function FilterTypesOfPosts () {
	return (
	<RootWrapperFilterTypesOfPosts>
        <Rectangle/>
        <ItemHide>
            <Hide>
                Hide
            </Hide>
            <Icons>
                <img src={hide} />
            </Icons>
        </ItemHide>
        <ItemImprove>
            <ImproveMyFeed>
                Improve my feed
            </ImproveMyFeed>
            <Icons>
                <img src={improve} />
            </Icons>
        </ItemImprove>
  </RootWrapperFilterTypesOfPosts>	
)
}

const RootWrapperFilterTypesOfPosts = styled.div`
	position:absolute;
    top:90px;
    left:32px;
	@media (min-width: 1024px) {
		left: 310px;
  	}
`;

const Rectangle = styled.div`
	width: 298px;
	height: 129px;
	box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.08);
	background-color: white;
	border: solid 1px rgb(221, 222, 223);
	position: absolute;
	left: 0px;
	top: 0px;
`;

const ItemHide = styled.div`
	width: 69px;
	height: 19px;
	position: absolute;
	left: 22px;
	top: 29px;
`;

const Hide = styled.span`
	color: rgb(73, 73, 79);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	width: 40px;
	min-height: 19px;
	position: absolute;
	left: 29px;
	top: 0px;
	height: 19px;
`;

const Icons = styled.span`
	color: rgb(73, 73, 79);
	text-overflow: ellipsis;
	font-size: 21px;
	font-family: "Material Icons", sans-serif;
	font-weight: 400;
	line-height: 17px;
	text-align: right;
	position: absolute;
	left: 0px;
	top: 1px;
`;

const ItemImprove = styled.div`
	width: 153px;
	height: 19px;
	position: absolute;
	left: 22px;
	top: 81px;
`;

const ImproveMyFeed = styled.span`
	color: rgb(73, 73, 79);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	width: 128px;
	min-height: 19px;
	position: absolute;
	left: 29px;
	top: 0px;
	height: 19px;
`;

