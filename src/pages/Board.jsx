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
  BoardList,
  PostItem,
  CurrentPageButton,
  PageButton,
  PageButtonWrapper,
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
    navigate("/");
    alert("로그아웃 되었습니다.");
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
        ✏️ 글 작성
      </BoardPostButton>

      {boardList.length === 0 ? (
        <p>작성된 글이 없습니다.</p>
      ) : (
        <BoardListWrapper>
          <p>{totalPost}개의 포스트</p>
          <BoardList>
            {boardList.map((data) => (
              <PostItem key={data.id} onClick={() => getBoardDetail(data.id)}>
                <p>[{data.category}]</p>
                <p>{data.title}</p>
              </PostItem>
            ))}
          </BoardList>
          <PageButtonWrapper>
            {Array.from({ length: totalPage }, (_, idx) =>
              currentPage === idx ? (
                <CurrentPageButton key={idx}>{idx + 1}</CurrentPageButton>
              ) : (
                <PageButton key={idx} onClick={() => onClickPage(idx)}>
                  {idx + 1}
                </PageButton>
              )
            )}
          </PageButtonWrapper>
        </BoardListWrapper>
      )}
    </BoardWrapper>
  );
}
