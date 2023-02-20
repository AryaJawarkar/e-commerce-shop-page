import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
    <div  className='flip-horizontal-bottom '>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;



.flip-horizontal-bottom {width:100px;
height:100px;

display: flex;
align-items: center;
background-color:black;
	        animation: flip-horizontal-bottom 0.4s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

}

@-webkit-keyframes flip-horizontal-bottom {
  0% {
            transform: rotateX(0);
  }
  100% {
            transform: rotateX(-180deg);
  }
}
@keyframes flip-horizontal-bottom {
  0% {
            transform: rotateX(0);
  }
  100% {
            transform: rotateX(-180deg);
  }
}

`

export default Loading
