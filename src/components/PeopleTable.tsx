import { Person } from '../types';
import { PersonLink } from './PersonLink';
import { useState } from 'react';
import classNames from 'classnames';

type Props = {
  people: Person[];
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const [selectedPersonSlug, setSelectedPersonSlug] = useState<string | null>(
    null,
  );

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(
          ({ name, sex, born, died, fatherName, motherName, slug }) => (
            <tr
              data-cy="person"
              key={slug}
              className={classNames({
                'has-background-warning': slug === selectedPersonSlug,
              })}
            >
              <td>
                <PersonLink
                  name={name} 
                  people={people}
                  onSelectPerson={setSelectedPersonSlug}
                />
              </td>
              <td>{sex}</td>
              <td>{born}</td>
              <td>{died}</td>
              <td>
                <PersonLink 
                  name={motherName || null} 
                  people={people}
                  onSelectPerson={setSelectedPersonSlug}
                />
              </td>
              <td>
                <PersonLink 
                  name={fatherName || null} 
                  people={people}
                  onSelectPerson={setSelectedPersonSlug}
                />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};
