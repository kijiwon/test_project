import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard, getBoardById } from "../apis/boards";
import { useEffect } from "react";
import { useState } from "react";

export default function BoardDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getBoardDetail = async (id) => {
    const res = await getBoardById(id);
    if (res.status === 200) {
      setData(res.data);
    } else {
      alert(res.response.data.message);
      navigate(-1);
    }
  };

  const onClickDelete = async (id) => {
    const res = await deleteBoard(id);
    if (res.status === 200) {
      alert("삭제되었습니다.");
      navigate("/boards", { replace: true });
    }
  };

  useEffect(() => {
    getBoardDetail(id);
    console.log(data);
  }, []);

  return (
    <div>
      상세페이지
      <div>
        {data && (
          <div>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>{data.createdAt.split("T")[0]}</p>
            <button onClick={() => navigate(`/boards/${data.id}/edit`)}>
              수정
            </button>
            <button onClick={() => onClickDelete(data.id)}>삭제</button>
          </div>
        )}
      </div>
    </div>
  );
}
