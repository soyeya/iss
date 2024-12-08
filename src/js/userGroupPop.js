/* +,- 버튼 클릭시 보더처리 이벤트  */

const listAddBtnEvet = () => {

    const listAddMinusBtn = document.querySelectorAll(".userGroupListControlBtnBoxs button");

    if(listAddMinusBtn){
      listAddMinusBtn.forEach((btns) => {
         btns.addEventListener("click", () => {
             
             btns.classList.add("active");
             setTimeout(() => {  btns.classList.remove("active"); },100);
         })
      })
    }
   }

listAddBtnEvet();

/* 셀렉박스 이벤트  */

const userGroupSelectBoxEvet = () => {

    
   let userGroupSelectBox01 = document.getElementById("userGroupSelectBox01");

   let userGroupSelectsTitleBtn = document.querySelector(".userGroupSelectsTitleBtn");
   let userGroupSelectList = document.querySelector(".userGroupSelectList");
   let userGroupSelectListMember = document.querySelector(".userGroupSelectListMember");

     //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

         let answers = '';
      
         if(userGroupSelectBox01.children){
         for(let i = 0; i <= userGroupSelectBox01.children.length - 1; i++){
 
            answers += `<li><p>${userGroupSelectBox01.children[i].value}</p></li>`;
            userGroupSelectsTitleBtn.textContent = userGroupSelectBox01.children[0].value;
         }
         userGroupSelectListMember.innerHTML = answers;
 
        }

       }
 
     initialValues();

    //셀렉박스 버튼 클릭 이벤트
      userGroupSelectsTitleBtn.addEventListener("click", () => {

        const lists = userGroupSelectsTitleBtn.nextElementSibling;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
           userGroupSelectsTitleBtn.classList.remove("active");
        }
        
        userGroupSelectsTitleBtn.classList.add("active");
        lists.classList.add("active");

      })


 //셀렉박스 리스트 클릭시 버튼에 담기


   userGroupSelectListMember.addEventListener("click", (e) =>{ 

        const thisTarget = e.target; //현재 클릭한 요소
        const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;

          if(thisTarget.nodeName == "P"){
   
               targetBtns.textContent = thisTarget.textContent;
               userGroupSelectList.classList.remove("active");
               userGroupSelectsTitleBtn.classList.remove("active");
      
      }
     })
}

userGroupSelectBoxEvet();


/* 비밀번호 변경 버튼 클릭시 오픈 */

const userGroupHiddenBoxOpen = () => {

    const userGroupHiddenBtn = document.querySelector(".userGroupHiddenBtn");
    const hiddenPasswordCont = document.querySelector(".hiddenPasswordCont");

    userGroupHiddenBtn.addEventListener("click", () => {
       
      if(userGroupHiddenBtn.classList.contains("active")){
         return userGroupHiddenBtn.classList.remove("active"),
         hiddenPasswordCont.classList.remove("active");
      }
      userGroupHiddenBtn.classList.add("active");
      hiddenPasswordCont.classList.add("active");

    })
}

userGroupHiddenBoxOpen();


/* 조직도내 버튼 클릭시 셀렉박스 나타내기 */

const groupSelectBoxOpenEvet = () => {

const groupSelectBoxBtn = document.querySelectorAll(".groupSelectBoxBtn");
const groupSelectContents = document.querySelectorAll(".groupSelectContents");
let groupListSelectsTitleBtn = document.querySelectorAll(".groupListSelectsTitleBtn");
let groupListSelectList = document.querySelectorAll(".groupListSelectList");
let groupListSelects = document.querySelectorAll(".groupListSelects");

if(groupSelectBoxBtn){

   groupSelectBoxBtn.forEach((btn,index) => {

       btn.addEventListener("click", () => {

         if(btn.classList.contains("active")){
            return  btn.classList.remove("active"),
            groupSelectContents[index].classList.remove("active");
         }
         groupSelectBoxBtn.forEach((otherBtn) => { otherBtn.classList.remove("active")})
         groupSelectContents.forEach((otherList) => {otherList.classList.remove("active")})
         groupListSelectList.forEach((otherList) => otherList.classList.remove("active"));
         groupListSelectsTitleBtn.forEach((otherbtns) => otherbtns.classList.remove("active"));
         groupListSelects.forEach((otherselect) => otherselect.classList.remove("active"));
          btn.classList.add("active");
          groupSelectContents[index].classList.add("active");


       })
   })

}

}

groupSelectBoxOpenEvet();


/* 조직도내 셀렉박스 이벤트  */

