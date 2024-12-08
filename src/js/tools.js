/* 저장하기 옆 토글버튼 이벤트*/

const toolsToggleEvet = () => {

    const toggleBtn = document.querySelector(".toggleBtn");
    const toggleCircle = document.querySelector(".toggleBtn span");

    toggleBtn.addEventListener("click" , () => {
       
       if(toggleCircle.classList.contains("active")){
          return   toggleBtn.classList.remove("active"),
                   toggleCircle.classList.remove("active");
       }
        toggleBtn.classList.add("active");
        toggleCircle.classList.add("active");
    })
}

toolsToggleEvet();


/* 툴박스 버튼 이벤트  */
const toolsOpenBtnEvet = () => {

   const toolsAllBtns = document.querySelectorAll(".toolsBtnArrange .toolsBtn");
   const toolsHiddenBoxs = document.querySelectorAll(".toolsHiddenBoxs");

   toolsAllBtns.forEach((btns, idx) => {
       
       btns.addEventListener("click", () => {

          if(btns.classList.contains("active")){
             return btns.classList.remove("active"),
             toolsHiddenBoxs.forEach((otherBoxs) => {otherBoxs.classList.remove("active")})
          }

           toolsAllBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")})
           toolsHiddenBoxs.forEach((otherBoxs) => {otherBoxs.classList.remove("active")})
           btns.classList.add("active");

           if(idx === 2 || idx === 8){ //hidden박스가 숨겨진 버튼들 클릭시, 사이드버튼리스트 나타나게하기

            const nextSiblings = btns.nextElementSibling;

            if(nextSiblings.classList.contains("active")){
              return nextSiblings.classList.remove("active");
            }
           nextSiblings.classList.add("active");
        }

          

       })
   })

   //사이드박스내 버튼 클릭시, 박스 및 버튼 불빛 사라지게 하기 
   const toolsHiddenBtns = document.querySelectorAll(".toolsBtnArrange .toolsHidden");

   if(toolsHiddenBtns){
   toolsHiddenBtns.forEach((btn) => {
      btn.addEventListener("click" , () => {

         toolsAllBtns.forEach((btns) => {btns.classList.remove("active")})
         toolsHiddenBoxs.forEach((boxs) => boxs.classList.remove("active"));
         
      })
   })
  }

}

toolsOpenBtnEvet();



/* 자원목록, 옵션 버튼 클릭시 박스오픈하기 */

const toolsBoxOpenEvet = () => {

    const toolsToggleBtns = document.querySelectorAll(".toolsOptionsSection .toggleBoxies button");
    const listOptionsSpace = document.querySelectorAll(".listOptionsSpace");

    toolsToggleBtns[0].classList.add("active");
    listOptionsSpace[0].classList.add("active");

    toolsToggleBtns.forEach((btn,indx) => {
        btn.addEventListener("click" , () => {

          if(btn.classList.contains("active")){
             return btn.classList.remove("active"),
             listOptionsSpace[indx].classList.remove("active");
          }

          toolsToggleBtns.forEach((otherBtn) => { otherBtn.classList.remove("active")});
          listOptionsSpace.forEach((otherBoxs) => { otherBoxs.classList.remove("active")});
          btn.classList.add("active");
          listOptionsSpace[indx].classList.add("active");

        })
    })
}

toolsBoxOpenEvet();

/* 툴셀렉박스 오픈 이벤트 */

