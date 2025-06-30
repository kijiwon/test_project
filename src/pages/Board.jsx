import { useEffect } from "react";
import { getBoardList } from "../apis/boards";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { removeCookie } from "../apis/cookie";

const BoardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "SBAggroB";
  }
`;

export default function Board() {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();
  const { userId, reset } = useAuthStore();

  const handleLogout = () => {
    reset();
    removeCookie("refreshToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const getList = async () => {
    const res = await getBoardList();
    // console.log(res);
    setBoardList(res.content);
    console.log(boardList);
  };

  const getBoardDetail = async (id) => {
    navigate(`/boards/${id}`);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <BoardWrapper>
      <p>{userId}</p>
      <button onClick={handleLogout}>로그아웃</button>
      <div>
        <button onClick={() => navigate("/boards/write")}>글 작성하기</button>
        {boardList.length === 0 ? (
          <p>작성된 글이 없습니다.</p>
        ) : (
          <div>
            {boardList.map((data) => (
              <button key={data.id} onClick={() => getBoardDetail(data.id)}>
                <p>{data.title}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </BoardWrapper>
  );
}
