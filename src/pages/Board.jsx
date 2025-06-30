import { useEffect } from "react";
import { getBoardList } from "../apis/boards";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { removeCookie } from "../apis/cookie";
import {
  BoardHeader,
  BoardWrapper,
  BoardListWrapper,
  BoardPostButton,
} from "../components/ui/BoardMain";

export default function Board() {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();
  const { userId, reset } = useAuthStore();
  const [totalPage, setTotalPage] = useState(0);
  const [totalPost, setTotalPost] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleLogout = () => {
    reset();
    removeCookie("refreshToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const getList = async () => {
    const res = await getBoardList();
    console.log(res);
    setBoardList(res.content);
    setTotalPage(res.totalPages);
    setTotalPost(res.totalElements);
  };

  const getBoardDetail = async (id) => {
    navigate(`/boards/${id}`);
  };

  const onClickPage = async (page) => {
    const res = await getBoardList(page);
    setBoardList(res.content);
    setCurrentPage(page);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <BoardWrapper>
      <BoardHeader>
        <p>{userId}</p>
        <button onClick={handleLogout}>로그아웃</button>
      </BoardHeader>
      <BoardPostButton onClick={() => navigate("/boards/write")}>
        글 작성하기
      </BoardPostButton>
      {boardList.length === 0 ? (
        <p>작성된 글이 없습니다.</p>
      ) : (
        <BoardListWrapper>
          <p>{totalPost}개의 포스트</p>
          {boardList.map((data) => (
            <button key={data.id} onClick={() => getBoardDetail(data.id)}>
              <p>{data.title}</p>
            </button>
          ))}
          {Array.from({ length: totalPage }, (_, idx) =>
            currentPage === idx ? (
              <button key={idx}>현재 페이지</button>
            ) : (
              <button key={idx} onClick={() => onClickPage(idx)}>
                {idx + 1}
              </button>
            )
          )}
        </BoardListWrapper>
      )}
    </BoardWrapper>
  );
}
