/* 대시보드편집 타이틀 클릭시 이벤트 */

const editTitlesBoxList = document.querySelectorAll(".editTitlesBox a");
editTitlesBoxList.forEach((otherlist) => {otherlist.classList.remove("active")});
setTimeout(() => {editTitlesBoxList[0].classList.add("active");},200)


/* 대시보드 선택 셀렉박스 이벤트  */

const editSelectBoxEvet = () => {

   let editSelectBox01 = document.getElementById("editSelectBox01");
   let editSelectsTitleBtn = document.querySelector(".editSelectBtn01");
   let editSelectList = document.querySelector(".editSelectList01");
   let editSelectListMember = document.querySelector(".editSelectMember01");

     //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

         let editlist = '';
      
         if(editSelectBox01.children){
         for(let i = 0; i <= editSelectBox01.children.length - 1; i++){
 
            editlist += `<li><p>${ editSelectBox01.children[i].value}</p></li>`;
            editSelectsTitleBtn.textContent = editSelectBox01.children[0].value;
         }
         editSelectListMember.innerHTML = editlist;
 
        }
 
       }
 
     initialValues();

    //셀렉박스 버튼 클릭 이벤트

      editSelectsTitleBtn.addEventListener("click", () => {

        const lists = editSelectsTitleBtn.nextElementSibling;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
            editSelectsTitleBtn.classList.remove("active");
        }
        
        editSelectsTitleBtn.classList.add("active");
        lists.classList.add("active");

      })
 


 //셀렉박스 리스트 클릭시 버튼에 담기

   editSelectListMember.addEventListener("click", (e) =>{ 

        const thisTarget = e.target; //현재 클릭한 요소
        const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;

          if(thisTarget.nodeName == "P"){
   
               targetBtns.textContent = thisTarget.textContent;
               editSelectList.classList.remove("active");
               editSelectsTitleBtn.classList.remove("active");
      }
       
     })
}

editSelectBoxEvet();


/* 스크린내 박스 셀렉박스 이벤트  */

const editSreenSelectBoxEvet = () => {

      let editScreenSelectBox = document.querySelectorAll(".editScreenBoxs select"); //모든 셀렉박스
      let editSreenBtn = document.querySelectorAll(".editSreenBtn");
      let editSreenList = document.querySelectorAll(".editSreenList");
      let editSreenMember = document.querySelectorAll(".editSreenMember");
   
        //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
         const initialValues = () => {
            
            if(editScreenSelectBox.length > 0){
                
               editScreenSelectBox.forEach((select) => {
                   
                   if(select.children){

                      let thisBtns = select.parentElement.nextElementSibling.children[0]; //btn
                      let thisMember = select.parentElement.nextElementSibling.children[1].children[0]; //selectMember

                      for (let i = 0; i <= select.children.length - 1; i++){
                        thisMember.innerHTML += `<li><p>${select.children[i].value}</p></li>`;
                        thisBtns.textContent = select.children[0].value;
                      }

                   }
               })
            }
    
          }
    
        initialValues();
   
       //셀렉박스 버튼 클릭 이벤트
       editSreenBtn.forEach((btns) => {
   
         btns.addEventListener("click", () => {
   
           const lists = btns.nextElementSibling;
           console.log(lists);
           console.log(btns);
   
           if(lists.classList.contains("active")){
              return lists.classList.remove("active"),
              btns.classList.remove("active");
           }
           
           editSreenList.forEach((otherList) => otherList.classList.remove("active"));
           editSreenBtn.forEach((otherbtns) => otherbtns.classList.remove("active"));
           
           btns.classList.add("active");
           lists.classList.add("active");
   
         })
    })
   
   
   
   
    //셀렉박스 리스트 클릭시 버튼에 담기
    editSreenMember.forEach((lists , idx) => {
   
        lists.addEventListener("click", (e) =>{ 
   
    
           const thisTarget = e.target; //현재 클릭한 요소
           const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;
   
             if(thisTarget.nodeName == "P"){
      
                  targetBtns.textContent = thisTarget.textContent;
                  editSreenList.forEach((allList) => allList.classList.remove("active"));
                  editSreenBtn.forEach((allBtns) => allBtns.classList.remove("active"));
   
   
         
         }
          
        })
   
    })

}

editSreenSelectBoxEvet();


/* 레이아웃 저장버튼 클릭시 팝업 오픈 */

function editSavePopEvet(){

   const editSaveBtn = document.querySelector(".editContMainSaveBtnBoxs .editSaveBtn");
   const editSavePopWrappers = document.getElementById("layoutSavePopWrappers");
   let editPopHtmlFilePath = '/src/components/popUp/layoutPop.html'; 

   if(editSaveBtn){

     let xhr = new XMLHttpRequest();
     xhr.open('GET',  editPopHtmlFilePath, true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                    editSavePopWrappers.innerHTML = xhr.responseText;
                    let editPopscripts = editSavePopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < editPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (editPopscripts[i].src) {
                               script.src = editPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = editPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`레아아웃저장팝업스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`레이아웃저장팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('레이아웃저장팝업연결 오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };

     xhr.send();
     console.log('레이아웃저장팝업작동');


     //레이아웃 저장버튼 클릭시 팝업 오픈
     editSaveBtn.addEventListener("click" , () => {

     const layoutSavePopWrap = document.querySelector(".layoutSavePopWrap");
        if(layoutSavePopWrap){
          return layoutSavePopWrap.classList.add("active");
        }
        layoutSavePopWrap.classList.remove("active");
     });

   }

}

editSavePopEvet();