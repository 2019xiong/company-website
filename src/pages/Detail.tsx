import { useParams } from "react-router-dom";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="p-4 bg-amber-300">{id}</div>
  )
}
export default Detail;