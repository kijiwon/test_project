import { useEffect } from "react";
import { getBoardCategory, postBoardData } from "../apis/boards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      category,
    };

    console.log(formData);
    const res = await postBoardData(formData);
    if (res.status === 201) {
      alert("게시 완료!");
      navigate("/board");
    }
  };

  const onClickBack = () => {
    navigate("/board");
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <button onClick={onClickBack}>뒤로가기</button>
      <form>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="category">카테고리</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((i, idx) => (
            <option value={i[0]} key={idx}>
              {i[1]}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          작성하기
        </button>
      </form>
    </div>
  );
}
