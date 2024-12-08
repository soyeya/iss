const bottomMentEvet = () => {
   
   let bottomMenuWrap = document.querySelector(".bottomMenuWrappers");
   let bottomMenuhtmlFilePath = '/iss/bottomMenu.html'; // 삽입할 HTML 파일 경로

   if(bottomMenuWrap){

   let xhr = new XMLHttpRequest();
   xhr.open('GET', bottomMenuhtmlFilePath, true);

   xhr.onreadystatechange = function() {

   if (xhr.readyState == 4) {
       if (xhr.status == 200){

            try{
                  bottomMenuWrap.innerHTML = xhr.responseText;
                  let bottomscripts =  bottomMenuWrap.getElementsByTagName('script');

                  for (let i = 0; i < bottomscripts.length; i++) {
                        let script = document.createElement('script');

                        if (bottomscripts[i].src) {
                             script.src = bottomscripts[i].src; // 외부 스크립트
                         } else {
                           script.textContent = bottomscripts[i].textContent; // 인라인 스크립트
                         }
                        // 스크립트 로드 완료 후 실행
                        script.onload = () => { console.log(`열어본메뉴스크립트 ${i + 1} 로드 완료`);};
                        // 에러 핸들링
                        script.onerror = () => { console.error(`열어본메뉴스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
                        document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                  }
               }catch (error) {
                  console.log('열어본메뉴 연결 오류:', error);
            }
      }else{
         console.error('HTTP 요청 실패:', xhr.status);
      }
     }

   };

   xhr.send();
   console.log('열어본메뉴 작동');

  }

}



export {  bottomMentEvet }