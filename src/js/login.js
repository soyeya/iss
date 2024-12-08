/* 패스워드 박스 열리는 이벤트 */

function findPasswordEvet(){

    const findPassword = document.querySelector(".findPassword");
    const forgotPasswordBoxs = document.querySelector(".forgotPasswordBoxs");
    const loginContBoxs = document.querySelector(".loginContBoxs");

    findPassword.addEventListener("click" , () => {

      forgotPasswordBoxs.classList.add("active");
      loginContBoxs.classList.add("active");
        
    })
 }


 findPasswordEvet();

function emailCheckPopEvet(){

    const emailCheckBtn = document.querySelector(".emailCheckBtn");
    const loginEmailCheckWrappers = document.getElementById("loginEmailCheckWrappers");
    let loginPopHtmlFilePath = '/src/components/popUp/loginPop.html'; 

    if(emailCheckBtn){

      let xhr = new XMLHttpRequest();
      xhr.open('GET', loginPopHtmlFilePath, true);
   
      xhr.onreadystatechange = function() {
   
      if (xhr.readyState == 4) {
          if (xhr.status == 200){
   
               try{
                     loginEmailCheckWrappers.innerHTML = xhr.responseText;
                     let loginPopscripts = loginEmailCheckWrappers.getElementsByTagName('script');
   
                     for (let i = 0; i < loginPopscripts.length; i++) {
                           let script = document.createElement('script');
   
                           if (loginPopscripts[i].src) {
                                script.src = loginPopscripts[i].src; // 외부 스크립트
                            } else {
                              script.textContent = loginPopscripts[i].textContent; // 인라인 스크립트
                            }
                           // 스크립트 로드 완료 후 실행
                           script.onload = () => { console.log(`로그인이메일확인팝업스크립트 ${i + 1} 로드 완료`);};
                           // 에러 핸들링
                           script.onerror = () => { console.error(`로그인이메일확인팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
  
                           document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                     }
                  }catch (error) {
                     console.log('로그인이메일확인팝업 연결 오류:', error);
               }
         }else{
            console.error('HTTP 요청 실패:', xhr.status);
         }
        }
   
      };

      xhr.send();
      console.log('로그인이메일확인팝업작동');


      //비밀번호 재설정 확인 버튼 클릭시, 팝업 오픈
      emailCheckBtn.addEventListener("click" , () => {

      const loginEmailCheckWrap = document.querySelector(".loginEmailCheckWrap");
         if(loginEmailCheckWrap){

           return loginEmailCheckWrap.classList.add("active");

         }

         loginEmailCheckWrap.classList.remove("active");


      });

    }

}

emailCheckPopEvet();






