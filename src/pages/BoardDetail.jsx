import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard, getBoardById } from "../apis/boards";
import { useEffect } from "react";
import { useState } from "react";
import {
  PageWrapper,
  PostDetailWrapper,
  PostHeader,
  PostContent,
  ButtonWrapper,
  EditButton,
  DeleteButton,
} from "../components/ui/BoardPostDetail";
import { BackButton } from "../components/BackButton";

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
  }, []);

  return (
    <PageWrapper>
      <BackButton />
      {data && (
        <PostDetailWrapper>
          <PostHeader>
            <p>[{data.boardCategory}]</p>
            <p>{data.title}</p>
          </PostHeader>

          <PostContent>
            <p>{data.createdAt.split("T")[0]}</p>
            <p>{data.content}</p>
          </PostContent>

          <ButtonWrapper>
            <DeleteButton onClick={() => onClickDelete(data.id)}>
              삭제
            </DeleteButton>
            <EditButton onClick={() => navigate(`/boards/${data.id}/edit`)}>
              수정
            </EditButton>
          </ButtonWrapper>
        </PostDetailWrapper>
      )}
    </PageWrapper>
  );
}
