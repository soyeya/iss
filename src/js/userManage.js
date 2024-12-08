/* 설정아이콘 버튼 클릭시 숨겨진 박스 오픈 */

const userManageHiddenBoxsOpenEvet = () => {

  const userHiddenBtn = document.querySelector(".userHiddenBtn");
  const userManageHiddenBoxs = document.querySelector(".userManageHiddenBoxs");


  userHiddenBtn.addEventListener("click" , () => {

     if(userHiddenBtn.classList.contains("active")){

       return userHiddenBtn.classList.remove("active"),
       userManageHiddenBoxs.classList.remove("active");

     }
     userHiddenBtn.classList.add("active");
     userManageHiddenBoxs.classList.add("active");
    
  })
}

userManageHiddenBoxsOpenEvet();



/* 셀렉박스 이벤트  */

const userManageSelectBoxEvet = () => {

    
     
   let userManageSelectBox01 = document.getElementById("userManageSelectBox01");
   let userManageSelectBox02 = document.getElementById("userManageSelectBox02");

   let userManageSelectsTitleBtn = document.querySelectorAll(".userManageSelectsTitleBtn");
   let userManageSelectList = document.querySelectorAll(".userManageSelectList");
   let userManageSelectListMember = document.querySelectorAll(".userManageSelectListMember");

     //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

         let list01 = '';
         let list02 = '';
      
         if(userManageSelectBox01.children){
         for(let i = 0; i <= userManageSelectBox01.children.length - 1; i++){
 
            list01 += `<li><p>${ userManageSelectBox01.children[i].value}</p></li>`;
            userManageSelectsTitleBtn[0].textContent = userManageSelectBox01.children[0].value;
         }
         userManageSelectListMember[0].innerHTML = list01;
 
        }

        if(userManageSelectBox02.children){
         for(let i = 0; i <= userManageSelectBox02.children.length - 1; i++){
 
            list02 += `<li><p>${ userManageSelectBox02.children[i].value}</p></li>`;
            userManageSelectsTitleBtn[1].textContent = userManageSelectBox02.children[0].value;
         }
         userManageSelectListMember[1].innerHTML = list02;
 
        }


 
       }
 
     initialValues();

    //셀렉박스 버튼 클릭 이벤트
    userManageSelectsTitleBtn.forEach((btns) => {

      btns.addEventListener("click", () => {

        const lists = btns.nextElementSibling;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
           btns.classList.remove("active");
        }
        
        userManageSelectList.forEach((otherList) => otherList.classList.remove("active"));
        userManageSelectsTitleBtn.forEach((otherbtns) => otherbtns.classList.remove("active"));
        
        btns.classList.add("active");
        lists.classList.add("active");

      })
 })




 //셀렉박스 리스트 클릭시 버튼에 담기
 userManageSelectListMember.forEach((lists , idx) => {

     lists.addEventListener("click", (e) =>{ 

 
        const thisTarget = e.target; //현재 클릭한 요소
        const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;

          if(thisTarget.nodeName == "P"){
   
               targetBtns.textContent = thisTarget.textContent;
               userManageSelectList.forEach((allList) => allList.classList.remove("active"));
               userManageSelectsTitleBtn.forEach((allBtns) => allBtns.classList.remove("active"));


      
      }
       
     })

 })
}

userManageSelectBoxEvet();

/* 설정아이콘 클릭시 안에 체크박스가 클릭 되어있는 경우 알리는 이벤트 */

const checkBoxsCheckedEvet = () => {

   const checkboxes = document.querySelectorAll('.userManageHiddenBoxs input[type="checkbox"]');
   const userHiddenBtn = document.querySelector(".userHiddenBtn");

   function checkCheckboxStatus() {
      // 하나라도 체크된 체크박스가 있으면 isChecked 클래스 추가
      if ([...checkboxes].some(checkbox => checkbox.checked)) {
        userHiddenBtn.classList.add('isChecked');
      } else {
        userHiddenBtn.classList.remove('isChecked');
      }
    }

// 체크박스에 change 이벤트 리스너 추가
  checkboxes.forEach(checkbox => {
   checkbox.addEventListener('change', checkCheckboxStatus);
 });

    checkCheckboxStatus();

}

checkBoxsCheckedEvet();



/* 사용자그룹등록버튼 클릭시 팝업 오픈 */

function userGroupPopEvet(){

  const userPopOpenBtn = document.querySelector(".userPopOpenBtn");
  const userGroupAddWrappers = document.getElementById("userGroupAddWrappers");
  let userGroupPopHtmlFilePath = '/iss/src/components/popUp/userGroupPop.html'; 

  if(userPopOpenBtn){

    let xhr = new XMLHttpRequest();
    xhr.open('GET',  userGroupPopHtmlFilePath, true);
 
    xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
 
             try{
                   userGroupAddWrappers.innerHTML = xhr.responseText;
                   let userGroupPopscripts = userGroupAddWrappers.getElementsByTagName('script');
 
                   for (let i = 0; i < userGroupPopscripts.length; i++) {
                         let script = document.createElement('script');
 
                         if (userGroupPopscripts[i].src) {
                              script.src = userGroupPopscripts[i].src; // 외부 스크립트
                          } else {
                            script.textContent = userGroupPopscripts[i].textContent; // 인라인 스크립트
                          }
                         // 스크립트 로드 완료 후 실행
                         script.onload = () => { console.log(`사용자그룹팝업스크립트 ${i + 1} 로드 완료`);};
                         // 에러 핸들링
                         script.onerror = () => { console.error(`사용자그룹팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};

                         document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                   }
                }catch (error) {
                   console.log('사용자그룹팝업연결 오류:', error);
             }
       }else{
          console.error('HTTP 요청 실패:', xhr.status);
       }
      }
 
    };

    xhr.send();
    console.log('사용자그룹팝업작동');


    //레이아웃 저장버튼 클릭시 팝업 오픈
    userPopOpenBtn.addEventListener("click" , () => {

    const userGroupPopWrapper = document.querySelector(".userGroupPopWrapper");

       if(userGroupPopWrapper){
         return userGroupPopWrapper.classList.add("active");
       }
       userGroupPopWrapper.classList.remove("active");

    });

  }

}

userGroupPopEvet();