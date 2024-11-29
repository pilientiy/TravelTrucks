import { Field } from 'formik';
import css from './VehicleTypes.module.css';

const vehicleTypes = [
  { text: 'Van', value: 'panelTruck', icon: '/secondSprite.svg#icon-van' },
  {
    text: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: '/secondSprite.svg#icon-fullyIntegrated',
  },
  { text: 'Alcove', value: 'alcove', icon: '/secondSprite.svg#icon-alcove' },
];

const VehicleTypes: React.FC = () => {
  return (
    <div className={css.typesWrapper}>
      <h2 className={css.typesTitle}>Vehicle type</h2>
      <ul className={css.typesList}>
        {vehicleTypes.map((element, index) => {
          return (
            <li key={index} className={css.radioBtnItem}>
              <label className={css.radioBtnLabel}>
                <Field
                  type='radio'
                  name='form'
                  value={element.value}
                  className={css.radioBtn}
                />
                <div className={css.radioBtnCustom}>
                  <svg width={32} hanging={32} className={css.radioBtnIcon}>
                    <use href={`/categories${element.icon}`}></use>
                  </svg>
                  <p className={css.radioBtnText}>{element.text}</p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleTypes;