const toolsSelectBoxEvet = () => {

     
   let toolListHiddenSelectBox01 = document.getElementById("toolListHiddenSelectBox01");
   let toolListHiddenSelectBox02 = document.getElementById("toolListHiddenSelectBox02");
   let toolListHiddenSelectBox03 = document.getElementById("toolListHiddenSelectBox03");
   let toolListHiddenSelectBox04 = document.getElementById("toolListHiddenSelectBox04");
   let toolSelectTitleBtns = document.querySelectorAll(".toolListSelectsTitleBtn");
   let toolSelectList = document.querySelectorAll(".toolListSelectList");
   let toolSelectListMembers = document.querySelectorAll(".toolListSelectListMember");

     //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

         let lists = '';
         let typeLists = '';
         let fontLists = '';
      
         if(toolListHiddenSelectBox01.children){
         for(let i = 0; i <= toolListHiddenSelectBox01.children.length - 1; i++){
 
            lists += `<li><p>${ toolListHiddenSelectBox01.children[i].value}</p></li>`;
            toolSelectTitleBtns[0].textContent = toolListHiddenSelectBox01.children[0].value;
         }
         toolSelectListMembers[0].innerHTML = lists;
 
        }

        if(toolListHiddenSelectBox02.children){

          const nextElementSiblings = toolSelectTitleBtns[1].children[0];
          nextElementSiblings.textContent = `${toolListHiddenSelectBox02.children.length}`;

        }

        if(toolListHiddenSelectBox03.children){
 
         for(let i = 0; i <= toolListHiddenSelectBox03.children.length - 1; i++){
 
            typeLists += `<li><p>${ toolListHiddenSelectBox03.children[i].value}</p></li>`;
            toolSelectTitleBtns[2].textContent = toolListHiddenSelectBox03.children[0].value;
         }

         toolSelectListMembers[2].innerHTML = typeLists;
        }

        if(toolListHiddenSelectBox04.children){
 
         for(let i = 0; i <= toolListHiddenSelectBox04.children.length - 1; i++){
 
            fontLists += `<li><p>${ toolListHiddenSelectBox04.children[i].value}</p></li>`;
            toolSelectTitleBtns[3].textContent = toolListHiddenSelectBox04.children[0].value;
         }

         toolSelectListMembers[3].innerHTML = fontLists;
        }
 
       }
 
     initialValues();


    //셀렉박스 버튼 클릭 이벤트
    toolSelectTitleBtns.forEach((btns) => {

      btns.addEventListener("click", () => {

        const lists = btns.nextElementSibling;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
           btns.classList.remove("active");
        }
        
        toolSelectList.forEach((otherList) => otherList.classList.remove("active"));
        toolSelectTitleBtns.forEach((otherbtns) => otherbtns.classList.remove("active"));
        
        btns.classList.add("active");
        lists.classList.add("active");

      })
 })




 //셀렉박스 리스트 클릭시 버튼에 담기
 toolSelectListMembers.forEach((lists , idx) => {

     lists.addEventListener("click", (e) =>{ 

      if(idx === 1){ //체크박스 들어간 셀렉박스 제외하고 버튼에 값 담기

      }else{

        const thisTarget = e.target; //현재 클릭한 요소
        const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;

          if(thisTarget.nodeName == "P"){

               targetBtns.textContent = thisTarget.textContent;
               toolSelectList.forEach((allList) => allList.classList.remove("active"));
               toolSelectTitleBtns.forEach((allBtns) => allBtns.classList.remove("active"));

         }
      
      }
       
     })

 })
}

toolsSelectBoxEvet();



/* 자원목록 버튼 클릭시 효과 이벤트 */

const toolsSwitchBtnEvet = () => {

    const listSetupBtns = document.querySelectorAll(".listSetup ul li button");

    if(listSetupBtns){

      listSetupBtns.forEach((btn) => {
         btn.addEventListener("click" , () => {

            if( btn.classList.contains("active")){
               return btn.classList.remove("active");
            }
             btn.classList.add("active");
         })
      })
    }
}

toolsSwitchBtnEvet();


/* 넘버 버튼 클릭시 숫자 증가하기  */

const numberControllEvet = () => {

 const increaseBtn = document.querySelectorAll(".increase");
 const decreaseBtn = document.querySelectorAll(".decrease");

 increaseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
       const inputNum =  btn.parentElement.previousElementSibling;
       inputNum.value =  Math.max(0, parseInt(inputNum.value) + 1); 
    })
 });

 decreaseBtn.forEach((btn) => {
   btn.addEventListener("click", () => {
      const inputNum =  btn.parentElement.previousElementSibling;
      inputNum.value =  Math.max(0, parseInt(inputNum.value) - 1); 
   })
});

}
numberControllEvet();

/* 구성저장 팝업 불러오기 */

function toolsSavePopEvet(){

   const toolsSaveBtn = document.querySelector(".saveBtnBoxs .saveBtn");
   const toolsSavePopWrappers = document.getElementById("toolsSavePopWrappers");
   let toolsPopHtmlFilePath = '/src/components/popUp/toolsSavePop.html'; 

   if(toolsSaveBtn){

     let xhr = new XMLHttpRequest();
     xhr.open('GET', toolsPopHtmlFilePath, true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                    toolsSavePopWrappers.innerHTML = xhr.responseText;
                    let toolsPopscripts = toolsSavePopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < toolsPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (toolsPopscripts[i].src) {
                               script.src = toolsPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = toolsPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`장비구성도저장팝업스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`장비구성도저장팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('장비구성도저장팝업연결 오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };

     xhr.send();
     console.log('장비구성도저장팝업작동');


     //비밀번호 재설정 확인 버튼 클릭시, 팝업 오픈
     toolsSaveBtn.addEventListener("click" , () => {

     const toolsSavePopWrap = document.querySelector(".toolsSavePopWrap");
        if(toolsSavePopWrap){

          return toolsSavePopWrap.classList.add("active");

        }

        toolsSavePopWrap.classList.remove("active");


     });

   }

}

toolsSavePopEvet();
