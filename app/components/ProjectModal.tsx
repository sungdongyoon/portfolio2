import React from "react";

const ProjectModal = () => {
  return (
    <div className="w-[500px] aspect-square fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white text-black p-10">
      <button className="absolute top-5 right-5 border border-black cursor-pointer">
        x
      </button>
      <div>
        <div>
          <h3>프로젝트 제목</h3>
          <p>프로젝트 설명</p>
          <div>
            <p>기간</p>
            <p>2026.06 ~ 2026.07</p>
          </div>
          <div>
            <p>기술 스택</p>
            <div>
              <div className="w-[10px] aspect-square bg-white"></div>
              <div className="w-[10px] aspect-square bg-white"></div>
              <div className="w-[10px] aspect-square bg-white"></div>
            </div>
          </div>
        </div>
        <div className="w-full border border-t border-black my-5"></div>
        <div>
          <p>상세 내용</p>
          <ul>
            <li>1. 첫번째 내용</li>
            <li>2. 두번째 내용</li>
            <li>3. 세번째 내용</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
