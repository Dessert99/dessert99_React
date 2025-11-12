import { useParams } from 'react-router';

export default function StudyRoom() {
  const { id } = useParams();
  return <div>{id}</div>;
}
