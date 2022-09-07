import React from 'react'
import styled from 'styled-components/macro';

export const Like = () => {
    const [like,setLike] = React.useState(false)
    const handelClick = ()=>{
        setLike(!like)
    }
  return (
<RootWrapperLike onClick={handelClick}>
    {like?
    <LikeTExtRed>
        Liked!
    </LikeTExtRed>
    :<LikeText>
        Like
    </LikeText>
    }
    <Icons>
    {like?<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 16.6621L8.22852 15.5137C6.7793 14.2012 5.72656 13.2305 5.07031 12.6016C4.41406 11.9727 3.67578 11.1934 2.85547 10.2637C2.0625 9.33398 1.51562 8.5 1.21484 7.76172C0.914062 6.99609 0.763672 6.2168 0.763672 5.42383C0.763672 4.08398 1.21484 2.94922 2.11719 2.01953C3.04688 1.08984 4.19531 0.625 5.5625 0.625C7.14844 0.625 8.46094 1.24023 9.5 2.4707C10.5391 1.24023 11.8516 0.625 13.4375 0.625C14.8047 0.625 15.9395 1.08984 16.8418 2.01953C17.7715 2.94922 18.2363 4.08398 18.2363 5.42383C18.2363 6.49023 17.8809 7.59766 17.1699 8.74609C16.459 9.89453 15.6797 10.8926 14.832 11.7402C14.0117 12.5879 12.6582 13.8594 10.7715 15.5547L9.5 16.6621Z" fill="#D25746"/>
</svg>:<svg width="19" height="17" viewBox="0 0 19 17">
<path d="M9.80445 14.2422C11.1169 13.0664 12.0877 12.1777 12.7166 11.5762C13.3455 10.9746 14.0291 10.2637 14.7673 9.44336C15.5056 8.62305 16.0115 7.89844 16.2849 7.26953C16.5857 6.64063 16.7361 6.02539 16.7361 5.42383C16.7361 4.54883 16.4353 3.82422 15.8337 3.25C15.2595 2.67578 14.5349 2.38867 13.6599 2.38867C12.9763 2.38867 12.3337 2.58008 11.7322 2.96289C11.158 3.3457 10.7615 3.83789 10.5427 4.43945H8.9021C8.68335 3.83789 8.2732 3.3457 7.67163 2.96289C7.09742 2.58008 6.46851 2.38867 5.78492 2.38867C4.90992 2.38867 4.17163 2.67578 3.57007 3.25C2.99585 3.82422 2.70874 4.54883 2.70874 5.42383C2.70874 6.02539 2.84546 6.64063 3.1189 7.26953C3.41968 7.89844 3.93921 8.62305 4.67749 9.44336C5.41578 10.2637 6.09937 10.9746 6.72828 11.5762C7.35718 12.1777 8.32788 13.0664 9.64038 14.2422L9.72242 14.3242L9.80445 14.2422ZM13.6599 0.625C15.0271 0.625 16.1619 1.08984 17.0642 2.01953C17.9939 2.94922 18.4587 4.08398 18.4587 5.42383C18.4587 6.2168 18.3084 6.99609 18.0076 7.76172C17.7068 8.5 17.1462 9.33398 16.3259 10.2637C15.533 11.1934 14.8084 11.9727 14.1521 12.6016C13.4959 13.2305 12.4431 14.2012 10.9939 15.5137L9.72242 16.6621L8.45093 15.5547C6.56421 13.8594 5.19703 12.5879 4.34937 11.7402C3.52906 10.8926 2.76343 9.89453 2.05249 8.74609C1.34156 7.59766 0.986088 6.49023 0.986088 5.42383C0.986088 4.08398 1.43726 2.94922 2.3396 2.01953C3.26929 1.08984 4.41773 0.625 5.78492 0.625C7.37085 0.625 8.68335 1.24023 9.72242 2.4707C10.7615 1.24023 12.074 0.625 13.6599 0.625Z" />
</svg>}
    </Icons>
</RootWrapperLike>
)
}


const RootWrapperLike = styled.div`
	width: 66px;
	height: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
    cursor:pointer;
    svg:hover{
        color:red;
    }
`;

const LikeText = styled.span`
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
const LikeTExtRed = styled.span`
	color: red;
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
	&:hover{
		cursor:pointer;
	}
`;