const groupListSelectBoxEvet = () => {

   let groupListSelectsTitleBtn = document.querySelectorAll(".groupListSelectsTitleBtn");
   let groupListSelectListMember = document.querySelectorAll(".groupListSelectListMember");

    //셀렉박스 버튼 클릭 이벤트
    groupListSelectsTitleBtn.forEach((btns , indx) => {

      btns.addEventListener("click", () => {

        const lists = btns.nextElementSibling;
        const currentGroupListSelects = btns.parentElement;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
           btns.classList.remove("active"),
           currentGroupListSelects.classList.remove("active");
        }
        
        currentGroupListSelects.classList.add("active");
        btns.classList.add("active");
        lists.classList.add("active");

      })

 })


 //셀렉박스 리스트 클릭시 버튼에 담기
 groupListSelectListMember.forEach((lists) => {

     lists.addEventListener("click", (e) =>{ 

          const thisTarget = e.target; //현재 클릭한 요소
         //  const thisBtn = thisTarget.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
         //  const targetSelectList = thisTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
         //  const targetSelects = thisTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
          const thisTargetParents = thisTarget.parentElement;

          if(thisTarget.nodeName === "P"){

            //  targetSelectList.classList.remove("active");
            //  targetSelects.classList.remove("active");
            //  thisBtn.classList.remove("active");
            if(thisTargetParents.classList.contains("active")){
               return thisTargetParents.classList.remove("active");
            }
            thisTargetParents.classList.add("active");

          }

       
     })

 })
}

groupListSelectBoxEvet();


/* 사용자그룹 등록 팝업 닫기 */

function userGroupPopCloseEvet(){

const userGroupPopCloseBtn = document.querySelector(".userGroupPopCloseBtn");
const userGroupPopWrapper = document.querySelector(".userGroupPopWrapper");

if(userGroupPopCloseBtn){
   userGroupPopCloseBtn.addEventListener("click", () => {
      userGroupPopWrapper.classList.remove("active");
       
   })
}
}

userGroupPopCloseEvet();


/* 비밀번호 변경완료 버튼 클릭시 팝업 오픈 */

function passwordChangePopEvet(){

   const passwordPopOpenBtn = document.querySelector(".passwordPopOpenBtn");
   const passwordPopWrappers = document.getElementById("passwordPopWrappers");
   let passwordPopHtmlFilePath = '/src/components/popUp/passwordPop.html'; 
 
   if(passwordPopOpenBtn){
 
     let xhr = new XMLHttpRequest();
     xhr.open('GET', passwordPopHtmlFilePath, true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                    passwordPopWrappers.innerHTML = xhr.responseText;
                    let passwordPopscripts = passwordPopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < passwordPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (passwordPopscripts[i].src) {
                               script.src = passwordPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = passwordPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`비밀번호변경팝업스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`비밀번호변경팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('비밀번호변경팝업연결 오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };
 
     xhr.send();
     console.log('비밀번호변경팝업작동');
 
 
     //비밀번호변경완료 버튼 클릭시 팝업 오픈
     passwordPopOpenBtn.addEventListener("click" , () => {
 
     const passwordPopWrap = document.querySelector(".passwordPopWrap");
 
        if(passwordPopWrap){
          return passwordPopWrap.classList.add("active");
        }
        passwordPopWrap.classList.remove("active");
 
     });
 
   }
 
 }
 
 passwordChangePopEvet();


 /* 사용자그룹등록 버튼 클릭시 팝업 오픈 */

function addUserPopEvet(){

   const addUserBtn = document.querySelector(".addUserBtn");
   const addUserPopWrappers = document.getElementById("addUserPopWrappers");
   let addUserPopHtmlFilePath = '/src/components/popUp/addUserPop.html'; 
 
   if(addUserBtn){
 
     let xhr = new XMLHttpRequest();
     xhr.open('GET', addUserPopHtmlFilePath , true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                    addUserPopWrappers.innerHTML = xhr.responseText;
                    let addUserPopscripts = addUserPopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < addUserPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (addUserPopscripts[i].src) {
                               script.src = addUserPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = addUserPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`사용자등록버튼팝업스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`사용자등록버튼팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('사용자등록버튼팝업연결 오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };
 
     xhr.send();
     console.log('사용자등록버튼팝업작동');
 
 
     //사용자그룹등록 버튼 클릭시 팝업 오픈
     addUserBtn.addEventListener("click" , () => {
 
     const addUserPopWrap = document.querySelector(".addUserPopWrap");
 
        if(addUserPopWrap){
          return  addUserPopWrap.classList.add("active");
        }
        addUserPopWrap.classList.remove("active");
 
     });
 
   }
 
 }
 
 addUserPopEvet();