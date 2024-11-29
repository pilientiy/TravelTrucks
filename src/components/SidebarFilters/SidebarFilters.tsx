import { useDispatch } from 'react-redux';
import { Form, Formik, FormikHelpers } from 'formik';

import Location from './Location/Location';
import VehicleEquipments from './VehicleEquipments/VehicleEquipments';
import VehicleTypes from './VehicleTypes/VehicleTypes';

import { AppDispatch } from '../../redux/store';
import { fetchCampersByFilters } from '../../redux/operations';
import { clearFilters, setFilters } from '../../redux/slices/filtersSlice';
import { clearCampers } from '../../redux/slices/campersSlice';

import { FiltersState, FormValues } from '../../types/filtersTypes';
import css from './SidebarFilters.module.css';

const SidebarFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormValues = {
    location: '',
    AC: false,
    TV: false,
    water: false,
    bathroom: false,
    kitchen: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    radio: false,
    transmission: [''],
    form: '',
  };

  const handleSubmit = async (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    const completeValues: FiltersState = {
      location: values.location,
      AC: values.AC,
      TV: values.TV,
      water: values.water,
      bathroom: values.bathroom,
      kitchen: values.kitchen,
      refrigerator: values.refrigerator,
      microwave: values.microwave,
      gas: values.gas,
      radio: values.radio,
      transmission: values.transmission[1],
      form: values.form,
    };

    for (const key in completeValues) {
      const typedKey = key as keyof FiltersState;

      if (
        typeof completeValues[typedKey] === 'boolean' &&
        completeValues[typedKey] === false
      ) {
        completeValues[typedKey] = '' as unknown as undefined;
      }
    }

    dispatch(clearFilters());
    dispatch(clearCampers());

    dispatch(setFilters(completeValues));
    await dispatch(fetchCampersByFilters());

    action.resetForm();
  };

  return (
    <div className={css.sidebarWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Location />
          <p className={css.textForm}>Filters</p>
          <VehicleEquipments />
          <VehicleTypes />
          <button className={css.submitBtn} type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SidebarFilters;
