import React from "react";
import styled from 'styled-components/macro';

import clock from "../../assets/iconsSVG/clock.svg"
import search from "../../assets/iconsSVG/file-search.svg"
import emptyLike from "../../assets/iconsSVG/emptyLike.svg"
import emptySave from "../../assets/iconsSVG/emptySave.svg"
import optionPost from "../../assets/iconsSVG/optionPost.svg"


import avatar from "../../assets/img/Avatar.png"
import imageWeb from "../../assets/img/imageWebinar.png"
import { Like } from "../Like/Like";
import { Save } from "../save/Save";

export const Post = ({postInfo})=> {
	const {feed,subFeed,publicationTime,title,content,imageUrl,author} = postInfo
	const { name,companyName,imageUrl:imageAvatar } =author
	function extractContent(s) {
		var span = document.createElement('span');
		span.innerHTML = s;
		return span.textContent || span.innerText;
	  };

	function convertTime(timeNow){
		const time = new Date(timeNow)
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let month = time.getMonth()
		let date = time.getDate()
		let hour = time.getHours()
		let min = time.getMinutes()

		return `${monthNames[month]} ${date}, ${hour}:${min}` 
	}

	return (	
		<Conatiner>
		<Background>
			<Category>
				<Background_0001/>
				<Feed>
					{feed}
				</Feed>
				<SubFeed>
					{subFeed}
				</SubFeed>
				<FileSearch>
					<img src = {search}/>
				</FileSearch>
			</Category>
			<Time>
				<DateNow>
					{convertTime(publicationTime)}
				</DateNow>
				<IconClock>
					<img src={clock}/>
				</IconClock>
			</Time>
			<Head>
				<Author>
					<NameAuthor>
						{name}
					</NameAuthor>
					<SeparatorAuth>|</SeparatorAuth>
					<CompanyNameAuth>
						{companyName}
					</CompanyNameAuth>
				</Author>
				<Avatar src={imageAvatar} alt="image of Avatar"/>
				<TitlePost>
					{title}
				</TitlePost>
			</Head>
			<Separator/>
		
			<TextPost>
				{extractContent(content)}
			</TextPost>
			{imageUrl !== ""?
				<Image src={imageWeb} alt="image of Post"/>
			:null
			}
		
			<Options>
			<Like/>
			<Save/>
				<IconOptions>
					<img src ={optionPost}/>
				</IconOptions>
			</Options>
  		</Background>
  	</Conatiner>
	)
}

const Conatiner = styled.div`
	width: 344px;
	height: 507px;
	position: relative;
	margin-top:10px;
	@media (min-width: 1024px) {
    	width: 700px;
  	}
`;


const Background = styled.div`
	width: 344px;
	height: 507px;
	background-color: white;
	border: solid 1px rgb(221, 222, 223);
	border-radius: 4px;
	position: absolute;
	@media (min-width: 1024px) {
    	width: 700px;
  	}
`;

const Options = styled.div`
	width: 246px;
	height: 21px;
	position: absolute;
	left: 17px;
	top: 468px;
	@media (min-width: 1024px) {
    	left: 30px;
  	}
`;

const IconOptions = styled.span`
	color: rgb(140, 141, 145);
	text-overflow: ellipsis;
	font-size: 21px;
	font-family: "Material Icons", sans-serif;
	font-weight: 400;
	line-height: 21px;
	text-align: left;
	width: 21px;
	position: absolute;
	left: 225px;
	top: 0px;
`;

const Image = styled.img`
	width: 316px;
	height: 161px;
	object-fit: Container;
	position: absolute;
	left: 13px;
	top: 288px;
	@media (min-width: 1024px) {
		left: 30px;
		top:240px;
		height: 210px;
    	width: 640px;
  	}
`;

const TextPost = styled.span`
	text-overflow: ellipsis;
	font-size: 15px;
	font-weight: normal;
	line-height: 20px;
	text-align: left;
	width: 308px;
	min-height: 97px;
	position: absolute;
	left: 14px;
	top: 182px;
	height: 97px;
	@media (min-width: 1024px) {
		left: 30px;
    	width: 600px;
  	}
`;

