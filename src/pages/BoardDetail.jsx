import { useNavigate, useParams } from "react-router-dom";
import { getBoardById } from "../apis/boards";
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

  useEffect(() => {
    getBoardDetail(id);
  }, []);

  return (
    <div>
      상세페이지
      <div>
        {data && (
          <div>
            <p>{data.title}</p>
            <p>{data.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
