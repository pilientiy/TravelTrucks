import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';

import { selectCampers } from '../../../redux/selectors';

import css from './Location.module.css';

const Location: React.FC = () => {
  const locations = useSelector(selectCampers);

  const { values, setFieldValue } = useFormikContext<{ location: string }>();

  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLocationSelected, setLocationSelected] = useState<boolean>(false);

  const uniqueLocations = Array.from(
    new Set(locations.map(item => item.location))
  );

  const filterLocations = (value: string) => {
    if (value.trim() === '') {
      return [];
    }
    return uniqueLocations.filter(location =>
      location.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFieldValue('location', value);

    if (value.trim() === '') {
      return setFilteredLocations([]);
    }

    const filtered = filterLocations(value);
    setFilteredLocations(filtered);
  };

  const handleLocationSelect = (location: string) => {
    setFieldValue('location', location);
    setLocationSelected(true);

    setFilteredLocations([]);
    setIsFocused(false);
  };

  const handleBlur = () => {
    if (isLocationSelected) {
      setIsFocused(false);
    }
  };

  const handleFocus = () => {
    if (values.location !== undefined && values.location.trim() !== '') {
      setLocationSelected(true);
      setFilteredLocations(filterLocations(values.location));
    }
    setIsFocused(true);
  };

  return (
    <div className={css.inputWrapper}>
      <label htmlFor='textInput' className={css.inputLabel}>
        Location
      </label>
      <Field
        id='textInput'
        type='text'
        name='location'
        value={values.location ?? ''}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder='City'
        className={css.textInput}
      />
      <svg width={20} height={20} aria-hidden='true' className={css.mapIcon}>
        <use href='/categories/secondSprite.svg#icon-map'></use>
      </svg>

      {(isFocused || isLocationSelected) && filteredLocations.length > 0 && (
        <ul className={css.dropdownList}>
          {filteredLocations.map((location, index) => (
            <li
              key={index}
              onClick={() => handleLocationSelect(location)}
              className={css.dropdownItem}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Location;
