/* 박스내 아이콘 및 타이틀 나타내기  */

const issuesBoxDatasEvet = () => {

    const dataTitlesArray = {

       titles : [
         "장치별 LUN 용량","스토리지 풀용량 사용률 TOP5","일일 장애 빈도","하드웨어 과열 현황 TOP 10",
         "최근 1시간 API 호출건수 / 평균 응답시간", "평균 대역폭 (멀티라인)", "스토리지 풀용량 사용률 TOP5",
         "응답속도 Scatter", "장치 용량", "스토리지 금일 장애현황", "스토리지 성능 정보", "장비별 용량 할당 분포도",
         "스토리지 상태", "요일별 스위치 장애 현황", "데이터 수집 항목" , "시간별 평균 트래픽"
       ],
       
       icons : [

          "issuesIcon01.svg",
          "issuesIcon02.svg",
          "issuesIcon03.svg",
          "issuesIcon04.svg",
          "issuesIcon05.svg",
          "issuesIcon06.svg",
          "issuesIcon07.svg",
          "issuesIcon08.svg",
          "issuesIcon09.svg",
          "issuesIcon10.svg",
          "issuesIcon11.svg",
          "issuesIcon12.svg",
          "issuesIcon13.svg",
          "issuesIcon14.svg",
          "issuesIcon15.svg",
          "issuesIcon16.svg",
       ]
    }

    let issuesStateContBoxs = document.querySelector(".issuesStateContBoxs");
    let answers = '';

    for(let i = 0; i <= dataTitlesArray.titles.length - 1; i++){
      
       answers += `
        <div class="issuesStateCont">
             <div class="titles">
                <ul>
                   <span class="icons" style="background-image: url('/src/assets/media/issuesState/icons/${dataTitlesArray.icons[i]}')"></span><h5>${dataTitlesArray.titles[i]}</h5>
                </ul>
                <ul class="btnBoxs">
                  <button class="issueInfoBtn01"></button>
                  <button class="issueInfoBtn02"></button>
                </ul>
             </div>
             <div class="issuesStateDataWrap">
                <div class="issuesStateDataBoxs">
                  <div class="issuesStateDataLoading">
                     <div class="loadingSpinner"></div>
                     <p>데이터 로딩중...</p>
                  </div>
                </div>
             </div>
             <span class="gradientLines"></span>
          </div>`;
        
    }

    issuesStateContBoxs.innerHTML = answers;

    
}


issuesBoxDatasEvet();



/* 알람팝업끄기 이벤트 */

function issueAlarmCloseEvet(){

    const alarmPageWrapper = document.querySelector(".alarmPageWrapper");
    const issueAlarmCloseBtn = document.querySelector(".issueAlarmCloseBtn");

    if(issueAlarmCloseBtn && alarmPageWrapper){
       
      issueAlarmCloseBtn.addEventListener("click" , () => {
          
         console.log('clickEvet ')
         alarmPageWrapper.classList.add("active");

      })
    }
}

issueAlarmCloseEvet();