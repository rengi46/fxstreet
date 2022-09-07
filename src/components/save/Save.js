import React from 'react'
import styled from 'styled-components/macro';

export const Save = () => {
    const [save,setSave] = React.useState(false)
    const handelClick = ()=>{
        setSave(!save)
    }
  return (
<RootWrapperSave onClick={handelClick}>
    {save?
    <SaveTextGreen>
        Saved!
    </SaveTextGreen>
    :
    <SaveText>
        Save
    </SaveText>}
    <Icons>
        {
            save?
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8887 0.625C11.3535 0.625 11.75 0.802734 12.0781 1.1582C12.4336 1.51367 12.6113 1.92383 12.6113 2.38867V16.375L6.5 13.75L0.388672 16.375V2.38867C0.388672 1.92383 0.552734 1.51367 0.880859 1.1582C1.23633 0.802734 1.64648 0.625 2.11133 0.625H10.8887Z" fill="#338473"/>
            </svg>
            :
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7249 13.75V2.38867H1.94751V13.75L6.33619 11.8223L10.7249 13.75ZM10.7249 0.625C11.1897 0.625 11.5862 0.802734 11.9143 1.1582C12.2698 1.51367 12.4475 1.92383 12.4475 2.38867V16.375L6.33619 13.75L0.224857 16.375V2.38867C0.224857 1.92383 0.38892 1.51367 0.717045 1.1582C1.07251 0.802734 1.48267 0.625 1.94751 0.625H10.7249Z" fill="#49494F"/>
            </svg>
        }
    </Icons>
</RootWrapperSave>

  )
}

const Icons = styled.span`
	text-overflow: ellipsis;
	font-size: 21px;
	font-family: "Material Icons", sans-serif;
	font-weight: 400;
	line-height: 17px;
	text-align: right;
	width: 21px;
	position: absolute;
	left: 0px;
	top: 1px;
`;

const RootWrapperSave = styled.div`
	width: 66px;
	height: 19px;
	position: absolute;
	left: 106px;
	top: 0px;
    cursor:pointer;
`;

const SaveText = styled.span`
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
	left: 26px;
	top: 0px;
	height: 19px;
`;
const SaveTextGreen = styled.span`
	color: #338473;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	width: 40px;
	min-height: 19px;
	position: absolute;
	left: 26px;
	top: 0px;
	height: 19px;
`;