const Head = styled.div`
	width: 344px;
	height: 170px;
	position: absolute;
	left: 0px;
	top: 0px;

`;

const Separator = styled.div`
	width: 344px;
	height: 0px;
	border-top: solid 1px rgb(236, 236, 241);
	position: absolute;
	left: 0px;
	top: 170px;
	@media (min-width: 1024px) {
		top: 117px;
		width: 700px;
  	}
`;

const TitlePost = styled.span`
	color: rgb(73, 73, 79);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 21px;
	text-align: left;
	width: 266px;
	min-height: 65px;
	position: absolute;
	left: 60px;
	top: 88px;
	height: 65px;
	@media (min-width: 1024px) {
		left: 100px;
		width: 400px;
  	}
`;

const Author = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 6px;
	width: 177px;
	height: 21px;
	box-sizing: border-box;
	position: absolute;
	left: 13px;
	top: 67px;
	@media (min-width: 1024px) {
		left: 100px;
  	}
`;

const NameAuthor = styled.span`
	color: rgb(163, 163, 168);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 17px;
	text-align: left;
	width: 152px;
	min-height: 21px;
`;

const SeparatorAuth = styled.span`
	color: rgb(163, 163, 168);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	width: 7px;
	min-height: 21px;
`;

const CompanyNameAuth = styled.span`
	color: rgb(163, 163, 168);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 17px;
	text-align: left;
	width: 70px;
	min-height: 21px;
`;

const Avatar = styled.img`
	width: 35px;
	height: 35px;
	object-fit: cover;
	position: absolute;
	left: 13px;
	top: 90px;
	@media (min-width: 1024px) {
		left: 30px;
		top: 70px;
  	}
`;

const Category = styled.div`
	width: 344px;
	height: 54px;
	position: absolute;
	left: 0px;
	top: 0px;
	@media (min-width: 1024px) {
		width: 700px;
		height: 54px;
  	}
`;

const Background_0001 = styled.div`
	width: 344px;
	height: 54px;
	background-color: rgb(236, 236, 241);
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 0px;
	border-bottom-left-radius: 0px;
	position: absolute;
	left: 0px;
	top: 0px;
	opacity: 0.5;
	@media (min-width: 1024px) {
		width: 700px;
		height: 54px;
  	}
`;

const Feed = styled.span`
	color: rgb(48, 76, 112);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 17px;
	text-align: left;
	width: 51px;
	min-height: 16px;
	position: absolute;
	left: 35px;
	top: 9px;
	height: 16px;
	@media (min-width: 1024px) {
		font-size: 17.6px;
		top:14px;
		left:45;
  	}
`;

const SubFeed = styled.span`
	color: rgb(117, 152, 196);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	width: 220px;
	min-height: 15px;
	position: absolute;
	left: 13px;
	top: 28px;
	height: 15px;
	@media (min-width: 1024px) {
		left: 143px;
		top:12px;
	}
`;

const FileSearch = styled.span`
	color: rgb(48, 76, 112);
	text-overflow: ellipsis;
	font-size: 15px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	text-transform: uppercase;
	width: 19px;
	position: absolute;
	left: 14px;
	top: 9px;
	@media (min-width: 1024px) {
		font-size: 17.6px;
		top:14px;
		left:45;
  	}
`;

const Time = styled.div`
	width: 103px;
	height: 31px;
	position: absolute;
	right: 20px;
	top: 17px;
`;

const DateNow = styled.span`
	color: rgb(73, 73, 79);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: right;
	width: 86px;
	min-height: 30px;
	position: absolute;
	left: 20px;
	top: 1px;
	height: 30px;
`;

const IconClock = styled.span`
	color: rgb(140, 141, 145);
	text-overflow: ellipsis;
	font-size: 15px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 300;
	text-align: left;
	text-transform: uppercase;
	width: 15px;
	min-height: 30px;
	position: absolute;
	left: 0px;
	top: 0px;
	height: 30px;
`;
