//이벤트 클릭시 모달창 띄우기

import { useState, useRef } from "react";
const AddEvent = () => {
    const [modal, setModal] = useState(false);
    const outside = useRef();
    
    return (
      <>
        <button onClick={ () => setModal(true) }>+ 일정 추가</button>
        {/* {
          modal &&
          <ModalBg 
            ref={outside} 
            onClick={ (e) => { if(e.target == outside.current) setModal(false) } }
          >
            <Modal>
              모달 내용
              <button onClick={ () => setModal(false) }>취소</button>
            </Modal>
          </ModalBg>
        } */}
      </>
    )
  
  }
  
  export default AddEvent;