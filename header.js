const headerEvet = () => {
   
    let ssHeader = document.querySelector(".headerWrappers");
    let htmlFilePath = '/header.html'; // 삽입할 HTML 파일 경로
 
    if(ssHeader){
 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', htmlFilePath, true);
 
    xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
 
             try{
                    ssHeader.innerHTML = xhr.responseText;
                   let headerscripts = ssHeader.getElementsByTagName('script');
 
                   for (let i = 0; i < headerscripts.length; i++) {
                         let script = document.createElement('script');
 
                         if (headerscripts[i].src) {
                              script.src = headerscripts[i].src; // 외부 스크립트
                          } else {
                            script.textContent = headerscripts[i].textContent; // 인라인 스크립트
                          }
                         // 스크립트 로드 완료 후 실행
                         script.onload = () => { console.log(`헤더스크립트 ${i + 1} 로드 완료`);};
                         // 에러 핸들링
                         script.onerror = () => { console.error(`헤더스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
                         document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                   }
                }catch (error) {
                   console.log('Header 연결 오류:', error);
             }
       }else{
          console.error('HTTP 요청 실패:', xhr.status);
       }
      }
 
    };
 
    xhr.send();
    console.log('header작동');
 
   }
 
 }
 
 
 
 export { headerEvet }