const navigationEvet = () => {
   
    let ssNavi = document.querySelector(".navigationWrappers");
    let naviHtmlFilePath = '/navigation.html'; // 삽입할 HTML 파일 경로
 
    if(ssNavi){
 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', naviHtmlFilePath, true);
 
    xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
 
             try{
                   ssNavi.innerHTML = xhr.responseText;
                   let naviscripts = ssNavi.getElementsByTagName('script');
 
                   for (let i = 0; i < naviscripts.length; i++) {
                         let script = document.createElement('script');
 
                         if (naviscripts[i].src) {
                              script.src = naviscripts[i].src; // 외부 스크립트
                          } else {
                            script.textContent = naviscripts[i].textContent; // 인라인 스크립트
                          }
                         // 스크립트 로드 완료 후 실행
                         script.onload = () => { console.log(`네비스크립트 ${i + 1} 로드 완료`);};
                         // 에러 핸들링
                         script.onerror = () => { console.error(`네비스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};

                         document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                   }
                }catch (error) {
                   console.log('navi 연결 오류:', error);
             }
       }else{
          console.error('HTTP 요청 실패:', xhr.status);
       }
      }
 
    };
 
    xhr.send();
    console.log('navi작동');
 
   }
 
 }
 
 
 
 export { navigationEvet  }