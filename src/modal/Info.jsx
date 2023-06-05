import styled from "styled-components";

const Style = {
    Wrapper: styled.div`
      width: 100%;
      height: 100%;
      flex: 1;
    `,
    Article: styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    `,
    Subject: styled.div`
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      padding: 7vh 0;
    `,
    Content: styled.div`
      width: 50vw;
      padding: 5vh 0;
    `,
};

function Info() { 
  return (
    <>
      <Style.Wrapper>
        <Style.Article>
          <Style.Subject>정보약관</Style.Subject>
          <Style.Content>
              제 1조(목적)<br/>
              본 정보약관은 여행필독서(이하 "회사"라 함)이 제공하는 반려동물 커뮤니티 서비스(이하 "서비스"라 함)의 정보 제공과 관련된 조건 및 절차, 회원과 회사의 권리, 의무 등
              기본적인 사항을 명시합니다.<br/>
              <br/>
              제 2조(서비스 소개)<br/>
              1. 회사는 회원들이 반려동물과 관련된 정보를 공유하고 교류할 수 있는 커뮤니티 서비스를 제공합니다.<br/>
              2. 서비스는 회원들이 반려동물에 관한 경험, 조언, 사진, 동영상 등을 공유하고, 질문 및 답변을 주고받으며, 소통할 수 있는 플랫폼을 제공합니다.<br/>
              <br/>
              제 3조(정보 제공)<br/>
              1. 회사는 서비스를 통해 반려동물 관련 정보를 제공할 수 있습니다.<br/>
              2. 제공되는 정보는 다양한 주제에 대한 가이드, 건강 관리 방법, 훈련 팁, 이벤트 등의 정보를 포함할 수 있습니다.<br/>
              <br/>
              제 4조(회원의 의무)<br/>
              1. 회원은 서비스를 이용하면서 제공되는 정보를 정확하고 신뢰할 수 있는 자료로 활용해야 합니다.<br/>
              2. 회원은 커뮤니티 서비스를 이용할 때 다른 회원의 권리를 존중하고, 상호 간의 적절한 대화와 협력을 지켜야 합니다.<br/>
              3. 회원은 자신이 작성한 정보나 게시물에 대한 책임을 져야 하며, 타인의 권리를 침해하거나 불법적인 내용을 포함한 게시물을 작성해서는 안 됩니다.<br/>
              <br/>
              제 5조(면책 조항)<br/>
              1. 회사는 제공되는 정보의 정확성, 신뢰성, 안전성에 대해서는 어떠한 책임도 지지 않습니다.<br/>
              2. 회사는 회원 간의 커뮤니티 서비스를 통한 거래, 분쟁 등에 대해서는 개입하지 않으며, 그로 인한 손실이나 피해에 대해서도 어떠한 책임도 지지 않습니다.<br/>
              <br/>
              제 6조(분쟁의 해결)<br/>
              본 정보약관에 따른 분쟁에 대해서는 대한민국의 관련 법률에 따라 해결하여야 하며, 회사와 회원 간의 협의에 의해 원만히 해결되지 않는 경우에는 관할 법원의 전속관할로 합니다.<br/>
              <br/>
              제 7조(변경 및 공지)<br/>
              1. 회사는 필요한 경우 본 정보약관을 변경할 수 있습니다.<br/>
              2. 변경된 정보약관은 회원에게 공지하며, 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습ㄴ디ㅏ.<br/>
              <br/>
              제 8조(권리의 귀속)<br/>
              1. 회사가 서비스를 통해 제공하는 정보에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.<br/>
              2. 회원은 회사의 사전 승인없이 제공된 정보를 상업적인 목적으로 이용하거나 제 3자에게 제공하거나 공유해서는 안 됩니다.<br/>
              <br/>
              이상이 여행필독서 정보약관입니다.<br/>
              <br/>
          </Style.Content>
        </Style.Article>
      </Style.Wrapper>
    </>
  );
}
  
export default Info;