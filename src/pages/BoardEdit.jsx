import { useEffect } from "react";
import { getBoardCategory, patchBoard } from "../apis/boards";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardById } from "../apis/boards";

export default function BoardEdit() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const getBoardDetail = async (id) => {
    const res = await getBoardById(id);
    if (res.status === 200) {
      console.log(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
      setCategory(res.data.boardCategory);
    } else {
      alert(res.response.data.message);
      navigate(-1);
    }
  };

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
    const res = await patchBoard({ id, formData });
    if (res.status === 200) {
      alert("수정 완료!");
      navigate("/boards");
    }
  };

  const onClickBack = () => {
    navigate("/boards");
  };

  useEffect(() => {
    getBoardDetail(id);
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
          저장하기
        </button>
      </form>
    </div>
  );
}
