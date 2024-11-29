import { Field } from 'formik';

import css from './VehicleEquipments.module.css';

const vehicleEquipments = [
  { text: 'AC', name: 'AC', icon: '/sprite.svg#icon-wind' },
  {
    text: 'Automatic',
    name: 'transmission',
    value: 'automatic',
    icon: '/sprite.svg#icon-diagram',
  },
  { text: 'TV', name: 'TV', icon: '/secondSprite.svg#icon-TV' },
  { text: 'Kitchen', name: 'kitchen', icon: '/sprite.svg#icon-cup-hot' },
  { text: 'Bathroom', name: 'bathroom', icon: '/sprite.svg#icon-shower' },
  { text: 'Microwave', name: 'microwave', icon: '/sprite.svg#icon-microwave' },
  {
    text: 'Refrigerator',
    name: 'refrigerator',
    icon: '/sprite.svg#icon-fridge',
  },
  { text: 'Radio', name: 'radio', icon: '/sprite.svg#icon-radios' },
  { text: 'Gas', name: 'gas', icon: '/sprite.svg#icon-gas-stove' },
  { text: 'Water', name: 'water', icon: '/sprite.svg#icon-water' },
];

const VehicleEquipments: React.FC = () => {
  return (
    <div className={css.equipmentsWrapper}>
      <h2 className={css.equipmentsTitle}>Vehicle equipment</h2>
      <ul className={css.equipmentsList}>
        {vehicleEquipments.map((element, index) => {
          return (
            <li key={index} className={css.equipmentItem}>
              <label className={css.checkboxLabel}>
                <Field
                  type='checkbox'
                  name={element.name}
                  value={element.value}
                  className={css.checkbox}
                />
                <div className={css.checkboxCustom}>
                  <svg width={32} hanging={32} className={css.checkboxIcon}>
                    <use href={`/categories${element.icon}`}></use>
                  </svg>
                  <p className={css.checkboxText}>{element.text}</p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VehicleEquipments;
