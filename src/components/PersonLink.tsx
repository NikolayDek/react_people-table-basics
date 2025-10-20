import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  name: string | null;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ name, people }) => {
  if (!name) {
    return '-';
  }

  const currentPerson = people.find(person => person.name === name);

  if (!currentPerson) {
    return name;
  }

  return (
    <Link
      to={`/people/${currentPerson.slug}`}
      className={currentPerson.sex === 'f' ? 'has-text-danger' : ''}
    >
      {currentPerson.name}
    </Link>
  );
};
