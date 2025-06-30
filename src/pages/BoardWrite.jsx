import { useEffect } from "react";
import { getBoardCategory, postBoard } from "../apis/boards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoardPostWrapper,
  PostFormWrapper,
  PostInputWrapper,
  PostButton,
} from "../components/ui/BoardPost";

export default function BoardWrite() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const getCategories = async () => {
    const res = await getBoardCategory();
    const arr = Object.entries(res);
    setCategories(arr);
    setCategory(arr[0][0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      category,
    };
    if (title.length === 0) {
      alert("제목을 입력해주세요");
      return;
    }
    if (content.length === 0) {
      alert("내용을 입력해주세요");
      return;
    }
    const res = await postBoard(formData);
    if (res.status === 201) {
      alert("게시 완료!");
      navigate("/boards");
    }
  };

  const onClickBack = () => {
    navigate("/boards");
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <BoardPostWrapper>
      <button onClick={onClickBack}>⬅Back</button>
      <PostFormWrapper>
        <PostInputWrapper>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </PostInputWrapper>
        <PostInputWrapper>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </PostInputWrapper>
        <PostInputWrapper>
          <label htmlFor="category">카테고리</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((i, idx) => (
              <option value={i[0]} key={idx}>
                {i[1]}
              </option>
            ))}
          </select>
        </PostInputWrapper>

        <PostButton type="submit" onClick={handleSubmit}>
          작성
        </PostButton>
      </PostFormWrapper>
    </BoardPostWrapper>
  );
}
