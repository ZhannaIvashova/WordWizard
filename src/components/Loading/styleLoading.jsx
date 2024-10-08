import { styled } from 'styled-components';

export const StyledLoadingContainer = styled.div `
  width:250px;
	height:10px;
  margin: 10rem auto;
	overflow:hidden;
	background-color: #15424d;
	border-radius:10px;
		-o-border-radius:10px;
		-ms-border-radius:10px;
		-webkit-border-radius:10px;
		-moz-border-radius:10px;

    @keyframes bounce_loadingProgressG{
    0%{
      margin-left:-250px;
    }

    100%{
      margin-left:250px;
    }
  }

  @-o-keyframes bounce_loadingProgressG{
    0%{
      margin-left:-250px;
    }

    100%{
      margin-left:250px;
    }
  }

  @-ms-keyframes bounce_loadingProgressG{
    0%{
      margin-left:-250px;
    }

    100%{
      margin-left:250px;
    }
  }

  @-webkit-keyframes bounce_loadingProgressG{
    0%{
      margin-left:-250px;
    }

    100%{
      margin-left:250px;
    }
  }

  @-moz-keyframes bounce_loadingProgressG{
    0%{
      margin-left:-250px;
    }

    100%{
      margin-left:250px;
    }
  }  
`
export const StyledLoading = styled.div `
  background-color:rgb(255,255,255);
    margin-top:0;
    margin-left:-250px;
    animation-name:bounce_loadingProgressG;
      -o-animation-name:bounce_loadingProgressG;
      -ms-animation-name:bounce_loadingProgressG;
      -webkit-animation-name:bounce_loadingProgressG;
      -moz-animation-name:bounce_loadingProgressG;
    animation-duration:1.5s;
      -o-animation-duration:1.5s;
      -ms-animation-duration:1.5s;
      -webkit-animation-duration:1.5s;
      -moz-animation-duration:1.5s;
    animation-iteration-count:infinite;
      -o-animation-iteration-count:infinite;
      -ms-animation-iteration-count:infinite;
      -webkit-animation-iteration-count:infinite;
      -moz-animation-iteration-count:infinite;
    animation-timing-function:linear;
      -o-animation-timing-function:linear;
      -ms-animation-timing-function:linear;
      -webkit-animation-timing-function:linear;
      -moz-animation-timing-function:linear;
    width:250px;
    height:19px;
`