import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  name: string | null;
  people: Person[];
  onSelectPerson: (slug: string) => void;
};

export const PersonLink: React.FC<Props> = ({ name, people, onSelectPerson }) => {
  if (!name) {
    return <span>-</span>;
  }

  const currentPerson = people.find(person => person.name === name);

  if (!currentPerson) {
    return <span>{name}</span>;
  }

  return (
    <Link
      to={`/people/${currentPerson.slug}`}
      className={currentPerson.sex === 'f' ? 'has-text-danger' : ''}
      onClick={() => onSelectPerson(currentPerson.slug)}
    >
      {currentPerson.name}
    </Link>
  );
};
