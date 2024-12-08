const switchPopEvet = () => {
   
   let switchWrapper = document.getElementById("switchPopWrappers");
   let switchHtmlFilePath = '/iss/src/components/popUp/switchPop.html'; // 삽입할 HTML 파일 경로

   if(switchWrapper){

   let xhr = new XMLHttpRequest();
   xhr.open('GET', switchHtmlFilePath, true);

   xhr.onreadystatechange = function() {

   if (xhr.readyState == 4) {
       if (xhr.status == 200){

            try{
                  switchWrapper.innerHTML = xhr.responseText;
                  let switchPopscripts = switchWrapper.getElementsByTagName('script');

                  for (let i = 0; i < switchPopscripts.length; i++) {
                        let script = document.createElement('script');

                        if (switchPopscripts[i].src) {
                             script.src = switchPopscripts[i].src; // 외부 스크립트
                         } else {
                           script.textContent = switchPopscripts[i].textContent; // 인라인 스크립트
                         }
                        // 스크립트 로드 완료 후 실행
                        script.onload = () => { console.log(`스위치팝업스크립트 ${i + 1} 로드 완료`);};
                        // 에러 핸들링
                        script.onerror = () => { console.error(`스위치팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};

                        document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                  }
               }catch (error) {
                  console.log('스위치팝업 연결 오류:', error);
            }
      }else{
         console.error('HTTP 요청 실패:', xhr.status);
      }
     }

   };

   xhr.send();
   console.log('스위치팝업작동');

  }

}



switchPopEvet();