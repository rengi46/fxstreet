
import React from "react";
import styled from "styled-components/macro";
import logoMobil from "../../assets/img/FXStreet.png"
import logoDesk from "../../assets/img/FXStreet-premium.png"
import { NavMenuTop } from "../NavDesk/NavDesk";
import ball from "../../assets/iconsSVG/ball.svg"
import line from "../../assets/iconsSVG/Line.svg"


export const NavTopbar = ({mobil}) => {
	return (	
	<RootWrapperNavTopbar>
    <Rectangle/>
	{!mobil && <NavMenuTop/>}
  <FxStreetPremium>
     <img src={mobil?logoMobil:logoDesk}/>
  </FxStreetPremium>
  	<IconMenu>
  		<img src={mobil?ball:line}/>
    </IconMenu>
  	<IconTop>
  		<img src={mobil?ball:line}/>
    </IconTop>
  </RootWrapperNavTopbar>	
)
}

const RootWrapperNavTopbar = styled.div`
	left: 0px;
	top: 0px;
	border-radius: 0px;
	position: relative;
	@media (min-width: 1024px) {
		width:255px;
  	}
`;

const Rectangle = styled.div`
	background-color: rgb(36, 45, 56);
	height: 55px;
	width: 375px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	@media (min-width: 1024px) {
		width:255px;
		height: 1155px;
  	}
`;

const FxStreetPremium = styled.div`
	width: 137px;
	height: 26px;
	position: absolute;
	left: 18px;
	top: 14px;
	@media (min-width: 1024px) {
		left: 47px;
		top: 47px;
  	}
`;


const IconMenu = styled.span`
	color: rgb(221, 222, 223);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 298px;
	top: 21px;
	right: 59px;
	bottom: 16px;
	@media (min-width: 1024px) {
		left: 46px;
		top: 168px;
  	}
`;

const IconTop = styled.span`
	color: rgb(221, 222, 223);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: "Font Awesome 5 Pro", sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 337px;
	top: 21px;
	right: 20px;
	bottom: 16px;
	@media (min-width: 1024px) {
		left: 46px;
		top: 212px;
  	}
`;

